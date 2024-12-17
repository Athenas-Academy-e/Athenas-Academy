import { auth } from "@/auth";
import Header from "@/components/Header";
import { getAlunoBycurso,  getParcelas } from "@/queries";
import { redirect } from "next/navigation";
import ModalA from "./components/Modal";
import { cookies } from "next/headers";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Área do Aluno - Financia",
  robots: "noindex, nofollow",
};
export default async function Finance() {

  const session = await auth()
  if (!session) {
    redirect('/login')
  }
  const cookieStore = await cookies()
  const escola = cookieStore.get('escola')
  const codigo_escola = String(escola?.value)
  const idalunocurso = cookieStore.get('iacurso')
  const id_aluno_curso = String(idalunocurso?.value)

  const dataCurso = await getAlunoBycurso(String(session.user?.id), codigo_escola, String(id_aluno_curso))
  const data = Object.values(dataCurso)

  const dataFinancePromises = data.map(async (value:any) => {
    const dataFinance = await getParcelas(id_aluno_curso, codigo_escola, value.id_aluno)
    return { ...value, dataFinance }
  })
  
  const dataFinanceResults = await Promise.all(dataFinancePromises)
  return (
    <Header sessionData={session.user}>
      {dataFinanceResults.map((pacotes) => (
        <div key={pacotes.id_aluno_curso} className="flex w-full flex-col">
          <div key={pacotes.id_aluno_curso} className="text-black flex flex-col gap-4 flex-wrap transition-all ">
            <div key={pacotes.id_aluno_curso} className="overflow-x-auto">
              <div key={pacotes.id_pacote}>
                <h1>Você está visualizando as parcelas do curso: {pacotes.nome}</h1>
                <table className="table bg-white rounded-md text-black">
                  <thead className="text-black font-bold">
                    <tr>
                      <th>Parcelas</th>
                      <th>Vencimento</th>
                      <th>Valor</th>
                      <th>Situação</th>
                      <th>Opção</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`${dataFinanceResults[0].dataFinance[0]? 'hidden': 'table-row'}`}>
                      <td className={`${dataFinanceResults[0].dataFinance[0]? 'hidden': 'table-cell'} text-center`} colSpan={5}>Você não possui nenhuma parcelas</td>
                    </tr>
                    {pacotes.dataFinance.map((parcela: any) => (
                      <tr key={parcela.numero_lancamento} className=" text-black cursor-pointer">
                        <td>{parcela.historico}</td>
                        <td>{new Date(parcela.vencimento).toLocaleDateString()}</td>
                        <td>R$ {parcela.valor}</td>
                        <td>{parcela.quitado === 'S' ? "Quitada" : "Aberta"}</td>
                        <td><ModalA data={parcela} numero_lancamento={parcela.numero_lancamento} idac={parcela.id_aluno_curso}></ModalA></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Header>
  );
}