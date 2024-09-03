'use client'
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

export default function LoginForm() {
    const searchParams = useSearchParams();
    const error = searchParams.get('error');

    async function Login(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {
            username: formData.get('username'),
            password: formData.get('password'),
        }
        signIn("credentials", {
            ...data,
            callbackUrl: '/dashboard',
        })
    }
    return (
        <form onSubmit={Login} className="space-y-6">
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                    Usuário
                </label>
                <div className="mt-2">
                    <input
                        id="username"
                        name="username"
                        type="text"
                        required
                        autoComplete="username"
                        className="block w-full rounded-md border-0 py-1.5 text-white text-center shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#142851] sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                        Senha
                    </label>
                    <div className="text-sm">
                        <a href="#" className="font-semibold text-white hover:text-[#eba93b]">
                            Esqueceu a sua senha?
                        </a>
                    </div>
                </div>
                <div className="mt-2">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        className="block w-full rounded-md border-0 py-1.5 text-white text-center shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#eba93b] sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-[#142851] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#eba93b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#eba93b]"
                >
                    Entrar
                </button>
                {error && <p className="text-white font-bold text-center text-md bg-red-700 rounded-b-md transition-all duration-150">Usuário ou senha inválidos</p>}
            </div>
        </form>
    )
}