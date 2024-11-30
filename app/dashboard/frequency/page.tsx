import { auth } from "@/auth"
import Header from "@/components/Header"
import { redirect } from "next/navigation"
import FrequencyData from "./_components/Frequency"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBan, faChalkboard, faCircleCheck, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import GetFrequency from "./_components/GetFrequency"

export default async function frequency() {
  const session = await auth()
  if (!session) {
    redirect('/login')
  }
  const frequenciaData = await FrequencyData()
  const resumo = await GetFrequency()
  return (
    <Header sessionData={session.user}>
      <div className="grid col-span-2">
        <div className="flex gap-2 justify-center">
          <div className="border-medium rounded">
            <h1 className={`text-center text-white font-bold text-lg bg-blue-400`}>Aulas</h1>
            <div className="flex w-80 h-40 items-center">
              <div className={`flex justify-end items-center w-40 h-40  text-4xl text-white bg-blue-400`}><FontAwesomeIcon icon={faChalkboard} /></div>
              <div className={`flex justify-center items-center w-full h-40  text-4xl text-white bg-blue-400`}>{frequenciaData.totalAulas}</div>
            </div>
          </div>
          <div className="border-medium rounded">
            <h1 className={`text-center text-white font-bold text-lg bg-blue-400`}>Presença</h1>
            <div className="flex w-80 h-40 items-center">
              <div className={`flex justify-end items-center w-40 h-40  text-4xl text-white bg-blue-400`}><FontAwesomeIcon icon={faCircleCheck} /></div>
              <div className={`flex justify-center items-center w-full h-40  text-4xl text-white bg-blue-400`}>{frequenciaData.presenca}</div>
            </div>
          </div>
          <div className="border-medium rounded">
            <h1 className={`text-center text-white font-bold text-lg bg-blue-400`}>Faltas</h1>
            <div className="flex w-80 h-40 items-center">
              <div className={`flex justify-end items-center w-40 h-40  text-4xl text-white bg-blue-400`}><FontAwesomeIcon icon={faBan} /></div>
              <div className={`flex justify-center items-center w-full h-40  text-4xl text-white bg-blue-400`}>{frequenciaData.faltas}</div>
            </div>
          </div>
          <div className="border-medium rounded">
            <h1 className={`text-center text-white font-bold text-lg ${frequenciaData.percentualPresenca < 75 ? 'bg-red-600' : frequenciaData.percentualPresenca >= 75 && frequenciaData.percentualPresenca <= 78 ? 'bg-yellow-400' : 'bg-green-500'}`}>Frequencia</h1>
            <div className="flex w-80 h-40 items-center">
              <div className={`flex justify-end items-center w-40 h-40  text-4xl text-white ${frequenciaData.percentualPresenca < 75 ? 'bg-red-600' : frequenciaData.percentualPresenca >= 75 && frequenciaData.percentualPresenca <= 78 ? 'bg-yellow-400' : 'bg-green-500'}`}><FontAwesomeIcon icon={frequenciaData.percentualPresenca >= 75 ? faThumbsUp : faThumbsDown} /></div>
              <div className={`flex justify-center items-center w-full h-40  text-4xl text-white ${frequenciaData.percentualPresenca < 75 ? 'bg-red-600' : frequenciaData.percentualPresenca >= 75 && frequenciaData.percentualPresenca <= 78 ? 'bg-yellow-400' : 'bg-green-500'}`}>{parseFloat(frequenciaData.percentualPresenca.toFixed(2))} %</div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto w-full bg-white rounded-md">
        <div className="text-center my-2 text-black">
          <h2>Registro de Frequencia</h2>
        </div>
        <div className="">
          <table className="table text-center text-black">
            <thead className=" font-bold text-base text-black">
              <tr className="table-row">
                <th>Data</th>
                <th>Horário</th>
                <th>Tipo de Aula</th>
                <th>Presença</th>
              </tr>
            </thead>
            <tbody>
              {resumo.map((value)=>(
                <tr key={value.id_presenca}>
                  <td>{new Date(value.data).toLocaleDateString()}</td>
                  <td>{value.descricao}</td>
                  <td>{value.aula_tipo}</td>
                  <td>{value.presenca === 'P' ? 'Presente': 'Ausente'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Header>
  )
}
