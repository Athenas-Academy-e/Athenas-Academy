import { auth } from "@/auth"
import {  getFrequenciaAula } from "@/queries"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"


export default async function frequency() {
  const session = await auth()
  if (!session) {
    redirect('/login')
  }
  const cookieStore = await cookies()
  const escola = cookieStore.get('escola')
  const id_aluno = cookieStore.get('ia')
  const id_aluno_curso = cookieStore.get('iacurso')
  const frequencia = await getFrequenciaAula(String(escola?.value), String(id_aluno_curso?.value))
  console.log(frequencia)
  // const dataCurso = await getAlunoByCurso(String(session.user?.id), codigo_escola)
  // const data = Object.values(dataCurso)
  // console.log(data)
 
}