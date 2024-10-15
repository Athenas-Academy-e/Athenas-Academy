import Header from "@/components/Header";


export default async function ProfilePage() {

    return (<>
    <Header sessionData="{Session?.user}">
        <p>Page Settings</p>
    </Header>
    </>)
}