import { faGraduationCap, faHouse, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { light } from '@mui/material/styles/createPalette';
export const database = {
    settings: [{
        logo: '/logo-dark.png',
        logolight: '/logo-light.png',
        alt: 'Athenas Academy Logo',
        url: 'https://athenasacademy.com.br/',
        color: '#007FE0',
        Companytitle: 'Athenas Academy',
        subtitle: 'Academia de Educação e profissionalização',
    }],
    pages: [
        { id:0, name: 'Pagina Principal', url: '/dashboard', icon: faHouse },
        { id:1, name: 'Financeiro', url: '/dashboard/finance', icon: faMoneyBill },
        { id:2, name: 'Frequência', url: '/dashboard/frequency', icon: faGraduationCap },
        { id:3, name: 'Notas', url: '/dashboard/notas', icon: faHouse },
        { id:4, name: 'Pagina Principal', url: '/dashboard', icon: faHouse },
    ]
}