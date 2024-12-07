'use client'
import { Document } from 'react-pdf'
export default function pdf(path:string){
  const url = 'https://alunos.athenasacademy.com.br/material/'
  return <Document file={url + path} />
}