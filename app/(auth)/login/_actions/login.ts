'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function login(formData: FormData) {
  const entries = Array.from(formData.entries());
  const { username, password } = Object.fromEntries(entries) as {
    username: string;
    password: string;
  };
  async function sendData(){
    const result = await signIn('credentials', {
      username,
      password,
      redirect: false,
    })
    return result
  }
  try {
    const resulta = await sendData()
    console.log(resulta)
    if(resulta){
      redirect('/dashboard')
    }
  } catch (e) {
    if (e instanceof AuthError) {
      if (e.type === 'CredentialsSignin') {
        redirect(`/?${new URLSearchParams({msg: e.type})}`)
      }
    }
  }
  
}