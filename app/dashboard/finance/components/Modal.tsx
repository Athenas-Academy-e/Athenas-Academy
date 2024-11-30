'use client'
import { faTriangleExclamation, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useState } from 'react';

interface ModalAProps {
  data: any;
  numero_lancamento: string;
  idac: string;
}
export default function ModalA({ data, numero_lancamento, idac }: ModalAProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  function resultData() {
    if (data.numero_lancamento === numero_lancamento && data.id_aluno_curso === idac && isOpen === true) {
    }
    return { data }
  }
  const result = resultData();
  const [isError, setError] = useState()
  // console.log(result?.data)
  async function HandlerClickBoleto(format: string, value: any) {
    if (value.data) {
      const nl = value.data.numero_lancamento
      const resultBoleto = await fetch('/api/pay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ numero_lancamento: nl, format }),
      })
      if (resultBoleto.ok) {
        const responseBody = await resultBoleto.json();
        if (responseBody.status === "200") {
          window.open(responseBody.linkBoleto, '_blank');
        } else {
          setError(responseBody.msg)
        }
      } else {
        console.error('Error:', resultBoleto.statusText);
      }
    }
  }


  return (
    <>
      <Button onPress={onOpen} className="btn bg-transparent outline-none text-black hover:text-white hover:bg-black border-none">Pagar</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-white bg-cyan-400 font-bold">Parcela N°{result?.data.numero_lancamento}</ModalHeader>
              <ModalBody>
                <div className={`font-bold text-black flex flex-col items-center ${isError ? 'block' : 'hidden'}`}>
                  <FontAwesomeIcon icon={faCircleExclamation} className='p-4' />
                  {isError}</div>
                <div className={`${isError ? 'hidden' : 'block'}`}>
                  <h2 className="py-1 text-black text-md"><span className="font-semibold">Histórico:</span> {result?.data.historico}</h2>
                  <h2 className="py-1 text-black text-md"><span className="font-semibold">Data de vencimento:</span> {new Date(result?.data.vencimento).toLocaleDateString()}</h2>
                  <h2 className="py-1 text-black text-md"><span className="font-semibold">Situação:</span> {result?.data.quitado === "S" ? "Quitada" : "Em Aberto"}</h2>
                  <h2 className={`py-1 text-black text-md ${result?.data.valor_pago ? 'text-red-500 line-through' : ''}`}><span className="font-semibold">Valor Sem Desconto:</span>R$ {result?.data.valor_sem_desconto}</h2>
                  <h2 className={`py-1 text-black text-md ${result?.data.valor_pago ? 'text-red-500 line-through' : ''}`}><span className="font-semibold">Valor Com Desconto:</span>R$ {result?.data.valor}</h2>
                  <h2 className={`py-1 text-black text-md ${result?.data.valor_pago ? 'block' : 'hidden'}`}><span className="font-semibold">Data do Pagamento:</span>{new Date(result?.data.data_pagamento).toLocaleDateString()}</h2>
                  <h2 className={`py-1 text-black text-md ${result?.data.valor_pago ? 'block' : 'hidden'}`}><span className="font-semibold">Valor Pago:</span>R$ {result?.data.valor_pago}</h2>
                  <h3 className="text-black flex flex-wrap"><span className='font-bold'><FontAwesomeIcon icon={faTriangleExclamation} className='mx-1' />Confira seus dados e valores ao imprimir</span>
                    <span>Se tiver alguma dúvida, fale com a gente.</span></h3>
                </div>
              </ModalBody>
              <ModalFooter className='border-t-1'>
                <Button color="danger" variant="light" onPress={onClose}>
                  Fechar
                </Button>
                <Button color="primary" onClick={() => HandlerClickBoleto('pix', result)} disabled={result.data.quitado === "S" ? true : false} className='disabled:opacity-35'>
                  Imprimir Pix
                </Button>
                <Button color="primary" onClick={() => HandlerClickBoleto('carne', result)} disabled={result.data.quitado === "S" ? true : false} className='disabled:opacity-35'>
                  Imprimir Carne
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}