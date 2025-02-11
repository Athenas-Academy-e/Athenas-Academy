import { auth } from "@/auth";
import Header from "@/components/alunos/Header";
import { redirect } from "next/navigation";


export default async function Settings() {
    const session = await auth()
    if (!session) {
        redirect('/login')
      }
    return (<>
    <Header sessionData={session?.user}>
        <div className="flex">

        </div>
    </Header>
    </>)
}