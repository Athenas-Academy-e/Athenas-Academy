import { auth } from "@/auth";
import { getAlunoByCurso } from "@/queries";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import ButtonCardCourse from "./_components/ButtonCardCourse";
import DrawerIcon from "@/components/Drawer";

export default async function Dashboard() {
    const session = await auth()
    if (!session) {
        redirect('/login')
    }
    const cookieStore = await cookies()
    const escola = cookieStore.get('escola')
    const codigo_escola = String(escola?.value)
    const dataCurso = await getAlunoByCurso(String(session.user?.id), codigo_escola)
    const data = Object.values(dataCurso)
    return (
        <DrawerIcon sessionData={session.user}>
            <div className="text-white flex gap-4 flex-wrap transition-all">
                {data.map((pacotes) => (
                    <div key={pacotes.id_aluno_curso} className="grid grid-cols-1">
                        <ButtonCardCourse id_aluno_curso={pacotes.id_aluno_curso} id_aluno={pacotes.id_aluno} nome={pacotes.nome} id_pacote={pacotes.id_pacote} />
                    </div>
                ))}
            </div>
        </DrawerIcon>
    );
}