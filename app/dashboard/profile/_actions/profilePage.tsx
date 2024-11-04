import { auth } from "@/auth"
import { Button, Card, CardFooter } from "@nextui-org/react"
import Image from "next/image"

export default async function ProfilePage(data: any) {
  const dados = data[0]
  const session = await auth()
  console.log(dados)
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="flex w-full">
          <Card
            isFooterBlurred
            radius="lg"
            className="border-none"
          >
            <Image
              alt="Woman listing to music"
              className="object-cover"
              height={200}
              src={session?.user?.image ? session.user.image : '/default-photo.webp'}
              width={200}
            />
            <CardFooter className="justify-center before: overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 hover:bg-black/10 transition-all cursor-pointer">
              <Button className="text-tiny text-white w-full bg-transparent" variant="flat" color="default" radius="lg" size="sm">
                Alterar Foto
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="w-full bg-white rounded-lg flex">
          
        </div>
        <div className="w-16 bg-white rounded-lg flex">

        </div>
      </div>
    </>
  )
}