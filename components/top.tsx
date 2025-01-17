'use client'
import { database } from '@/database';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Carousel } from "@material-tailwind/react";
import Image from 'next/image';

export default function Top() {
    const el = useRef(null);
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

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);
    return (
        <div className='bg-background'>
            {/*Desktop View */}
            <div className='relative w-full h-screen flex-row items-center spp-sm:hidden sp-sm:hidden sm:hidden md:hidden lg:flex'>
                {database.cardsHome.map((card) => (
                    <div key={card.id}>
                        <Carousel className="rounded-xl">
                            <Image src={card.image} alt='a' width={500} height={500} />
                        </Carousel>
                    </div>
                ))}

                {/*Texts */}
                <div className='absolute inset-0 z-30 start-8 flex flex-col justify-center mx-8 font-bold text-white spp-sm:text-[0.6rem]  sp-sm:text-sm sm:text-sm md:text-2xl lg:text-3xl'>
                    <h1>BEM-VINDO(A) AO</h1>
                    <h1>CURSO PROFISSIONALIZANTE</h1>
                    <h1>ATHENAS ACADEMY</h1>
                    <h1>PREPARE-SE <span ref={el}></span></h1>
                    <div className='my-5 bg-hover rounded-md w-max p-2 text-center shadow-sm transition-all duration-100 hover:bg-icon hover:scale-105 cursor-pointer spp-sm:my-1 spp-sm:hidden sp-sm:hidden sm:hidden md:hidden lg:block'>
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
                <div className='flex flex-col items-center font-bold text-white spp-sm:my-8 sp-sm:mt-8 sm:mt-8 md:mt-8 spp-sm:text-[1rem] sp-sm:text-sm sm:text-sm md:text-2xl lg:text-3xl'>
                    <h1>BEM-VINDO(A) AO</h1>
                    <h1>CURSO PROFISSIONALIZANTE</h1>
                    <h1>PREPARE-SE <span ref={el}></span></h1>
                </div>

            </div>
            {/*Button Cadastro*/}
            <div className='mx-auto bg-hover rounded-md w-max p-2 text-center shadow-sm transition-all duration-100 hover:bg-icon hover:scale-105 cursor-pointer spp-sm:block sp-sm:block sm:block md:block lg:hidden'>
                {database.settings.map((settings) => (
                    <Link href={settings.urlcadastro} key={settings.id}>
                        <span>Quero garantir a minha vaga</span>
                    </Link>
                ))}
            </div>
        </div>

    )
}