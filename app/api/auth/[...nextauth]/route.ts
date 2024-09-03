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
                console.log(credentials);
                if(!credentials){
                    return null;
                }

                if(credentials.username === "test" && credentials.password === "123"){
                    return {
                        id: "1",
                        name: "Teste",
                        email: "test@example.com",
                    }
                }

                return null;
            }
        })
    ]
})

export { handler as GET, handler as POST }