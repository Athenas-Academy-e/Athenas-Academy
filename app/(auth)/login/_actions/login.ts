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
  
  // Armazenando o código da escola no cookie
  const cookieStore = await cookies()
  cookieStore.set('escola', codigo_escola);

  // Função para realizar a consulta de login
  const sendData = async () => {
    try {
      const result = await signIn('credentials', {
        username,
        password,
        redirect: false,  // Mudado para false para evitar redirecionamento automático
      });

      // Verificando se a autenticação foi bem-sucedida
      if (result?.error) {
        // Se houver erro na autenticação, redireciona com mensagem de erro
        redirect(`/login?${new URLSearchParams({ msg: result.error })}`);
      }
      // Caso a autenticação tenha sido bem-sucedida, redireciona para o dashboard
      return { status: 200, message: 'Login bem-sucedido' };
    } catch (e) {
      // Captura e lida com erros de autenticação específicos
      if (e instanceof AuthError) {
        if (e.type === 'CredentialsSignin') {
          redirect(`/login?${new URLSearchParams({ msg: e.type })}`);
        }
      }

      // Caso outro erro ocorra
      return { status: 419, message: 'Erro inesperado durante o login.' };
    }
  }

  // Executa a consulta e retorna o status
  const status = await sendData();
  if(status.status == 200){
    redirect('/dashboard')
  }
  return status; // Retorna o status da consulta
}
