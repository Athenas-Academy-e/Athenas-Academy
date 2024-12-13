'use client'
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

// export default function Visualizador(arquivo:any, modulo: any) {
export default function Visualizador(data: any) {
  const router = useRouter()
  function handleClick(filePath: string, modulo: string, type: string) {
    const tipoSplit = data.arquivo.arquivo
    switch (type || tipoSplit.split(' ')[0]) {
      case 'F': {
        router.push(`visualizador/pdf?arquivo=${filePath}&modulo=${modulo}`)
        break;
      }
      case 'V': {
        console.log('video')
        break;
      }
      case 'L':{
        console.log('link')
        break;
      }
      default:{
        console.log()
        console.error('Falha ao obter o tipo')
      }
    }

  }
  return (<>
    <Button onPress={() => handleClick(data.arquivo.id_material, data.modulo, data.arquivo.tipo)}>Visualizar</Button>
  </>)
}