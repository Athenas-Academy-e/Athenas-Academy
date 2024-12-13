// components/PDFViewer.tsx
import React, { useEffect, useRef, useState } from 'react';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';

// Configurar o caminho do PDF.js Worker
GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.9.155/pdf.worker.min.mjs';

interface PDFViewerProps {
  fileUrl: string; // URL do arquivo PDF
}

const PDFViewerCopy: React.FC<PDFViewerProps> = ({ fileUrl }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const renderPDF = async () => {
      if (!canvasRef.current) return;

      try {
        // Carregar o documento PDF
        const pdf = await getDocument(fileUrl).promise;

        // Carregar a primeira página
        const page = await pdf.getPage(1);

        // Configurar escala e dimensões do canvas
        var outputScale = window.devicePixelRatio || 1;
        var width = window.outerWidth
        var height = window.outerHeight
        // const viewport = page.getViewport({ scale: 1.45, dontFlip: false });
        const viewport = page.getViewport({ scale: 1, dontFlip: false });
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        if (!context) {
          throw new Error('Não foi possível obter o contexto 2D do canvas.');
        }

        canvas.width = Math.floor(width * outputScale);
        canvas.height = Math.floor((height * outputScale));
        // canvas.width = viewport.width;
        // canvas.height = viewport.height;
        console.log(canvas.width, canvas.height)
        // Renderizar a página no canvas
        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };
        await page.render(renderContext).promise;

        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar o PDF.');
        setLoading(false);
        console.error(err);
      }
    };

    renderPDF();
  }, [fileUrl]);

  return (
    <div className='w-full'>
      {loading && <p>Carregando PDF...</p>}
      {/* {error && <p className='text-black'>{error}</p>} */}
      {/* <canvas ref={canvasRef} style={{ width: '100%' }}></canvas> */}
      <canvas ref={canvasRef} className='w-full h-full'></canvas>
    </div>
  );
};

export default PDFViewerCopy;
