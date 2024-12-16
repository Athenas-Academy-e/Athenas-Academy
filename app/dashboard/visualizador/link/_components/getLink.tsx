'use server'
import { getMaterialById } from "@/queries";
import { cookies } from "next/headers";

export default async function Getlink(arquivo:string, modulo:string) {
  const cookie = await cookies()
  const escola = cookie.get('escola')
  const material = await getMaterialById(String(escola?.value), String(modulo), String(arquivo))
  const materias = Object.values(material)
  return materias[0]
}