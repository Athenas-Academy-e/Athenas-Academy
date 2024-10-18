import { auth } from "@/auth"
import Header from "@/components/Header"
import { getBoletos } from "@/Helpers";
import { getAlunoByCurso, getParcelas } from "@/queries";
import { redirect } from "next/navigation"

export default async function Pagar({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const session = await auth()
  if (!session) {
    redirect('/')
    return null
  }

  const nl = searchParams.nl as string;
  const format = searchParams.format as string;
  const idac = searchParams.idac as string;
  // const boleto= await getBoletos(nl, format)

  // console.log(boleto)

  const codigo_escola = String(process.env.CODIGO_ESCOLA)
  const dataCurso = await getAlunoByCurso(String(session.user?.id), codigo_escola)
  const data = Object.values(dataCurso)

  const dataFinancePromises = data.map(async (value) => {
    const dataFinance = await getParcelas(idac, codigo_escola, value.id_aluno)
    return { ...value, dataFinance }
  })

  const dataFinanceResults = await Promise.all(dataFinancePromises)
  dataFinanceResults.map((value)=>{
    console.log(value)
  })
  return (
    <Header sessionData={session.user}>
      <div>{session.user?.name}</div>
    </Header>
  )
}