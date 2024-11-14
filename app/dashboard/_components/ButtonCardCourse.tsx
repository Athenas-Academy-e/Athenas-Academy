'use client'

import { cookies } from "next/headers"

interface PacotesProps{
  id_aluno_curso:string,
  id_aluno:string,
}
export default function ButtonCardCourse({id_aluno_curso, id_aluno}:PacotesProps) {
  
  function setCookie(name: string, value: string, days: number) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }

  // Função chamada quando o botão é clicado
  function handleButton(values: PacotesProps) {
    const aluno_curso = values.id_aluno_curso
    const aluno = values.id_aluno
    const aluno_curso_encode = encodeURI(aluno_curso)
    setCookie('id_aluno_curso', values.id_aluno_curso, 7);  // Exemplo de como configurar um cookie com duração de 7 dias
    setCookie('id_aluno', values.id_aluno, 7);
    console.log(values, aluno_curso_encode); // Aqui você pode verificar os valores antes de configurar os cookies
    
    // Você pode agora redirecionar ou fazer outra coisa após configurar os cookies, se necessário
  }
  return (
  <button className="btn btn-primary" onClick={()=>handleButton({id_aluno_curso,id_aluno})}>Ver Mais</button>
)
}