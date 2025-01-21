import {  faBookOpen, faFileLines, faGraduationCap, faHouse, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
export const database = {
    settings: [{
        logolight: '/logo-dark.png',
        logo: '/logo-light.png',
        alt: 'Athenas Academy Logo',
        url: 'https://athenasacademy.com.br/',
        color: '#007FE0',
        Companytitle: 'Athenas Academy',
        subtitle: 'Academia de Educação e profissionalização',
    }],
    pages: [
        { id:0, name: 'Pagina Principal', url: '/dashboard', icon: faHouse },
        { id:1, name: 'Financeiro', url: '/dashboard/finance', icon: faMoneyBill },
        // { id:2, name: 'Frequência', url: '/dashboard/frequency', icon: faGraduationCap },
        { id:3, name: 'Notas', url: '/dashboard/notas', icon: faFileLines },
        { id:4, name: 'Materiais', url: '/dashboard/materiais', icon: faBookOpen },
    ]
}