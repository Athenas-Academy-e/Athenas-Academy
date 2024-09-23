import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user?: {
      id: string;
      name?: string;
      email?: string;
      id_pacote: string;
      matricula: string;
      data_nascimento: string;
      situacao: string;
      curso: string;
      total_parcelas: number;
      duracao: string;
      image?: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    name: string;
    email: string;
    id_pacote: string;
    matricula: string;
    data_nascimento: string;
    situacao: string;
    curso: string;
    total_parcelas: number;
    duracao: string;
    image?: string;
  }
}