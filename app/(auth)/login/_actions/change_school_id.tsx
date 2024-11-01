import { getEmpresa } from "@/queries";

export default async function ChangeSchool(){
  const empresa = await getEmpresa()
  return empresa
}