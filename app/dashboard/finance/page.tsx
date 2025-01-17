import { auth } from "@/auth";
import Header from "@/components/Header"; // Certifique-se de que o caminho está correto
import { getAlunoBycurso, getParcelas } from "@/queries";
import { redirect } from "next/navigation";
import ModalA from "./components/Modal";
import { cookies } from "next/headers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Área do Aluno - Financia",
  robots: "noindex, nofollow",
};

export default async function Finance() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  const cookieStore = await cookies();
  const escola = cookieStore.get("escola");
  const codigo_escola = String(escola?.value);
  const idalunocurso = cookieStore.get("iacurso");
  const id_aluno_curso = String(idalunocurso?.value);

  const dataCurso = await getAlunoBycurso(
    String(session.user?.id),
    codigo_escola,
    String(id_aluno_curso)
  );
  const data = Object.values(dataCurso);

  const dataFinancePromises = data.map(async (value: any) => {
    const dataFinance = await getParcelas(id_aluno_curso, codigo_escola, value.id_aluno);
    return { ...value, dataFinance };
  });

  const dataFinanceResults = await Promise.all(dataFinancePromises);

  return (
    <Header sessionData={session.user}>
      {dataFinanceResults.map((pacotes) => (
        <div key={pacotes.id_aluno_curso} className="flex w-full flex-col flex-wrap overflow-hidden">
          <div className="text-black flex flex-col gap-4 flex-wrap transition-all dark:text-white">
            <h1 className="mb-2">Você está visualizando as parcelas do curso: {pacotes.nome}</h1>
            <div className="overflow-y-auto mt-4  ">
              <table className="table bg-white text-black rounded-md dark:bg-base-100">
                <thead className="text-black dark:text-white font-bold sticky top-0 bg-base-100 z-10">
                  <tr>
                    <th>Parcelas</th>
                    <th>Vencimento</th>
                    <th>Valor</th>
                    <th>Situação</th>
                    <th>Opção</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={`${dataFinanceResults[0].dataFinance[0] ? "hidden" : "table-row"} text-black dark:text-white`}>
                    <td className={`${dataFinanceResults[0].dataFinance[0] ? "hidden" : "table-cell"} text-center text-black dark:text-white`} colSpan={5}>
                      Você não possui nenhuma parcelas
                    </td>
                  </tr>
                  {pacotes.dataFinance.map((parcela: any) => (
                    <tr key={parcela.numero_lancamento} className="text-black dark:text-white cursor-pointer">
                      <td>{parcela.historico}</td>
                      <td>{new Date(parcela.vencimento).toLocaleDateString()}</td>
                      <td>R$ {parcela.valor}</td>
                      <td>{parcela.quitado === "S" ? "Quitada" : "Aberta"}</td>
                      <td>
                        <ModalA
                          data={parcela}
                          numero_lancamento={parcela.numero_lancamento}
                          idac={parcela.id_aluno_curso}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
    </Header>
  );
}
