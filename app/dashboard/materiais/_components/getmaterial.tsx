'use server'
import { getMaterial } from "@/queries";
import { cookies } from "next/headers";

export default async function GetMateriais(idm:string){
  const cookieStore = await cookies()
  const escola = cookieStore.get('escola')
  const material = await getMaterial(String(escola?.value), String(idm))
  const materias = Object.values(material)
  const quantidade = materias.length
  return {materias, quantidade}
}