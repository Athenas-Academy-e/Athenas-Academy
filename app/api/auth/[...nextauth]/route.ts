import { getUserByUser } from "@/queries";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    pages: {
        signIn: "/",
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text"},
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if(!credentials){
                    return null;
                }

                const login:any = await getUserByUser(credentials.username, credentials.password);

                if(!login[0]){
                    console.log(login[0])
                    return null;
                }
              
                if(credentials.username === login[0].user && credentials.password === login[0].password){
                    return {
                        id: login[0].id,
                        name: login[0].name,
                        email: login[0].email,
                    }
                } 

                return null;
            }
        })
    ]
})

export { handler as GET, handler as POST }