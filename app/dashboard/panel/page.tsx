import { auth } from "@/auth";
import Header from "@/components/Header";
import { getAlunoBycurso, getAlunoByCurso } from "@/queries";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import ButtonCardCourse from "../_components/ButtonCardCourse";


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
            <div className="text-white flex gap-4 flex-wrap transition-all">
                {data.map((pacotes) => (
                    <div key={pacotes.id_aluno_curso} className="grid grid-cols-1">
                        <h1 key={pacotes.id_aluno_curso}>{pacotes.nome}</h1>
                        <Link href={'#'}>
                            <div className="card bg-base-100 w-96 shadow-xl" key={pacotes.id_pacote}>
                                <div className="card-body">
                                    <h2 className="card-title">{pacotes.nome}</h2>
                                    <div className="card-actions justify-end">
                                        <h1>{pacotes.id_aluno_curso}</h1>
                                        <h1>{pacotes.id_aluno}</h1>
                                        <ButtonCardCourse id_aluno_curso={pacotes.id_aluno_curso} id_aluno={pacotes.id_aluno}/>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </Header>
    );
}