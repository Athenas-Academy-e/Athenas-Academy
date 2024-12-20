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
import { Database } from '@/database'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Nav() {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const header = document.querySelector('#header');
        const handleScroll = () => {
            if (window.scrollY >= 1) {
                header?.classList.add('fixed')
                header?.classList.add('bg-transparent')
                header?.classList.remove('relative')
                header?.classList.remove('bg-[#090b7c]')
            } else {
                header?.classList.remove('fixed')
                header?.classList.remove('bg-transparent')
                header?.classList.add('relative')
                header?.classList.add('bg-[#090b7c]')
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        // <div className="bg-white z-50 dark:bg-[#0F172A] fixed w-full ">
        <div className="bg-[#090b7c] z-50 w-full transition duration-0 relative " id='header'>
            {/* Mobile menu */}
            <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-transparent bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
                />

                <div className="fixed inset-0 z-40 flex">
                    <DialogPanel
                        transition
                        className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white dark:bg-background pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
                    >
                        <div className="flex px-4 pb-2 pt-5">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-button hover:text-hover dark:text-white "
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Fechar Menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Mobile Links */}
                        <TabGroup className="mt-2">
                            <TabPanels as={Fragment}>
                                {Database.categories.map((category) => (
                                    <TabPanel key={category.name} className="space-y-10 px-4 pb-8 pt-8  dark:text-white">
                                        {category.sections.map((section) => (
                                            <div key={section.name}>
                                                <div className='flex border-b'>
                                                    <div>
                                                        <FontAwesomeIcon icon={section.icons} className='w-[30px] h-[30px] text-button dark:text-white' />
                                                    </div>
                                                    <div className='self-center'>
                                                        <p id={`${category.id}-${section.id}-heading-mobile`} className="font-bold text-button  dark:text-button mx-3">
                                                            {section.name}
                                                        </p>
                                                    </div>
                                                </div>
                                                <ul
                                                    role="list"
                                                    aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                                    className="mt-6 flex flex-col space-y-6"
                                                >
                                                    {section.items.map((item) => (
                                                        <li key={item.name} className="flow-root -m-2 p-2 text-button hover:bg-hover dark:text-gray-100 hover:cursor-pointer">
                                                            <Link href={item.href}>
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </TabPanel>
                                ))}
                            </TabPanels>
                        </TabGroup>
                        <div className="relative space-y-6 border-t border-gray-200 px-4 py-6 ">
                            {Database.pages.map((page) => (
                                <div key={page.name} className="flow-root -m-2 p-2 text-button hover:bg-hover dark:text-gray-100 hover:cursor-pointer">
                                    <ul
                                        role="list"
                                        aria-labelledby={`${page.name}-heading-mobile`}
                                        className=" flex flex-col space-y-6"
                                    >
                                        <li key={page.name} className="">
                                            <Link href={page.href}>
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
            {/* <header className="relative mt-5 bg-white dark:bg-black backdrop-blur-md"> */}
            <header className="relative  backdrop-blur-3xl rounded-b-md drop-shadow-md">
                {/* <header className="relative bg-white dark:bg-transparent backdrop-blur-3xl rounded-b-md drop-shadow-md"> */}
                <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* <div className="border rounded-md px-1 border-gray-200"> */}
                    <div className="">
                        <div className="flex h-16 items-center">
                            <button
                                type="button"
                                onClick={() => setOpen(true)}
                                className="relative lg:hidden bg-transparent text-button hover:text-hover dark:text-button"
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Abrir menu</span>
                                <Bars3Icon aria-hidden="true" className="h-6 w-6 " />
                            </button>

                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0 md:justify-center items-center">
                                <Link href='/'>
                                    <span className="sr-only">Athenas Academy</span>
                                    {Database.settings.map((settings) => (
                                        <div key={settings.id}>
                                            <Image
                                                src={settings.logoLight}
                                                width={200}
                                                height={30}
                                                alt={settings.alt}
                                                className='spp-sm:hidden sp-sm:hidden sm:block md:block lg:block '
                                            />
                                            <Image
                                                src={settings.logoSmallLight}
                                                width={100}
                                                height={100}
                                                alt={settings.alt}
                                                className='spp-sm:block sp-sm:block sm:hidden md:hidden lg:hidden '
                                            />
                                        </div>
                                    ))}
                                </Link>
                            </div>

                            {/* Flyout menus */}
                            <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="flex h-full space-x-8">
                                    {Database.categories.map((category) => (
                                        <Popover key={category.name} className="flex">
                                            <div className="relative flex">
                                                <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-bold text-white transition-colors duration-200 ease-out hover:text-hover  data-[open]:border-hover data-[open]:text-hover dark:text-white">
                                                    {category.name}
                                                </PopoverButton>
                                            </div>

                                            <PopoverPanel
                                                transition
                                                className="absolute inset-x-0 top-full text-sm text-white transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in dark:text-gray-100 font-medium "
                                            >
                                                <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow" />

                                                <div className="relative bg-home">
                                                    <div className="mx-auto max-w-7xl px-8">
                                                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 py-16">
                                                            <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                                                {category.sections.map((section) => (
                                                                    <div key={section.name}>
                                                                        <div className='flex flex-row items-center border-b border-white'>
                                                                            <div>
                                                                                <FontAwesomeIcon icon={section.icons} className='w-[30px] h-[30px] text-white' />
                                                                            </div>
                                                                            <div className='mx-4'>
                                                                                <p id={`${section.name}-heading`} className="font-bold text-white  dark:text-white">
                                                                                    {section.name}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <ul
                                                                            role="list"
                                                                            aria-labelledby={`${section.name}-heading`}
                                                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                        >
                                                                            {section.items.map((item) => (
                                                                                <li key={item.name} className="flex text-gray-100 hover:text-hover">
                                                                                    <Link href={item.href}>
                                                                                        {item.name}
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
                                    ))}

                                    {Database.pages.map((page) => (
                                        <Link
                                            href={page.href}
                                            key={page.name}
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
                                    {Database.settings.map((settings) => (
                                        <Link href={settings.urllogin} className='text-sm font-medium text-white hover:text-hover group -m-2 flex items-center p-2 dark:text-white text-center' key={settings.id}>
                                            <UserIcon className='h-6 w-6' />
                                            <span className='font-bold mx-2'>SOU ALUNO</span>
                                        </Link>
                                    ))}
                                </div>
                                {/* Register */}
                                <div className="ml-4 flow-root lg:ml-6">
                                    {Database.settings.map((settings) => (
                                        <Link href={settings.urlcadastro} className='text-sm font-medium text-button transition duration-100 hover:text-white group -m-2 flex items-center p-2 dark:text-button bg-hover rounded-md shadow-md hover:scale-105 text-center' key={settings.id}>
                                            {/* <UserIcon className='h-6 w-6' /> */}
                                            <span className='font-bold mx-2'>SEJA ALUNO</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

