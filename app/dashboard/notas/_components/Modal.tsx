'use client'
import { Button, Spinner } from "@nextui-org/react";
import getNota from "./getNotas";
import { useState } from "react";
export default function ModalNotas(modulo: any) {
  const [provas, setProvas] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)

  async function handleClick(idm: string){
    const prova = await getNota(idm)
    setProvas(prova.provas)
    setLoading(false)
  }
  console.log(provas)
  
  return (
    <Button onClick={()=>handleClick(modulo.modulo)} className=" my-1 w-24">{loading ? <Spinner size="sm" /> : "Ver Notas"}</Button>
  )
}