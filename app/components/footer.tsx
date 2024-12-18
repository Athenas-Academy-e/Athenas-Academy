import { Database } from "@/database";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const date: Date = new Date();
    return (
        <footer className="bg-home shadow w-full">
            {/*Mobile */}
            <div className="spp-sm:block sp-sm:block md:block lg:hidden">
                <div className="p-4 flex  flex-wrap md:items-center md:justify-between spp-sm:flex-col spp-sm:items-center border-t-2 rounded-md sp-sm:flex-col">
                    <div>
                        {Database.settings.map((settings) => (
                            <span className="text-sm text-white sm:text-center ">© {date.getFullYear()} <Link href={'/'} className="hover:underline">
                                {settings.companyname}
                            </Link>. Todos os direitos reservados.
                            </span>
                        ))}
                    </div>
                    <div>
                        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
                            {Database.pages.map((page) => (
                                <li key={page.name}>
                                    <Link href={page.href} className="hover:underline me-4 md:me-6">
                                        {page.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/*Desktop */}
            <div className="spp-sm:hidden sp-sm:hidden md:hidden lg:block border-t-2 rounded-md">
                <div className="md:flex md:justify-between mt-4">
                    <div className="mb-6 md:mb-0">
                        {Database.settings.map((settings) => (
                            <Link href={'/'}>
                                <Image src={settings.logoSmallLight} width={300} height={100} alt={settings.alt} />
                            </Link>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 mt-4">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Paginas</h2>
                            <ul className="text-white dark:text-white font-medium">
                                {Database.pages.map((callout) => (
                                    <li className="mb-4 hover:underline">
                                        <Link href={callout.href}>
                                            {callout.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Categorias</h2>
                            <ul className="text-white  font-medium">
                                {Database.cardsHome.map((callout) => (
                                    <li className="mb-4 hover:underline">
                                        <Link href={callout.link}>
                                            {callout.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="ml-5 sm:flex sm:items-center sm:justify-between">
                    {Database.settings.map((settings) => (
                        <span className="text-sm text-white sm:text-center ">© {date.getFullYear()} <Link href={'/'} className="hover:underline">
                            {settings.companyname}
                        </Link>. Todos os direitos reservados.
                        </span>

                    ))}
                </div>
            </div>
        </footer>
    )
}