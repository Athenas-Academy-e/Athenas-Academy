import { auth } from "@/auth";
import Header from "@/components/alunos/Header";
import { database } from "@/database";
import { getAlunoBycurso } from "@/queries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
export const metadata: Metadata = {
    title: "Área do Aluno - Painel",
    robots: "noindex, nofollow",
};

export default async function Panel() {
    const session = await auth()
    if (!session) {
        redirect('/login')
    }
    const cookieStore = await cookies()
    const escola = cookieStore.get('escola')
    const aluno = cookieStore.get('ia')
    const id_aluno_curso = cookieStore.get('iacurso')
    const codigo_escola = String(escola?.value)
    const dataCurso = await getAlunoBycurso(String(aluno?.value), codigo_escola, String(id_aluno_curso?.value))
    const data = Object.values(dataCurso)
    return (
        <Header sessionData={session.user}>
            <div className="text-black dark:text-white flex flex-col gap-4 flex-wrap transition-all">
                {data.map((pacotes: any) => (
                    <div key={pacotes.id_aluno_curso} className="grid grid-cols-1">
                        <h1 key={pacotes.id_pacote}>Você esta visualizando as informações do curso de: <span>{pacotes.nome}</span>.</h1>
                    </div>
                ))}
                <div className="flex gap-4 flex-wrap justify-center transition-all">
                    {database.pages.map((value: any) => (
                        <div key={value.id} className="button bg-base-100 p-4 rounded-md cursor-pointer hover:scale-105 transition-all shadow-md">
                            <Link href={value.url} className="text-black dark:text-white">
                                <div className="text-center">
                                    <FontAwesomeIcon icon={value.icon} className="text-black dark:text-white text-[2em]"></FontAwesomeIcon>
                                </div>
                                <div>
                                    {value.name}
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </Header>
    );
}