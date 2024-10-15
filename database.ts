import { faHouse, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
export const database = {
    settings: [{
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
        { id:2, name: 'Pagina Principal', url: '/dashboard', icon: faHouse },
        { id:3, name: 'Pagina Principal', url: '/dashboard', icon: faHouse },
        { id:4, name: 'Pagina Principal', url: '/dashboard', icon: faHouse },
    ]
}