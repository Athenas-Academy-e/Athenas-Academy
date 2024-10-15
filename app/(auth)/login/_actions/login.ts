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

  try {
    await signIn('credentials', {
      username,
      password,
    });
  } catch (e) {
    if (e instanceof AuthError) {
      if (e.type === 'CredentialsSignin') {
        throw new Error('Credentials erradas')
      }
    }
  }

  redirect('/dashboard');
}