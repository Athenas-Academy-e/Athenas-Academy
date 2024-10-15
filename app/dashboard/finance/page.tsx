import { auth } from "@/auth";
import Header from "@/components/Header";
import { getAlunoByCurso } from "@/queries";
import Link from "next/link";
import { redirect } from "next/navigation";


export default async function Finance() {
  const session = await auth()
  if (!session) {
    redirect('/')
    return null
  }
  const codigo_escola = String(process.env.CODIGO_ESCOLA)
  const dataCurso = await getAlunoByCurso(String(session.user?.id), codigo_escola)
  const data = Object.values(dataCurso)
  data.forEach((value) => {
    console.log(value)
  })
  return (
    <Header sessionData={session.user}>
      <div className="text-white flex flex-col gap-4 flex-wrap transition-all">
        {data.map((pacotes) => (
          <div key={pacotes.id_aluno_curso} className="overflow-x-auto">
            <div key={pacotes.id_pacote}>
              <h1>Você está visualizando as parcelas do curso: {pacotes.nome}</h1>
              <table className="table">
                <thead>
                  <th>Vencimento</th>
                  <th>Valor</th>
                  <th>Situação</th>
                  <th>Opção</th>
                </thead>
                <tbody>
                  
                </tbody>
              </table>
            </div>

          </div>
        ))}
      </div>
    </Header>
  );
}