'use client'
import { Input, Select, SelectItem } from '@nextui-org/react';
import login from './_actions/login';
import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useSearchParams } from 'next/navigation';
import { Alert } from '@mui/material';

export default function LoginForm(empresa: any) {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    const searchParams = useSearchParams();
    const mensagem = searchParams.get('msg');
    const formRef = useRef<HTMLFormElement>(null);

   
    const dadosempresa = Object(empresa)
    return (
        <>
            <style jsx global>{`
            input[type="number"]::-webkit-outer-spin-button,
            input[type="number"]::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }
          
            input[type="number"] {
              -moz-appearance: textfield;
              appearance: none;
            }
          `}</style>
            <form action={login} className="space-y-6">
                <div>
                    <div className="mt-2">
                        <Select label='Selecione a sua escola' name='codigo_escola' id='codigo_escola' required>
                            {dadosempresa.empresa.map((item: any) => (
                                <SelectItem className='text-black' key={item.codigo} value={item.codigo} textValue={`${item.cidade} - ${item.bairro}`}>{item.cidade} - {item.bairro}</SelectItem>
                            ))}
                        </Select>
                    </div>
                </div>
                <div>
                    <div className="mt-2">
                        <Input type='number' name='username' id='username' required autoComplete='username' label='Usuário' className='appearance-none -webkit-appearance-none -moz-appearance-none' />
                    </div>
                </div>

                <div>
                    <div className="mt-2 ">
                        <Input type={isVisible ? "number" : "password"} name='password' id='password' required autoComplete='password' label='Senha' endContent={
                            <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                                {isVisible ? (<FontAwesomeIcon icon={faEyeSlash} className="text-2xl text-default-400 pointer-events-none" />) : (<FontAwesomeIcon icon={faEye} className="text-2xl text-default-400 pointer-events-none" />)}
                            </button>
                        } />
                    </div>
                    <div className="flex items-center justify-end mt-2">
                        <div className="text-sm">
                            <a href="#" className="font-semibold text-black hover:text-[#eba93b]">
                                Esqueceu a sua senha?
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-[#142851] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#eba93b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#eba93b]"
                    >
                        Entrar
                    </button>
                    {mensagem === 'CredentialsSignin' ? (
                        <Alert severity='error'>
                            Seu usuário ou senha estão incorretos.
                        </Alert>
                    ) : false}
                </div>
            </form>
        </>
    )
}
