import { auth } from "@/auth";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import FrequencyData from "./_components/Frequency";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faChalkboard, faCircleCheck, faFaceSadCry, faFaceSadTear, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import GetFrequency from "./_components/GetFrequency";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Área do Aluno - Frequencia",
  robots: "noindex, nofollow",
};

export default async function frequency() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  const frequenciaData = await FrequencyData();
  const resumo = await GetFrequency();
  return (
    <Header sessionData={session.user}>
      {/* Cards Icons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="border-medium rounded">
          <h1 className={`text-center text-white font-bold text-lg bg-blue-400`}>Aulas</h1>
          <div className="flex w-full h-40 items-center">
            <div className={`flex justify-end items-center w-16 h-full text-4xl text-white bg-blue-400`}>
              <FontAwesomeIcon icon={faChalkboard} />
            </div>
            <div className={`flex justify-center items-center w-full h-40 text-4xl text-white bg-blue-400`}>
              {frequenciaData.totalAulas != 0 ? frequenciaData.totalAulas : '-'}
            </div>
          </div>
        </div>
        <div className="border-medium rounded">
          <h1 className={`text-center text-white font-bold text-lg bg-blue-400`}>Presença</h1>
          <div className="flex w-full h-40 items-center">
            <div className={`flex justify-end items-center w-16 h-full text-4xl text-white bg-blue-400`}>
              <FontAwesomeIcon icon={faCircleCheck} />
            </div>
            <div className={`flex justify-center items-center w-full h-40 text-4xl text-white bg-blue-400`}>
              {frequenciaData.presenca != 0 ? frequenciaData.presenca : '-'}
            </div>
          </div>
        </div>
        <div className="border-medium rounded">
          <h1 className={`text-center text-white font-bold text-lg bg-blue-400`}>Faltas</h1>
          <div className="flex w-full h-40 items-center">
            <div className={`flex justify-end items-center w-16 h-full text-4xl text-white bg-blue-400`}>
              <FontAwesomeIcon icon={faBan} />
            </div>
            <div className={`flex justify-center items-center w-full h-40 text-4xl text-white bg-blue-400`}>
              {frequenciaData.faltas != 0 ? frequenciaData.faltas : '-'}
            </div>
          </div>
        </div>
        <div className="border-medium rounded">
          <h1 className={`text-center text-white font-bold text-lg ${frequenciaData.percentualPresenca === 0 ? 'bg-blue-400' : frequenciaData.percentualPresenca < 75 ? 'bg-red-600' : frequenciaData.percentualPresenca >= 75 && frequenciaData.percentualPresenca <= 78 ? 'bg-yellow-400' : 'bg-green-500'}`}>
            Frequencia
          </h1>
          <div className="flex w-full h-40 items-center">
            <div className={`flex justify-end items-center w-16 h-full text-4xl text-white ${frequenciaData.percentualPresenca === 0 ? 'bg-blue-400' : frequenciaData.percentualPresenca < 75 ? 'bg-red-600' : frequenciaData.percentualPresenca >= 75 && frequenciaData.percentualPresenca <= 78 ? 'bg-yellow-400' : 'bg-green-500'}`}>
              <FontAwesomeIcon icon={frequenciaData.percentualPresenca >= 75 ? faThumbsUp : frequenciaData.percentualPresenca === 0 ? faFaceSadTear : faThumbsDown} />
            </div>
            <div className={`flex justify-center items-center w-full h-40 text-4xl text-white ${frequenciaData.percentualPresenca === 0 ? 'bg-blue-400' : frequenciaData.percentualPresenca < 75 ? 'bg-red-600' : frequenciaData.percentualPresenca >= 75 && frequenciaData.percentualPresenca <= 78 ? 'bg-yellow-400' : 'bg-green-500'}`}>
              {frequenciaData.percentualPresenca != 0 ? parseFloat(frequenciaData.percentualPresenca.toFixed(2)) + '%' : '-'}
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      {/* Inicio Tabela */}
      <div className="m-auto w-full bg-white dark:bg-base-100 rounded-md mt-6">
        <div className="text-center my-2 text-black dark:text-white">
          <h2>Registro de Frequência</h2>
        </div>
        <div className="">
          <div className="overflow-x-auto max-h-[calc(100vh-350px)]">
            <table className="table text-center text-black w-full dark:text-white">
              <thead className="font-bold text-base text-black dark:text-white bg-white dark:bg-base-100 sticky top-0 shadow-sm">
                <tr className="table-row">
                  <th>Data</th>
                  <th>Horário</th>
                  <th>Tipo de Aula</th>
                  <th>Presença</th>
                </tr>
              </thead>
              <tbody>
                <tr className={`${resumo[0] ? "hidden": "table-row"} text-center text-black dark:text-white`}>
                  <td className={`${resumo[0] ? "hidden": "table-cell"} text-center text-black dark:text-white`} colSpan={4}>Não existe nenhum registro de frequencia</td>
                </tr>
                {resumo.map((value: any) => (
                  <tr key={value.id_presenca} className="table-row">
                    <td>{new Date(value.data).toLocaleDateString()}</td>
                    <td>{value.descricao}</td>
                    <td>{value.aula_tipo}</td>
                    <td>{value.presenca === 'P' ? 'Presente' : 'Ausente'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Header>
  );
}
