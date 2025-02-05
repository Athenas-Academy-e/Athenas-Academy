import { auth } from "@/auth"
import { getPacoteByAluno } from "@/queries"
import { Button, Card, CardFooter } from "@nextui-org/react"
import Image from "next/image"

export default async function ProfilePage(data: any) {
  const dados = data[0]
  const session = await auth()
  const idade = new Date().getFullYear() - new Date(dados.data_nascimento).getFullYear()
  const dataCurso = await getPacoteByAluno(dados.id_aluno, dados.codigo_escola)
  const dataP = Object.values(dataCurso)
  return (
    <>
      <div className="flex gap-1 flex-col">
        <div className="flex gap-1 flex-row">
          <div className="flex">
            <Card
              isFooterBlurred
              radius="lg"
              className="border-none"
            >
              <Image
                alt="profile-image"
                className="object-cover"
                height={255}
                src={session?.user?.image ? session.user.image : '/default-photo.svg'}
                width={255}
              />
              {/*TODO: Funcionalidade para alterar a foto de perfil */}
              {/* <CardFooter className="justify-center before: overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 hover:bg-black/10 transition-all cursor-pointer">
                <Button className="text-tiny text-white w-full bg-transparent" variant="flat" color="default" radius="lg" size="sm">
                  Alterar Foto
                </Button>
              </CardFooter> */}
            </Card>
          </div>
          <div className="w-full bg-white rounded-lg flex text-black flex-col justify-center">
            <h1 className="font-bold ml-2">Meus Dados</h1>
            <h2 className="ml-2">Nº Da Matricula: <span className="font-semibold">{dados.matricula}</span></h2>
            <h2 className="ml-2">Nome: <span className="font-semibold">{dados.nome}</span></h2>
            <h2 className="ml-2">Data de nascimento: <span className="font-semibold">{new Date(dados.data_nascimento).toLocaleDateString()}</span></h2>
            <h2 className="ml-2">Registro Geral: <span className="font-semibold">{dados.rg}</span></h2>
            <h2 className="ml-2">CPF: <span className="font-semibold">{dados.cpf}</span></h2>
            <h2 className="ml-2" style={{ display: idade <= 18 ? 'block' : 'none' }}>Responsável Legal: <span className="font-semibold">{dados.responsavel}</span></h2>
            <h2 className="ml-2" style={{ display: idade <= 18 ? 'block' : 'none' }}>Responsável Registro Geral: <span className="font-semibold">{dados.responsavel_rg}</span></h2>
            <h2 className="ml-2" style={{ display: idade <= 18 ? 'block' : 'none' }}>Responsável CPF: <span className="font-semibold">{dados.responsavel_cpf}</span></h2>
          </div>
        </div>
        <div className="w-full bg-white flex rounded-lg">
          <table className="table text-center">
            <thead className="font-bold text-black text-medium">
              <th>Curso</th>
              <th>Situação</th>
            </thead>
            <tbody className="text-black font-semibold">
              {dataP.map((pacotes:any)=>(
                <tr key={pacotes.id_pacote}>
                  <td>{pacotes.nome}</td>
                  <td>{pacotes.situacao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}