'use client'
import { Fragment, useEffect, useState } from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon, UserIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { database } from '@/database'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Category from '@/components/[_componets]/getcategoria'
import { faBookOpen, faBriefcase, faComputer, faFileLines, faFlagUsa, faHeartPulse, faHelmetSafety, faHouse, faMicrochip, faMoneyBill, faPalette, faSprayCanSparkles, faUserNurse } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

// Define a estrutura dos dados dos cursos
interface Course {
    id_categoria: number;
    id_pacote: number;
    nome: string;
    categoria: string;
    icone: string;
    descricao: string;
}

// Definindo a estrutura do objeto de categoria
interface CategorizedCourses {
    id_categoria: number;
    nome: string;
    icone: string;
    descricao: string;
    cursos: Course[];
}
export default function Nav() {
    const [open, setOpen] = useState(false)
    const [groupedCourses, setGroupedCourses] = useState<CategorizedCourses[]>([]);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const fetchCategories = async () => {
            const grouped = await Category(); // Assumindo que a função Category retorna as categorias
            setGroupedCourses(grouped);
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        const header = document.getElementById('header')
        const handleScroll = () => {
            if (window.scrollY >= 50) {
                setIsScrolled(true);
                // header?.classList.add('fixed')
                // header?.classList.remove('relative')
                // header?.classList.remove('bg-transparent')
                // header?.classList.add('bg-gradient-to-tr')
            } else {
                setIsScrolled(false);
                // header?.classList.remove('fixed')
                // header?.classList.add('relative')
                // header?.classList.remove('')
                // header?.classList.add('bg-transparent')
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const iconMapping: { [key: string]: IconDefinition } = {
        'faBookOpen': faBookOpen,
        'faBriefcase': faBriefcase,
        'faComputer': faComputer,
        'faFileLines': faFileLines,
        'faFlagUsa': faFlagUsa,
        'faHeartPulse': faHeartPulse,
        'faHouse': faHouse,
        'faMicrochip': faMicrochip,
        'faMoneyBill': faMoneyBill,
        'faPalette': faPalette,
        'faSprayCanSparkles': faSprayCanSparkles,
        'faUserNurse': faUserNurse,
        'faHelmetSafety': faHelmetSafety
    };
    return (
        <header className={`w-full transition-all duration-1000 ease-in-out z-50
            ${isScrolled || open ? "fixed top-0 left-0 bg-gradient-to-tr from-[#1a2253] to-[#1a225f] shadow-lg opacity-100 -translate-y-0"
                : "relative bg-transparent opacity-100 translate-y-0"}`}>
            {/* Mobile menu */}
            <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
                {/* <DialogBackdrop
                    transition
                    className={`relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white dark:bg-background pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full mt-16`}
                /> */}

                <div className="fixed inset-0 z-40 flex">
                    <DialogPanel
                        transition
                        className="fixed top-16 left-0 w-full max-w-xs h-[calc(100vh-64px)] transform flex flex-col overflow-y-auto bg-gray-100 dark:bg-background pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
                    >
                        {/* <div className="flex px-4 pb-2 pt-5">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-button hover:text-hover dark:text-white opacity-0"
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Fechar Menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div> */}

                        {/* Mobile Links */}
                        <TabGroup>
                            <TabPanels as={Fragment}>
                                <TabPanel className="space-y-10 px-4 pb-8 pt-8 text-black dark:text-white">
                                    {groupedCourses.map((categoria) => (
                                        <div key={categoria.id_categoria}>
                                            <div className='flex border-b'>
                                                <div>
                                                    <FontAwesomeIcon icon={iconMapping[categoria.icone]} className='w-[30px] h-[30px] ' />
                                                </div>
                                                <div className='self-center'>
                                                    <p id={`${categoria.nome}-heading-mobile`} className="font-bold mx-3 capitalize">
                                                        {categoria.nome.toLowerCase()}
                                                    </p>
                                                </div>
                                            </div>
                                            <ul
                                                role="list"
                                                aria-labelledby={`${categoria.nome}-heading-mobile`}
                                                className="mt-6 flex flex-col space-y-6"
                                            >
                                                {categoria.cursos.map((item) => (
                                                    <li key={item.id_pacote} className="flow-root -m-2 p-2 transition-all duration-200 ease-in-out hover:bg-hover hover:cursor-pointer capitalize">
                                                        <Link href={String('cursos/' + item.id_pacote)}>
                                                            {item.nome.toLowerCase()}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </TabPanel>
                            </TabPanels>
                        </TabGroup>
                        <div className="relative space-y-6 border-t border-gray-200 px-4 py-6 text-black dark:text-white">
                            {database.pagesSite.map((page) => (
                                <div key={page.id} className="flow-root -m-2 p-2 hover:bg-hover hover:cursor-pointer transition-all duration-200 ease-in-out capitalize">
                                    <ul
                                        role="list"
                                        aria-labelledby={`${page.name}-heading-mobile`}
                                        className=" flex flex-col space-y-6"
                                    >
                                        <li key={page.id} className="">
                                            <Link href={page.url}>
                                                {page.name}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>

            {/*Desktop */}
            <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div>
                    <div className="flex h-16 items-center text-white transition-all duration-300 ease-in-out">
                        <button
                            type="button"
                            onClick={() => setOpen(true)}
                            className={`relative lg:hidden ${open ? 'hidden': 'block'} hover:text-hover cursor-pointer`}
                        >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Abrir menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        </button>
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className={`relative -m-2 inline-flex items-center justify-center rounded-md p-2 lg:hidden ${open ? 'block': 'hidden'} hover:text-hover cursor-pointer`}
                        >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Fechar Menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>

                        {/* Logo */}
                        <div className="ml-4 flex lg:ml-0 md:justify-center items-center">
                            <Link href='/'>
                                {database.settings.map((settings) => (
                                    <div key={settings.id}>
                                        <span className="sr-only">{settings.Companytitle}</span>
                                        <Image
                                            src={settings.logo}
                                            width={200}
                                            height={30}
                                            alt={settings.alt}
                                            className='smartphone:hidden tablet:block laptop:block desktop:block'
                                        />
                                        <Image
                                            src={settings.logoSmallLight}
                                            width={100}
                                            height={100}
                                            alt={settings.alt}
                                            className='smartphone:block tablet:hidden laptop:hidden desktop:hidden'
                                        />
                                    </div>
                                ))}
                            </Link>
                        </div>

                        {/* Flyout menus */}
                        <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                            <div className="flex h-full space-x-8">
                                <Popover className="flex">
                                    <div className="relative flex">
                                        <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-bold text-white transition-colors duration-200 ease-out hover:text-hover  data-[open]:border-hover data-[open]:text-hover dark:text-white">
                                            Cursos
                                        </PopoverButton>
                                    </div>

                                    <PopoverPanel
                                        transition
                                        className="absolute inset-x-0 top-full text-sm text-white transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in dark:text-gray-100 font-medium "
                                    >
                                        <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow" />
                                        <div className="relative bg-background h-full">
                                            <div className="mx-auto max-w-7xl px-8">
                                                <div className="grid grid-cols-1 gap-x-8 gap-y-10 py-16">
                                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                                        {groupedCourses.map((categoria) => (
                                                            <div key={categoria.id_categoria}>
                                                                <div className='flex flex-row items-center border-b border-white'>
                                                                    <div>
                                                                        <FontAwesomeIcon icon={iconMapping[categoria.icone]} className='w-[30px] h-[30px] text-white' />
                                                                    </div>
                                                                    <div className='mx-4'>
                                                                        <p id={`${categoria.nome}-heading`} className="font-bold text-white  dark:text-white capitalize">
                                                                            {categoria.nome.toLowerCase()}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <ul
                                                                    role="list"
                                                                    aria-labelledby={`${categoria.nome}-heading`}
                                                                    className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                >
                                                                    {categoria.cursos.map((item) => (
                                                                        <li key={item.id_pacote} className="flex text-gray-100 hover:text-hover capitalize">
                                                                            <Link href={String('cursos/' + item.id_pacote)}>
                                                                                {item.nome.toLowerCase()}
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </PopoverPanel>
                                </Popover>

                                {database.pagesSite.map((page) => (
                                    <Link
                                        href={page.url}
                                        key={page.id}
                                        style={{ display: page.ativo }}
                                        className='flex items-center text-sm font-bold text-white hover:text-hover dark:text-white active:border-b border-hover'
                                    >
                                        {page.name}
                                    </Link>
                                ))}
                            </div>
                        </PopoverGroup>

                        <div className="ml-auto flex items-center sp-sm::scale-50">
                            {/* Login */}
                            <div className="ml-4 flow-root lg:ml-6">
                                {database.settings.map((settings) => (
                                    <Link href={settings.urllogin} className='text-sm font-medium text-white hover:text-hover group -m-2 flex items-center p-2 dark:text-white text-center' key={settings.id}>
                                        <UserIcon className='h-6 w-6' />
                                        <span className='font-bold mx-2'>SOU ALUNO</span>
                                    </Link>
                                ))}
                            </div>
                            {/* Register */}
                            <div className="ml-4 flow-root lg:ml-6">
                                {database.settings.map((settings) => (
                                    <Link href={settings.urlcadastro} className='text-sm font-medium text-button transition duration-100 hover:text-white group -m-2 flex items-center p-2 dark:text-button bg-hover rounded-md shadow-md hover:scale-105 text-center' key={settings.id}>
                                        <span className='font-bold mx-2'>SEJA ALUNO</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

