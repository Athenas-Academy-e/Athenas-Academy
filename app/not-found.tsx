import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <main className="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-white">404</p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Pagina Não Encontrada
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-white sm:text-xl/8">
            Desculpe, não conseguimos encontrar a página que você está procurando.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href={'/'} className="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold shadow-sm transition-transform transform text-button hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:text-white">
              Voltar Para A Pagina Inicial
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}