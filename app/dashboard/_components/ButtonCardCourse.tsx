'use client'

interface PacotesProps{
  id_aluno_curso:string,
  id_aluno:string,
}
export default function ButtonCardCourse({id_aluno_curso, id_aluno}:PacotesProps) {
  function setCookie(name: string, value: string) {
    document.cookie = `${name}=${value}; Session; path=/`;
    // document.cookie = `${name}=${value}; ${expires}; path=/`;
  }

  // Função chamada quando o botão é clicado
  function handleButton(values: PacotesProps) {
    const aluno_curso = values.id_aluno_curso
    const aluno = values.id_aluno
    setCookie('iacurso', aluno_curso);  
    setCookie('ia', aluno);
    console.log(values); 
    
  }
  return (
  <button className="btn btn-primary" onClick={()=>handleButton({id_aluno_curso,id_aluno})}>Ver Mais</button>
)
}