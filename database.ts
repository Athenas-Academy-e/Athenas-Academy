import { faBookOpen, faBriefcase, faComputer, faFileLines, faFlagUsa, faHeartPulse, faHouse, faMicrochip, faMoneyBill, faPalette, faSprayCanSparkles, faUserNurse } from '@fortawesome/free-solid-svg-icons';
export const database = {
    settings: [{
        id:0,
        logolight: '/logo-dark.png',
        logo: '/logo-light.png',
        alt: 'Athenas Academy Logo',
        url: 'https://athenasacademy.com.br/',
        color: '#007FE0',
        Companytitle: 'Athenas Academy',
        subtitle: 'Academia de Educação e profissionalização',
        urlaluno: 'https://alunos.athenasacademy.com.br/',
        urllogin: '/login',
        urlcadastro: '/cadastro',
        logoSmallLight: '/logo-small-light.png',
    }],
    /*Lista Area Do Aluno */
    pages: [
        { id: 0, name: 'Pagina Principal', url: '/dashboard', icon: faHouse },
        { id: 1, name: 'Financeiro', url: '/dashboard/finance', icon: faMoneyBill },
        // { id: 2, name: 'Frequência', url: '/dashboard/frequency', icon: faGraduationCap },
        { id: 3, name: 'Notas', url: '/dashboard/notas', icon: faFileLines },
        { id: 4, name: 'Materiais', url: '/dashboard/materiais', icon: faBookOpen },

    ],
    /*Lista De Paginas Do Site */
    pagesSite: [
        { id: 0, name: 'Inicio', url: '/', ativo: "none" },
        { id: 1, name: 'Sobre a Athenas', url: '/sobre', ativo: "flex" },
        { id: 2, name: 'Contato', url: '/contato', ativo: "none" },
    ],
    
    /*Cards Inicio*/
    cardsHome: [
        {   
            id:0,
            title: 'Área Da Estética',
            subtitle: 'Propomos um ensino inovador, com metodologias ativas, onde o professor é capacitado na área e cria o próprio conteúdo, reinventando o sistema de ensino de uma forma prática.',
            icons: faSprayCanSparkles,
            image: '/cardcurso/necropsia.jpg',
            link: 'estetica',
            iconsColor: '#dc06e6'
        },
        {   
            id:1,
            title: 'Flexíveis',
            subtitle: 'Escolha entre os modos: Presencial, Semipresencial ou Online. Independente de qual for sua escolha, receba o suporte de nossa equipe de professores e técnicos quando quiser.',
            icons: faComputer,
            image: '/cardcurso/aux-administrativo.jpg',
            link: 'flexiveis',
            iconsColor: '#122753'
        },
        {   
            id:2,
            title: 'Áreas Da Saúde',
            subtitle: 'Chega de estudar aquilo que você nunca irá colocar em prática, todos os cursos são adequados às novas técnicas, exigências e tecnologias empregadas pelas empresas.',
            icons: faHeartPulse,
            image: '/cardcurso/cuidador-de-idosos.png',
            link: 'saude',
            iconsColor: '#18E101'
        },
        {   
            id:3,
            title: 'Idiomas',
            subtitle: 'Escolha qual módulo fazer, aqui você quem manda. Adapte seu pacote escolhendo apenas os conhecimentos específicos, conforme seu interesse e(ou) necessidade.',
            icons: faFlagUsa,
            image: '/cardcurso/idiomas.jpg',
            link: 'idiomas',
            iconsColor: '#dc2626'
        },
        {   
            id:4,
            title: 'Tecnologia',
            subtitle: 'Escolha qual módulo fazer, aqui você quem manda. Adapte seu pacote escolhendo apenas os conhecimentos específicos, conforme seu interesse e(ou) necessidade.',
            icons: faMicrochip,
            image: '/cardcurso/cuidador-de-idosos.png',
            link: 'tecnologia',
            iconsColor: '#007FE0'
        },
    ]
}