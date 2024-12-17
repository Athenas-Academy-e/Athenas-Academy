'use client'
import { Button } from "@nextui-org/react";
import Head from "next/head";
import { useRouter } from "next/navigation";

export default function Visualizador(data: any) {
  const router = useRouter()
  function handleClick(filePath: string, modulo: string, type: string) {
    const tipoSplit = data.arquivo.arquivo;
    const tipo = type || tipoSplit.split(' ')[0];
    const fileExtension = tipoSplit.split('.').pop()?.toLowerCase();
    switch (tipo) {
      case 'F': {
        if (fileExtension === 'pdf') {
          router.push(`visualizador/pdf?arquivo=${filePath}&modulo=${modulo}`)
        } else if (fileExtension === 'pptx') {
          console.log('não e um pdf')
        } else (
          router.push(`visualizador/link?arquivo=${filePath}&modulo=${modulo}`)
        )
        break;
      }
      case 'V': {
        router.push(`visualizador/video?arquivo=${filePath}&modulo=${modulo}`)
        break;
      }
      case 'L': {
        router.push(`visualizador/link?arquivo=${filePath}&modulo=${modulo}`)
        break;
      }
      default: {
        console.error('Falha ao obter o tipo')
      }
    }
  }
  return (<>
  <Head>
    <title>Área Do Aluno - Visualizador</title>
  </Head>
    <Button onPress={() => handleClick(data.arquivo.id_material, data.modulo, data.arquivo.tipo)}>Visualizar</Button>
  </>)
}