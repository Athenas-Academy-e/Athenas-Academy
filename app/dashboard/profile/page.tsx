import { auth } from "@/auth";
import Header from "@/components/Header";
import { getAlunoByCurso, getUserByUser } from "@/queries";
import { cookies } from "next/headers";
import ProfilePage from "./_actions/profilePage";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Área do Aluno - Perfil",
    robots: "noindex, nofollow",
};

export default async function Profile() {
    const session = await auth()
    const cookieStore = await cookies()
    const escola = cookieStore.get('escola')
    const codigo_escola = String(escola?.value)
    const dataCurso = await getAlunoByCurso(String(session?.user?.id), codigo_escola)
    const data:any = Object.values(dataCurso)
    const dados = await getUserByUser(String(data[0].matricula), codigo_escola)
    if (!session) {
        redirect('/login')
      }
    return (
        <Header sessionData={session?.user}>
        {ProfilePage(dados)}
        </Header>
    )
    

}