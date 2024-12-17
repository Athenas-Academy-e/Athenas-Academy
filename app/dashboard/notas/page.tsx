import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Header from "@/components/Header";
import CardsNota from "./_components/cards";
import GetModulos from "./_components/getmodulos";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Área do Aluno - Notas",
  robots: "noindex, nofollow",
};
export default async function Notas() {
  const session = await auth()
  if (!session) {
    redirect('/login')
  }
  const modulo = await GetModulos()

  return (
    <Header sessionData={session.user}>
      <CardsNota modulos={modulo}/>
    </Header>
  )
}