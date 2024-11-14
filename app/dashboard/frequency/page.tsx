import { auth } from "@/auth"
import { getAlunoByCurso, getFrequenciaAula } from "@/queries"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"


export default async function frequency() {
  const session = await auth()
  if (!session) {
    redirect('/login')
  }
  const cookieStore = await cookies()
  const escola = cookieStore.get('escola')
  const codigo_escola = String(escola?.value)
  const dataCurso = await getAlunoByCurso(String(session.user?.id), codigo_escola)
  const data = Object.values(dataCurso)
  // console.log(data)
 
}