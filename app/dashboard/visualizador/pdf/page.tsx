"use client";

import { useRouter, useSearchParams } from "next/navigation";
import PDFViewer from "./_components/PDFViewer";
import Getpdf from "./_components/getPdf";
import { Suspense, useEffect, useState } from "react";

interface ArquivoData {
  arquivo: any;
  data: any;
  descricao: string;
  tipo: string;
  titulo: string;
}

export default function PDFViewerPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PDFViewerContent />
    </Suspense>
  )
}
function PDFViewerContent() {
  const searchParams = useSearchParams();
  const searchA = searchParams.get("arquivo");
  const searchM = searchParams.get("modulo");
  const router = useRouter();
  const [pdf, setPdf] = useState<ArquivoData | any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const handleFetchPdf = async () => {
      if (!searchA || !searchM) {
        console.warn("Missing 'arquivo' or 'modulo' parameter.");
        setError("Missing required parameters.");
        router.push("/dashboard/materiais/");
        return;
      }

      try {
        const arquivoData: any = await Getpdf(searchA, searchM);
        if (!arquivoData) {
          throw new Error("No data returned from Getpdf.");
        }
        setPdf(arquivoData);
      } catch (err) {
        console.error("Failed to fetch PDF:", err);
        setError("Failed to load PDF. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    handleFetchPdf();
  }, [searchA, searchM, router]);

  if (isLoading) {
    return <div className="hidden">Loading PDF...</div>;
  }

  if (error) {
    console.error(error)
    return <div className="text-black dark:text-white">Error Ao Abrir o PDF</div>
  }

  if (!pdf) {
    console.error('No PDF available to display.');
  }
  const urlArquivo = pdf.arquivo.split(' ')[1]
  const url = `/proxy/material/${urlArquivo || pdf.arquivo}`;
  return (
    <div>
      <PDFViewer fileUrl={url} />
    </div>
  )
}
