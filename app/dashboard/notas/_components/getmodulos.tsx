import { getModulo, getNotas } from "@/queries"
import { cookies } from "next/headers"

export default async function GetModulos() {
  const cookieStore = await cookies()
  const escola = cookieStore.get('escola')
  const id_aluno_curso = cookieStore.get('iacurso')
  const modulos = await getModulo(String(escola?.value), String(id_aluno_curso?.value))
  const modulo = Object.values(modulos)
  return modulo
}