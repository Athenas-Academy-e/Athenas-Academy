'use client'
import { database } from '@/database';
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Carousel } from "@material-tailwind/react";

export default function Top() {
    const el = useRef(null);
    const al = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['PARA O SUCESSO', 'PARA O MERCADO', 'PARA O FUTURO!'],
            typeSpeed: 100,
            backSpeed: 150,
            smartBackspace: true,
            backDelay: 1000,
            loop: true,
            loopCount: Infinity,
        });
        const typedi = new Typed(al.current, {
            strings: ['PARA O SUCESSO', 'PARA O MERCADO', 'PARA O FUTURO!'],
            typeSpeed: 100,
            backSpeed: 150,
            smartBackspace: true,
            backDelay: 1000,
            loop: true,
            loopCount: Infinity,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
            typedi.destroy();
        };
    }, []);
    return (
        <div className='bg-background'>
            {/*Desktop View */}
            <div className='relative w-full h-screen flex-row items-center spp-sm:hidden sp-sm:hidden sm:hidden md:hidden lg:flex'>
                <div>
                    <Carousel className="rounded-xl">
                        <img
                            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                            alt="image 1"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                            alt="image 2"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                            alt="image 3"
                            className="h-full w-full object-cover"
                        />
                    </Carousel>
                </div>

                {/*Texts */}
                <div className='absolute inset-0 z-30 start-8 flex flex-col justify-center mx-8 font-bold text-white spp-sm:text-[0.6rem]  sp-sm:text-sm sm:text-sm md:text-2xl lg:text-3xl'>
                    <h1>BEM-VINDO(A) AO</h1>
                    <h1>CURSO PROFISSIONALIZANTE</h1>
                    <h1>ATHENAS ACADEMY</h1>
                    <h1>PREPARE-SE <span ref={el}></span></h1>
                    <div className='my-5 bg-hover rounded-md w-max p-2 text-center shadow-sm transition-all duration-100 hover:bg-icon hover:scale-105 cursor-pointer spp-sm:my-1'>
                        {database.settings.map((settings) => (
                            <Link href={settings.urlcadastro} key={settings.Companytitle}>
                                <span>Quero garantir a minha vaga</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            {/*Mobile View */}
            <div className='relative bg-background w-full flex-col items-center spp-sm:flex sp-sm:flex sm:flex md:flex lg:hidden'>
                {/*Text*/}
                <div className='flex flex-col items-center font-bold text-white spp-sm:my-8 sp-sm:mt-8 sm:my-8 md:my-8 spp-sm:text-[1rem] sp-sm:text-sm sm:text-sm md:text-2xl lg:text-3xl'>
                    <h1>BEM-VINDO(A) AO</h1>
                    <h1>CURSO PROFISSIONALIZANTE</h1>
                    <h1>PREPARE-SE <span ref={al}></span></h1>
                </div>

            </div>
            {/*Button Cadastro*/}
            <div className='my-5 bg-hover rounded-md w-max p-2 text-center shadow-sm transition-all duration-100 hover:bg-icon hover:scale-105 cursor-pointer '>
                {database.settings.map((settings) => (
                    <Link href={settings.urlcadastro} key={settings.Companytitle}>
                        <span>Quero garantir a minha vaga</span>
                    </Link>
                ))}
            </div>
        </div>

    )
}