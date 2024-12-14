'use client'
import { useState } from 'react'
import ReactPlayer from 'react-player'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'

interface VideoViewerProps {
  fileUrl: string,
}

const VideoViewer: React.FC<VideoViewerProps> = ({ fileUrl }) => {
  const [load, setload] = useState(true)
  const [open, setOpen] = useState(false)
  const [play, setPlay] = useState(false)
  const [progress, setProgress] = useState<number>()
  const router = useRouter()
  const configPlayer = {
    youtube: {
      playerVars: { showinfo: 1 }
    },
    file: {
      attributes: {
        controlslist: 'nodownload',
      }
    }
  }

  function handleClickRestart() {
    setOpen(false)
    setProgress(0)
    setPlay(true)
  }
  function handleClickReturn() {
    router.push('/dashboard/materiais')
    setOpen(false)
  }

  return (
    <>
      <div>
        <div className='max-w-full h-screen'>
          <ReactPlayer
            url={fileUrl}
            config={configPlayer}
            controls={true}
            onEnded={() => setOpen(true)}
            playing={play}
            progressInterval={progress}
            onReady={() => setload(false)}
            width="100%"
            height="100%" />
        </div>
        {/*Inicio Modal */}
        <Dialog open={open} onClose={setOpen} className="relative z-10">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
          />

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <DialogPanel
                transition
                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
              >
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                      <FontAwesomeIcon icon={faCircleExclamation} aria-hidden="true" className="size-6 text-yellow-600" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                        Reassistir o conteúdo
                      </DialogTitle>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Você deseja reassistir o conteúdo desde o início?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    onClick={() => handleClickRestart()}
                    className="inline-flex w-full justify-center rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 sm:ml-3 sm:w-auto">
                    Sim, reassistir
                  </button>
                  <button
                    type="button"
                    data-autofocus
                    onClick={() => handleClickReturn()}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                    Não, voltar
                  </button>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
}

export default VideoViewer;
