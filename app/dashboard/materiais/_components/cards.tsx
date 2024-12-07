'use client'
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import GetMateriais from "./getmaterial";
import { useEffect, useState } from "react";
import ModalMaterial from "./Modal";

export default function CardsMaterial(modulos: any) {
  const [materiaisData, setMateriaisData] = useState<{ [key: string]: { quantidade: number } }>({});
  const fetchMateriais = async (idm: string) => {
    const result = await GetMateriais(idm);
    setMateriaisData(prevData => ({
      ...prevData,
      [idm]: { quantidade: result.quantidade }
    }))
  };

  useEffect(() => {
    modulos.modulos.forEach((modulo: any) => {
      if (!materiaisData[modulo.id_modulo]) {
        fetchMateriais(modulo.id_modulo);
      }
    });
  }, [modulos]);

  return (<div className="flex gap-2 flex-wrap">
    {modulos.modulos.map((modulo: any) => (
      <Card key={modulo.id_modulo} className="py-2 w-96">
        <CardBody className="flex justify-center items-center text-center">
          <div>{modulo.descricao}</div>
          <div>{materiaisData[modulo.id_modulo]?.quantidade || 0} Itens</div>
        </CardBody>
        <CardFooter className="flex justify-center">
          <ModalMaterial modulo={modulo.id_modulo}></ModalMaterial>
        </CardFooter>
      </Card>
    ))}
  </div>
  )
}