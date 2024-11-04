'use server';

import { auth, signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function login(formData: FormData) {
  const entries = Array.from(formData.entries());
  const { username, password, codigo_escola } = Object.fromEntries(entries) as {
    username: string;
    password: string;
    codigo_escola: string;
  };
  const cookieStore = await cookies()
  cookieStore.set('escola', codigo_escola, {maxAge: 86400})

  const session = await auth()
  if (session) {
    redirect('/dashboard')
  }
  async function sendData() {
    const result = await signIn('credentials', {
      username,
      password,
      redirect: true,
      redirectTo: '/dashboard'
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