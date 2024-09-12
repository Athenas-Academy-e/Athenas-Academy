import Navbar from "@/components/navbar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
    const Session = await getServerSession();
    if (!Session) {
        redirect('/');
    }
    return (<>
    <Navbar/>
    Page Settings
    </>)
}