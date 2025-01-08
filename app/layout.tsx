import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Athenas Academy",
  robots: "index, follow",
  description: "Bem-vindo à Área do Aluno, onde você pode acessar conteúdo exclusivo e gerenciar seu aprendizado.",
  keywords: ["Área do Aluno", "Educação", "Aprendizado","Athenas Academy"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
