import { auth } from "@/auth";
import { getModulo } from "@/queries";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Notas() {
  const session = await auth()
  if (!session) {
    redirect('/login')
  }
  const cookieStore = await cookies()
  const escola = cookieStore.get('escola')
  const id_aluno_curso = cookieStore.get('iacurso')
  const modulos = await getModulo(String(escola?.value),String(id_aluno_curso?.value))
  const modulo = Object.values(modulos)
  console.log(modulo)
}