'use server'
import { getNotas } from "@/queries"
import { cookies } from "next/headers"

export default async function getNota(id_modulo:string) {
  const cookieStore = await cookies()
  const escola = cookieStore.get('escola')
  const id_aluno_curso = cookieStore.get('iacurso')
  const notas = await getNotas(id_modulo, String(escola?.value), String(id_aluno_curso?.value))
  const provas = Object.values(notas)
  return {provas}
}