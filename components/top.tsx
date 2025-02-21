'use client'
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { database } from '@/database';
import Image from 'next/image';
import Nav from './nav';

export default function Top() {
    const el = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['PARA O SUCESSO', 'PARA O MERCADO', 'PARA O FUTURO!'],
            typeSpeed: 100,
            backSpeed: 150,
            backDelay: 1000,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className='min-h-56'>
            <Nav />
            <div className="h-screen flex flex-col justify-center md:flex-row items-center lg:justify-between md:justify-between p-6 md:p-8 space-y-6 md:space-y-0 md:space-x-6">
                {/* Text Section */}
                <div className="text-white font-bold text-center md:text-left space-y-4 max-w-lg">
                    <h1 className="text-2xl md:text-3xl">BEM-VINDO(A) AO</h1>
                    <h1 className="text-2xl md:text-3xl">CURSO PROFISSIONALIZANTE</h1>
                    <h1 className="text-2xl md:text-3xl">ATHENAS ACADEMY</h1>
                    <h1 className="text-2xl md:text-3xl">PREPARE-SE <span ref={el}></span></h1>
                    <div className="mt-6">
                        <Link href="/cadastro">
                            <button className="bg-yellow-500 text-white font-bold px-6 py-2 rounded-md shadow-md transition-transform transform hover:scale-105">
                                Quero garantir a minha vaga
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Carousel Section */}
                <div className="w-full md:w-1/3 h-[250px] md:h-[300px]">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                        className="h-full"
                    >
                        {database.cardsHome.map((src) => (
                            <SwiperSlide key={src.id}>
                                <Image src={src.image} alt={src.title} className='w-full h-full object-cover rounded-md' width={1280} height={720} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
