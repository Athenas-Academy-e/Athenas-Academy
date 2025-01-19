'use client'
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import ModalNotas from "./Modal";

export default function CardsNota(modulos: any) {
  
  return (<div className="flex gap-2 flex-wrap">
    {modulos.modulos.map((modulo: any) => (
      <Card key={modulo.id_modulo} className="py-2 w-96 bg-white dark:bg-base-100 text-black dark:text-white">
        <CardBody className="flex justify-center items-center text-center">
          <div>{modulo.descricao}</div>
        </CardBody>
        <CardFooter className="flex justify-center">
          <ModalNotas modulo={modulo.id_modulo}></ModalNotas>
        </CardFooter>
      </Card>
    ))}
  </div>
  )
}