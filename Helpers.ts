import { cookies } from "next/headers";
import { getDadosPj } from "./queries";

async function getBoletos(lanc: string, format: string) {
  const cookieStore = await cookies()
  const escola = cookieStore.get('escola')
  const dadosPj: any = await getDadosPj(String(escola?.value))
  const apiUrlPjBank = String(process.env.API_PJBANK) + `recebimentos/${dadosPj[0].credencial}/transacoes/lotes`

  const response = await fetch(apiUrlPjBank, {
    method: 'POST',
    headers: {
      "X-CHAVE": String(dadosPj[0].chave),
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      'pedido_numero': [lanc],
      'formato': format
    })
  })
  const data = await response.json()
  const link = data.linkBoleto + "&exibir_fantasia=1&nunca_atualizar_boleto=1"
  return data

}

export { getBoletos };