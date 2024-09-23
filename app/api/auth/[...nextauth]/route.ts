import { getUserByUser, getAlunoByCurso } from "@/queries";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    pages: {
        signIn: "/",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials) {
                    return null;
                }

                const codigo_escolar = String(process.env.CODIGO_ESCOLA);
                const type = "AL";

                const login: any = await getUserByUser(
                    credentials.username,
                    codigo_escolar,
                    type
                );

                if (!login || !login[0]) {
                    return null;
                }

                const pacote: any = await getAlunoByCurso(
                    String(login[0].id_aluno),
                    codigo_escolar
                );
                const yearPassword = new Date(login[0].data_nascimento)
                    .getFullYear()
                    .toString();

                if (
                    credentials.username === login[0].matricula &&
                    credentials.password === yearPassword &&
                    type === "AL" &&
                    login[0].situacao === "A"
                ) {
                    const user = {
                        id: pacote[0].id_aluno,
                        name: login[0].nome,
                        email: login[0].email,
                        id_pacote: pacote[0].id_pacote,
                        matricula: login[0].matricula,
                        data_nascimento: login[0].data_nascimento,
                        situacao: login[0].situacao,
                        curso: pacote[0].nome,
                        total_parcelas: pacote[0].parcelas,
                        duracao: pacote[0].duracao,
                        image: login[0].image,
                    };

                    // console.log("Authorized User:", user); // Verificar dados do usuário
                    return user;
                }

                return null;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            // Verificar se os dados do usuário estão sendo adicionados ao token
            if (user) {
                // console.log("User in JWT Callback:", user); // Log do usuário ao criar o JWT
                token.id = user.id;
                token.name = user.name;  // Garantir que o campo 'name' seja adicionado
                token.email = user.email; // Garantir que o campo 'email' seja adicionado
                token.matricula = user.matricula;
                token.curso = user.curso;
                token.situacao = user.situacao;
                token.data_nascimento = user.data_nascimento;
                token.total_parcelas = user.total_parcelas;
                token.duracao = user.duracao;
                token.id_pacote = user.id_pacote;
                token.image = user.image;
            }
            // console.log("Token after JWT Callback:", token); // Verificar o token final
            return token;
        },
        async session({ session, token }) {
            // Verificar se os dados do token estão sendo propagados para a sessão
            // console.log("Token in Session Callback:", token); // Log do token recebido no callback de sessão
            if (token) {
                session.user = {
                    ...session.user,
                    id: token.id as string,
                    matricula: token.matricula as string,
                    curso: token.curso as string,
                    situacao: token.situacao as string,
                    data_nascimento: token.data_nascimento as string,
                    total_parcelas: token.total_parcelas as number,
                    duracao: token.duracao as string,
                    id_pacote: token.id_pacote as string,
                };
            }
            // console.log("Session after Session Callback:", session); // Verificar a sessão final
            return session;
        },
    },
});

export { handler as GET, handler as POST };