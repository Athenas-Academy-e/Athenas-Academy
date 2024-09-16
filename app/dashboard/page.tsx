import Header from "@/components/Header";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function dashboard() {
    const Session = await getServerSession();
    if(!Session){
        redirect('/');
    }
    return (
        <div>
            <Header sessionData={Session?.user}/>
        </div>
    )
}