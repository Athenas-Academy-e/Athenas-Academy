'use client'
import { Button } from "@nextui-org/react";
import pdf from "./file/page";

export default function Visualizador(params:any) {
  function handleClick(par:any){
    window.location.href='visualizador/file'
    pdf(String(par.arquivo))
  }
  return(<>
  <Button onPress={()=>handleClick(params.params)}>Visualizar</Button>
  </>)
}