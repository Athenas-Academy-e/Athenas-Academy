'use client'

import { Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react"
import GetMateriais from "./getmaterial"
import { useState } from "react"
import Visualizador from "../../visualizador/page";

export default function ModalMaterial(modulo: any) {
  const [materias, setMaterias] = useState<any>([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  async function handleClick(idm: string) {
    const result = await GetMateriais(idm)
    setMaterias(result.materias)
    onOpen()
  }

  function tituloLow(tit: string) {
    const titulo = tit.toLowerCase()
    return titulo
  }

  function tipoArquivo(tipo: string) {
    switch (tipo) {
      case 'F':
        return 'Arquivo';
      case 'V':
        return 'Vídeo';
      case 'L':
        return 'Link';
      default:
        return 'Desconhecido';
    }
  }

  return (
    <>
      <Button onPress={() => handleClick(modulo.modulo)}>Ver Matérias</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside">
        <ModalContent className="max-w-[calc(100vw-100px)] bg-white dark:bg-base-100">
          <>
            <ModalHeader className="flex flex-col text-black text-center dark:text-white">
              Registro De Materiais
            </ModalHeader>
            <ModalBody>
              <table className="table w-full">
                <thead className="text-center text-black dark:text-white bg-white dark:bg-base-100 table-header-group">
                  <tr className="table-row">
                    <th>Nome do Arquivo</th>
                    <th>Data da publicação</th>
                    <th>Tipo</th>
                    <th>Ação</th>
                  </tr>
                </thead>
                <tbody className="text-black text-center  dark:text-white">
                  {materias.map((value: any) => (
                    <tr key={value.id_material} className="table-row">
                      <td className="table-cell capitalize">{tituloLow(String(value.titulo))}</td>
                      <td className="table-cell">{new Date(value.data).toLocaleDateString()}</td>
                      <td className="table-cell capitalize">{tipoArquivo(value.tipo)}</td>
                      <td className="table-cell"><Visualizador arquivo={value} modulo={modulo.modulo} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
