import { database } from "@/database";
import LoginForm from "../(auth)/login/LoginForms";
import Image from "next/image";
import { getEmpresa } from "@/queries";
import { auth } from "@/auth";
import { redirect } from "next/navigation";


export default async function LoginPage() {
  const empresa = await getEmpresa()
  const Session = await auth()
  if(Session){
    redirect('/dashboard')
  }
 
  return (
  <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-screen">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm my-6">
      {database.settings.map(settings => (
        <div className="mx-auto h-10 w-50" key={settings.Companytitle}>
          <Image src={settings.logo} width={300} height={286} alt={settings.alt} className="mx-auto" />
        </div>
      ))}
    </div>
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <LoginForm empresa={empresa}/>
    </div>
  </div>
  )
}