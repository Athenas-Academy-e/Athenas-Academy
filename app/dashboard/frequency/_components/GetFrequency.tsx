import { getFrequencia } from "@/queries";
import { cookies } from "next/headers";

export default async function GetFrequency(){
  const cookieStore = await cookies()
  const escola = cookieStore.get('escola')
  const id_aluno_curso = cookieStore.get('iacurso')
  const resultQuery = await getFrequencia(String(escola?.value),String(id_aluno_curso?.value))
  const resume = Object.values(resultQuery)
  return resume
}