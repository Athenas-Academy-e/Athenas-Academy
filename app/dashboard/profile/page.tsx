import Header from "@/components/Header";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
    const Session = await getServerSession();
    if (!Session) {
        redirect('/');
    }
    return (<>
        <Header sessionData={Session?.user}>
            Page Profile
        </Header>
    </>)
}