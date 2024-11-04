import { auth } from "@/auth";
import Header from "@/components/Header";
import ProfilePage from "../profile/_actions/profilePage";


export default async function Settings() {
    const session = await auth()
    return (<>
    <Header sessionData={session?.user}>
        
    </Header>
    </>)
}