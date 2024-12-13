import { ScrollMode, SpecialZoomLevel, Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin, SidebarTab, type ToolbarSlot } from '@react-pdf-viewer/default-layout';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/thumbnail/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface PDFViewerProps {
  fileUrl: string; // URL do arquivo PDF
}

const PDFViewer: React.FC<PDFViewerProps> = ({ fileUrl }) => {
  const router = useRouter()
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: () => [],
    renderToolbar: (Toolbar) => (
      <Toolbar>
        {(props: ToolbarSlot) => {
          const {
            CurrentPageInput,
            EnterFullScreen,
            NumberOfPages,
            Print,
            Zoom,
            ZoomIn,
            ZoomOut,
          } = props;
          return (
            <>
              <div className='mx-1'>
                <button type="button" className='text-black capitalize smartphone:hidden' onClick={()=>{router.push('/dashboard/materiais')}}>Voltar para os matérias</button>
                <button type="button" className='text-black capitalize ml-2 smartphone:block tablet:hidden desktop:hidden' onClick={()=>{router.push('/dashboard/materiais')}}><FontAwesomeIcon icon={faArrowLeft} /></button>
              </div>
              <div className='flex text-black items-center smartphone:hidden'>
                <CurrentPageInput /> / <NumberOfPages />
              </div>
              <div className='flex items-center mx-auto'>
                <ZoomOut />
                <Zoom />
                <ZoomIn />
              </div>
              <div className='flex items-center'>
                <EnterFullScreen />
              </div>
              <div className='flex items-center'>
                <Print />
              </div>
            </>
          );
        }}
      </Toolbar>
    ),
    toolbarPlugin: {
      fullScreenPlugin: {
        onEnterFullScreen: (zoom) => {
          zoom(SpecialZoomLevel.PageFit);
          defaultLayoutPluginInstance.toolbarPluginInstance.scrollModePluginInstance.switchScrollMode(
            ScrollMode.Wrapped
          );
        },
        onExitFullScreen: (zoom) => {
          zoom(SpecialZoomLevel.PageWidth);
          defaultLayoutPluginInstance.toolbarPluginInstance.scrollModePluginInstance.switchScrollMode(
            ScrollMode.Vertical
          );
        },
      },
    },
  });
  return (
    <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
      <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
    </Worker>
  );
};

export default PDFViewer;
