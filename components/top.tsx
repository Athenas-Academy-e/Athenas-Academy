'use client'
import { database } from '@/database';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import Typed from 'typed.js';

export default function Top() {
    const el = React.useRef(null);
    const al = React.useRef(null);

    React.useEffect(() => {
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
        <div className='bg-[#090b7c]'>
            {/*Desktop View */}
            <div className='relative bg-[url("../public/fundo.png")] bg-no-repeat bg-cover w-full h-screen flex-row items-center spp-sm:hidden sp-sm:hidden sm:hidden md:hidden lg:flex'>
                <div id="controls-carousel" className="relative w-full" data-carousel="slide">
                    {/* <!-- Carousel wrapper --> */}
                    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                        {database.cardsHome.map((carousel) => (
                            <div className="hidden duration-700 ease-in-out " data-carousel-item="active" key={carousel.title}>
                                <div>
                                    {/* <Image src={carousel.image} width={532} height={250} alt={carousel.title} className="absolute block lg:-translate-x-2 lg:scale-75 xl:-translate-x-28 2xl:-translate-x-2/4 2xl:scale-150 -translate-y-1/2 top-1/2 -right-0" /> */}
                                    <Image src={carousel.image} width={532} height={250} alt={carousel.title} className="absolute block lg:-translate-x-2 lg:scale-75 xl:-translate-x-28 2xl:-translate-x-2/4 2xl:scale-150 -translate-y-1/2 top-1/2 -right-0" />
                                </div>
                                {/* <div className='absolute top-3/4 end-5'>
                                    {carousel.title}
                                </div> */}
                            </div>
                        ))}
                    </div>
                    {/* <!-- Slider controls --> */}
                    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>

                {/*Texts */}
                <div className='absolute inset-0 z-30 start-8 flex flex-col justify-center mx-8 font-bold text-white spp-sm:text-[0.6rem]  sp-sm:text-sm sm:text-sm md:text-2xl lg:text-3xl'>
                    <h1>BEM-VINDO(A) AO</h1>
                    <h1>CURSO PROFISSIONALIZANTE</h1>
                    <h1>ATHENAS ACADEMY</h1>
                    <h1>PREPARE-SE <span ref={el}></span></h1>
                    <div className='my-5 bg-hover rounded-md w-max p-2 text-center shadow-sm transition-all duration-100 hover:bg-icon hover:scale-105 cursor-pointer spp-sm:my-1'>
                        {database.settings.map((settings) => (
                            <Link href={settings.urllogin} key={settings.Companytitle}>
                                <span>Quero garantir a minha vaga</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            {/*Mobile View */}
            <div className='relative bg-[url("../public/fundo.png")] bg-no-repeat bg-cover w-full flex-col items-center spp-sm:flex sp-sm:flex sm:flex md:flex lg:hidden'>
                {/*Text*/}
                <div className='flex flex-col items-center font-bold text-white spp-sm:my-8 sp-sm:mt-8 sm:my-8 md:my-8 spp-sm:text-[1rem] sp-sm:text-sm sm:text-sm md:text-2xl lg:text-3xl'>
                    <h1>BEM-VINDO(A) AO</h1>
                    <h1>CURSO PROFISSIONALIZANTE</h1>
                    <h1>PREPARE-SE <span ref={al}></span></h1>
                </div>
                {/*carousel*/}
                <div id="controls-carousel" className="relative w-full" data-carousel="slide">
                    {/* <!-- Carousel wrapper --> */}
                    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                        {database.cardsHome.map((carousel) => (
                            <div className="hidden duration-700 ease-in-out" data-carousel-item="active" key={carousel.title}>
                                <div>
                                    <Image src={carousel.image} width={532} height={100} alt={carousel.title} className=" absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 -left-1/2" />
                                </div>
                                {/* <div className='absolute top-3/4 end-5'>
                                    {carousel.title}
                                </div> */}
                            </div>
                        ))}
                    </div>
                    {/* <!-- Slider controls --> */}
                    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
                {/*Button*/}
                <div className='my-5 bg-hover rounded-md w-max p-2 text-center shadow-sm transition-all duration-100 hover:bg-icon hover:scale-105 cursor-pointer '>
                    {database.settings.map((settings) => (
                        <Link href={settings.urlcadastro} key={settings.Companytitle}>
                            <span>Quero garantir a minha vaga</span>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    )
}