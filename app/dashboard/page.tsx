import Navbar from "@/components/navbar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function dashboard() {
    const Session = await getServerSession();
    console.log(Session)
    if(!Session){
        redirect('/');
    }
    return (
        <div>
            <Navbar sessionData={Session}/>
        </div>
    )
}