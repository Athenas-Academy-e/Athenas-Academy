'use server';

import { auth, signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function login(formData: FormData) {
  const entries = Array.from(formData.entries());
  console.log(entries)
  const { username, password } = Object.fromEntries(entries) as {
    username: string;
    password: string;
  };
  const session = await auth()
  if (session) {
    redirect('/dashboard')
  }
  async function sendData() {
    const result = await signIn('credentials', {
      username,
      password,
      redirect: true,
      redirectTo:'/dashboard'
    })
    return result
  }
  try {
    const resulta = await sendData()
  } catch (e) {
    if (e instanceof AuthError) {
      if (e.type === 'CredentialsSignin') {
        redirect(`/?${new URLSearchParams({ msg: e.type })}`)
      }
    }
  }

}