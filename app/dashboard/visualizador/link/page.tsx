'use client'
import { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Getlink from './_components/getLink';
import { Button } from '@nextui-org/react';

interface ArquivoData {
  arquivo:string,
}

export default function LinkViewerPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LinkViewerContent />
    </Suspense>
  );
}

function LinkViewerContent() {
  const searchParams = useSearchParams();
  const searchA = searchParams.get('arquivo');
  const searchM = searchParams.get('modulo');
  const router = useRouter();
  const [link, setLink] = useState<ArquivoData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [escola, setEscola] = useState<string>('');
  const [countdown, setCountdown] = useState(10);
  const [redirect, setRedirect] = useState('');

  useEffect(() => {
    const handleFetchPdf = async () => {
      if (!searchA || !searchM) {
        console.warn("Missing 'arquivo' or 'modulo' parameter.");
        setError("Missing required parameters.");
        router.push('/dashboard/materiais/');
        return;
      }

      const getCookie = (name: string) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        return parts.length === 2 ? parts.pop()?.split(';').shift() : undefined;
      };

      setEscola(getCookie('escola') || '');

      try {
        const arquivoData:any = await Getlink(searchA, searchM);
        if (!arquivoData) {
          throw new Error('No data returned from GetLink.');
        }
        setLink(arquivoData);
      } catch (err) {
        console.error('Failed to fetch Video:', err);
        setError('Failed to load Link. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    handleFetchPdf();
  }, [searchA, searchM, router]);

  useEffect(() => {
    if (!isLoading && link) {
      const linkSplit = link.arquivo.split(' ')[1] || link.arquivo;

      if (linkSplit.includes(escola)) {
        setRedirect(`/material/${linkSplit}`);
      } else {
        setRedirect(linkSplit);
      }
    }
  }, [isLoading, link, escola]);

  useEffect(() => {
    if (countdown > 0) {
      const interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      router.push(redirect);
    }
  }, [countdown, router, redirect]);

  const handleRedirect = () => {
    if (redirect) {
      router.push(redirect);
    }
  };
  const handleReturn = () => {
    router.push('/dashboard/materiais');
  };

  if (isLoading) {
    return <div>Loading Link...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!link) {
    return <div>No Link available to display.</div>;
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg flex flex-col items-center justify-center">
        <h3>Por favor, aguarde</h3>
        <h1 className="text-6xl font-semibold text-primary mb-4">{countdown}</h1>
        <h1>Seu processo está sendo finalizado...</h1>
        {countdown === 0 && (
          <div className="flex flex-col gap-1">
            <Button color="primary" className="mt-4" onPress={handleRedirect}>
              Redirecionar
            </Button>
            <Button color="primary" className="mt-4" onPress={handleReturn}>
              Voltar aos materiais
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
