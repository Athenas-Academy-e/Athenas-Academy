'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Category from './[_componets]/getcategoria'
import { useEffect, useState } from 'react'
import { faBookOpen, faBriefcase, faComputer, faFileLines, faFlagUsa, faHeartPulse, faHelmetSafety, faHouse, faMicrochip, faMoneyBill, faPalette, faSprayCanSparkles, faUserNurse } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

// Define a estrutura dos dados dos cursos
interface Course {
    id_categoria: number;
    id_pacote: number;
    nome: string;
    categoria: string;
    icone: string;
    descricao: string;
}

// Definindo a estrutura do objeto de categoria
interface CategorizedCourses {
    id_categoria: number;
    nome: string;
    icone: string;
    descricao: string;
    cursos: Course[];
}
const iconMapping: { [key: string]: IconDefinition } = {
    'faBookOpen': faBookOpen,
    'faBriefcase': faBriefcase,
    'faComputer': faComputer,
    'faFileLines': faFileLines,
    'faFlagUsa': faFlagUsa,
    'faHeartPulse': faHeartPulse,
    'faHouse': faHouse,
    'faMicrochip': faMicrochip,
    'faMoneyBill': faMoneyBill,
    'faPalette': faPalette,
    'faSprayCanSparkles': faSprayCanSparkles,
    'faUserNurse': faUserNurse,
    'faHelmetSafety': faHelmetSafety
};
export default function Cards() {
    const [groupedCourses, setGroupedCourses] = useState<CategorizedCourses[]>([]);
    useEffect(() => {
        const fetchCategories = async () => {
            const grouped = await Category(); // Assumindo que a função Category retorna as categorias
            setGroupedCourses(grouped);
        };

        fetchCategories();
    }, []);

    console.log(groupedCourses)
    return (
        <div className='flex justify-center my-5'>
            <div className="grid gap-5 p-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {groupedCourses.map((itens) => (
                    <div className="flex max-w-[22rem] flex-col overflow-hidden rounded-xl bg-white shadown-md bg-clip-border ' hover:-translate-y-1 ease-linear duration-200 hover:shadow-inner text-icon" key={itens.id_categoria}>
                        <Link href={String('cursos/'+itens.id_categoria)}>
                            <div className={`flex justify-center my-3 overflow-hidden bg-transparent rounded-none shadow-none bg-clip-border mx-auto ease-in-out`}>
                                <FontAwesomeIcon icon={iconMapping[itens.icone]} className='w-[50px] h-[50px]' />
                            </div>
                            <div className="text-center">
                                <h4 className={`block font-sans text-2xl antialiased font-bold leading-snug tracking-normal text-icon`} >
                                    {itens.nome}
                                </h4>
                            </div>
                            <div className='text-justify'>
                                <p className="block mt-2 font-sans text-xl p-2 antialiased font-semibold leading-relaxed text-black">
                                    {itens.descricao}
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}

            </div>
        </div>
    )
}
