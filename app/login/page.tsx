import { database } from "@/database";
import LoginForm from "../(auth)/login/LoginForms";
import Image from "next/image";
import { getEmpresa } from "@/queries";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Área do Aluno - Login", 
  description: "Bem-vindo à área do aluno. Gerencie seu aprendizado e acesse conteúdos exclusivos.",
  robots: "index, follow",
};

export default async function LoginPage() {
  const empresa = await getEmpresa()
  const Session = await auth()
  if(Session){
    redirect('/dashboard')
  }
 
  return (
  <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-screen bg-gray-200 backdrop-blur-lg dark:bg-base-200 transition-all">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm my-6">
      {database.settings.map(settings => (
        <div className="mx-auto h-10 w-50" key={settings.Companytitle}>
          <Image src={settings.logolight} width={300} height={286} alt={settings.alt} className="mx-auto dark:hidden" />
          <Image src={settings.logo} width={300} height={286} alt={settings.alt} className="mx-auto dark:block hidden" />
        </div>
      ))}
    </div>
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <LoginForm empresa={empresa}/>
    </div>
  </div>
  )
}