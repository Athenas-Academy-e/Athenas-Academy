'use client'
import { database } from "@/database";
import LogoutButton from "./LogoutButton";
import Image from "next/image";
import Settings from "./settings";
import Profile from "./Profile";
import Link from "next/link";

export default function NavBar(sessionData: any) {

  return (
    <>
      <div className="navbar bg-slate-950">
        <div className="flex-1">
          {database.settings.map(data => (
            <div key={data.Companytitle} className="flex gap-4 items-center">
              <div>
                <Link href={'/dashboard'}><Image src={data.logo} alt={data.alt} width={200} height={10} /></Link>
              </div>
              <div className="flex flex-col justify-end text-sm">
                <span className="text-white">Olá <span className="uppercase">{sessionData.sessionData.name}</span>,</span>
                <span className="text-white capitalize">Seja bem vindo ão seu ambiente de estudo virtual.</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-none gap-4">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image src={sessionData.sessionData.image} alt={'Teste'} width={200} height={200} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-slate-950 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Profile /></li>
              <li><Settings /></li>
              <li><LogoutButton /></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}