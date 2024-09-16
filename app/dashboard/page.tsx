import Header from "@/components/Header";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function dashboard() {
    const Session = await getServerSession();
    if (!Session) {
        redirect('/');
    }
    return (
        <Header sessionData={Session?.user}>
            <h1 className="text-white text-3xl">Pagina Inicial</h1>
        </Header>
    )
}