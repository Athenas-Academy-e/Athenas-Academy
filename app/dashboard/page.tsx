import Header from "@/components/Header";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Session } from "next-auth";

export default async function Dashboard() {
    const session: Session | null = await getServerSession();
    console.log(session?.user)
    if (!session || !session.user) {
        redirect("/");
        return null;
    }

    return (
        <Header sessionData={session.user}>
            <h1 className="text-white text-3xl">
                {session.user.curso}
                {/* {session.user.curso ? session.user.curso : "Sem curso disponível"} */}
            </h1>
        </Header>
    );
}