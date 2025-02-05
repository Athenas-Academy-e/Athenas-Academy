'use client'

import { signOut } from "next-auth/react"

export default function LogoutButton(){
    const deleteCookie = (cookieName:string) => {
        document.cookie = `${cookieName}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
      };
    async function handleSignOut (){
        signOut()
        deleteCookie('escola')
        deleteCookie('iacurso')
        deleteCookie('ia')
    }
    return(<button type="button" onClick={handleSignOut}>Sair</button>)
}