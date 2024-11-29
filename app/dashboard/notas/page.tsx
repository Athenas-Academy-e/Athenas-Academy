import { auth } from "@/auth";
import { redirect } from "next/navigation";
import GetNotas from "./_components/getmodulos";
import Header from "@/components/Header";
import { Button, Card, CardBody } from "@nextui-org/react";
import CardsNota from "./_components/cards";
import GetModulos from "./_components/getmodulos";

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