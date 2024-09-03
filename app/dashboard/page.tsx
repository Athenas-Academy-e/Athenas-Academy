import LogoutButton from "@/components/LogoutButton";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function dashboard() {
    const Session = await getServerSession();

    if(!Session){
        redirect('/');
    }
    return (
        <div>
            <div>Olá, {Session?.user?.name}</div>
            <div>Dashboard</div>
            <LogoutButton/>
        </div>
    )
}