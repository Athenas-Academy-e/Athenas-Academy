import { database } from "@/database";
import { getEmpresa } from "@/queries";
import Image from "next/image";
import FormRegister from "./_actions/form";

export default async function Cadastro() {
  const empresa = await getEmpresa();
  return (
    <div className="">
      <div className="flex flex-col items-center mt-4 justify-center">
        {database.settings.map((settings) => (
          <div className="mx-auto h-10 w-50" key={settings.Companytitle}>
            <Image
              src={settings.logolight}
              width={300}
              height={286}
              alt={settings.alt}
              className="mx-auto dark:hidden"
            />
            <Image
              src={settings.logo}
              width={300}
              height={286}
              alt={settings.alt}
              className="mx-auto dark:block hidden"
            />
            <div className="flex mt-2 flex-wrap justify-center items-center flex-col">
              <span className="font-medium text-3xl">
                Cadastro de Interessados
              </span>
              <span className="font-medium text-lg">
                Agradecemos seu interesse em nossos cursos. Por favor informe os
                dados abaixo
              </span>
            </div>
            <div className="mt-4">
              <FormRegister empresa={empresa} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
