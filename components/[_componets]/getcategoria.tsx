"use server"
import { getCategorias } from "@/queries";

// Define a estrutura dos dados dos cursos
interface Course {
  id_categoria: number;
  id_pacote: number;
  nome: string;
  categoria: string;
  icone: string;
}

// Definindo a estrutura do objeto de categoria
interface CategorizedCourses {
  id_categoria: number;
  nome: string;
  icone: string;
  cursos: Course[];
}

export default async function Category() {
  // Fetch data on the server
  const courses: Course[] = await getCategorias('2B0762C64C4D');
  // Agrupar cursos por categoria, incluindo nome, ícone e cursos
  const groupedCourses: { [key: string]: CategorizedCourses } = courses.reduce((acc, course) => {
    if (!acc[course.categoria]) {
      // Inicializa a categoria caso não exista
      acc[course.categoria] = {
        id_categoria: course.id_categoria,
        nome: course.categoria,
        icone: course.icone, // Assumindo que o ícone é o mesmo para todos os cursos da categoria
        cursos: []
      };
    }

    // Adiciona o curso na categoria correspondente
    acc[course.categoria].cursos.push(course);

    return acc;
  }, {} as { [key: string]: CategorizedCourses });

  // Converte o objeto em um array para facilitar a manipulação
  return Object.values(groupedCourses);
}
