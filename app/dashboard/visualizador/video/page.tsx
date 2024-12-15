"use client";

import { useRouter, useSearchParams } from "next/navigation";
import VideoViewer from "./_components/VideoViewer";
import { useEffect, useState } from "react";
import Getvideo from "./_components/getVideo";


interface ArquivoData {
  arquivo: string;
}

export default function VideoViewerPage() {
  const searchParams = useSearchParams();
  const searchA = searchParams.get("arquivo");
  const searchM = searchParams.get("modulo");
  const router = useRouter();
  const [video, setVideo] = useState<ArquivoData | null>(null);
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
        const arquivoData = await Getvideo(searchA, searchM);
        if (!arquivoData) {
          throw new Error("No data returned from GetVideo.");
        }
        setVideo(arquivoData);
      } catch (err) {
        console.error("Failed to fetch Video:", err);
        setError("Failed to load Video. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    handleFetchPdf();
  }, [searchA, searchM, router]);

  if (isLoading) {
    return <div>Loading Video...</div>;
  }

  if (error) {
    console.error(error)
    return <div>Error Ao Abrir o Video</div>
  }

  if (!video) {
    return <div>No Video available to display.</div>;
  }
  const videoUrl = video.arquivo.split('/')[2]
  
  return (
    <div>
      <VideoViewer fileUrl={videoUrl==='www.youtube.com'? video.arquivo : `/proxy/material/${video.arquivo}`} />
    </div>
  )
}
