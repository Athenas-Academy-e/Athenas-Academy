import { auth } from "@/auth";
import Header from "@/components/Header";
import { getAlunoByCurso, getParcelas } from "@/queries";
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

  const dataFinancePromises = data.map(async (value) => {
    const dataFinance = await getParcelas(value.id_aluno_curso, codigo_escola, value.id_aluno)
    return { ...value, dataFinance }
  })

  const dataFinanceResults = await Promise.all(dataFinancePromises)
  return (
    <Header sessionData={session.user}>
      <div className="text-white flex flex-col gap-4 flex-wrap transition-all ">
        {dataFinanceResults.map((pacotes) => (
          <div key={pacotes.id_aluno_curso} className="overflow-x-auto">
            <div key={pacotes.id_pacote}>
              <h1>Você está visualizando as parcelas do curso: {pacotes.nome}</h1>
              <table className="table">
                <thead className="text-white font-bold">
                  <tr>
                    <th>Parcelas</th>
                    <th>Vencimento</th>
                    <th>Valor</th>
                    <th>Situação</th>
                    <th>Opção</th>
                  </tr>
                </thead>
                <tbody>
                  {pacotes.dataFinance.map((parcela: any) => (
                    <tr key={parcela.numero_lancamento} className="hover cursor-pointer">
                      <td>{parcela.historico}</td>
                      <td>{new Date(parcela.vencimento).toLocaleDateString()}</td>
                      <td>{parcela.valor}</td>
                      <td>{parcela.quitado === 'S' ? "Quitada" : "Aberta"}</td>
                      <td><Link href={`/dashboard/finance/pay?${new URLSearchParams({ nl: parcela.numero_lancamento, idac: parcela.id_aluno_curso })}`}>Pagar</Link></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        ))}
      </div>
    </Header>
  );
}