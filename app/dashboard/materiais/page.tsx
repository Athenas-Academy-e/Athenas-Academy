import { auth } from "@/auth";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import GetModulos from "../notas/_components/getmodulos";
import CardsMaterial from "./_components/cards";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Área do Aluno - Materiais",
  robots: "noindex, nofollow",
};
export default async function Material() {
  const session = await auth()
  if (!session) {
    redirect('/login')
  }
  const modulo = await GetModulos()
  return (
    <Header sessionData={session.user}>
      <CardsMaterial modulos={modulo}/>
    </Header>
  )
}