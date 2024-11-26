'use client'

interface PacotesProps {
  id_aluno_curso: string,
  id_aluno: string,
  nome?: string,
  id_pacote?: string
}
export default function ButtonCardCourse({ id_aluno_curso, id_aluno, nome, id_pacote }: PacotesProps) {
  function setCookie(name: string, value: string) {
    document.cookie = `${name}=${value}; Session; path=/`;
  }

  // Função chamada quando o botão é clicado
  function handleButton(values: PacotesProps) {
    const aluno_curso = values.id_aluno_curso
    const aluno = values.id_aluno
    setCookie('iacurso', aluno_curso);
    setCookie('ia', aluno);
    document.location.href = '/dashboard/panel'
  }

  function handleClick() {
    handleButton({ id_aluno_curso, id_aluno })
    document.location.href = '/dashboard/panel'
  }

  return (
    <div className="card bg-base-100 w-96 shadow-xl cursor-pointer" key={id_pacote} >
      <div className="card-body" onClick={() => handleClick()}>
        <h2 className="card-title">{nome}</h2>
        <div className="card-actions justify-end">
          {/* <h1>{id_aluno_curso}</h1>
          <h1>{id_aluno}</h1> */}
          <button className="btn btn-primary" onClick={() => handleButton({ id_aluno_curso, id_aluno })}>Ver Mais</button>
        </div>
      </div>
    </div>

  )
}