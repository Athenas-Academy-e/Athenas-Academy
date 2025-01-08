import { faBookOpen, faBriefcase, faComputer, faFileLines, faFlagUsa, faGraduationCap, faHeartPulse, faHouse, faMicrochip, faMoneyBill, faPalette, faSprayCanSparkles, faUserNurse } from '@fortawesome/free-solid-svg-icons';
export const database = {
    settings: [{
        logo: '/logo-dark.png',
        logolight: '/logo-light.png',
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
        { id: 2, name: 'Frequência', url: '/dashboard/frequency', icon: faGraduationCap },
        { id: 3, name: 'Notas', url: '/dashboard/notas', icon: faFileLines },
        { id: 4, name: 'Materiais', url: '/dashboard/materiais', icon: faBookOpen },

    ],
    /*Lista De Paginas Do Site */
    pagesSite: [
        { id: 0, name: 'Home', url: '/', ativo: "none" },
        { id: 1, name: 'Sobre a Athenas', url: '/sobre', ativo: "flex" },
        { id: 2, name: 'Contato', url: '/contato', ativo: "none" },
    ],
    /*Lista os cursos */
    categories: [
        {
            id: 'cursos',
            name: 'Cursos',
            sections: [
                {
                    id: 'areas-da-saude',
                    name: 'Áreas Da Saúde',
                    icons: faUserNurse,
                    color: '',
                    items: [
                        { name: 'Auxiliar De Necropsia', href: '#', rating: 5.1, image: '/cardcurso/necropsia.jpg', description: 'Testes' },
                        { name: 'Cuidador De Idoso', href: '#', rating: 5, image: '/cardcurso/', description: 'Testes' },
                        { name: 'Atendente De Farmacia', href: '#', rating: 5, image: '/cardcurso/', description: 'Testes' },
                    ],
                },
                {
                    id: 'arte-e-producao',
                    name: 'Artes e Produção',
                    icons: faPalette,
                    color: '',
                    items: [
                        { name: 'Editor De Video Profissional', href: '#', rating: 5, image: '/cardcurso/', description: 'Testes' },
                        { name: 'Designer Grafico', href: '#', rating: 5, image: '/cardcurso/', description: 'Testes' },
                    ],
                },
                {
                    id: 'beleza-e-bem-estar',
                    name: 'Beleza e Bem Estar',
                    icons: faSprayCanSparkles,
                    color: '',
                    items: [
                        { name: 'Extensão De Cílios', href: '#', rating: 5, image: '/cardcurso/', description: 'Testes' },
                        { name: 'Designer De Sobrancelha', href: '#', rating: 5, image: '/cardcurso/', description: 'Testes' },
                        { name: 'Maquiagem', href: '#', rating: 5, image: '/cardcurso/', description: 'Testes' },
                        { name: 'Designer De Unhas', href: '#', rating: 5, image: '/cardcurso/', description: 'Testes' },
                        { name: 'Massoterapia', href: '#', rating: 5, image: '/cardcurso/', description: 'Testes' },
                        { name: 'Massoterapia Avançada', href: '#', rating: 5, image: '/cardcurso/', description: 'Testes' },
                    ],
                },
                {
                    id: 'idiomas',
                    name: 'Idiomas',
                    icons: faFlagUsa,
                    color: '',
                    items: [
                        { name: 'Inglês Do Zero Ão Avançado', href: '#', rating: 5, image: '/cardcurso/', description: 'Testes' },
                        { name: 'Inglês Kids', href: '#', rating: 5, image: '/cardcurso/', description: 'Testes' },
                    ],
                },
                {
                    id: 'gestao-negocio',
                    name: 'Gestão e Negócios',
                    icons: faBriefcase,
                    color: '',
                    items: [
                        { name: 'Auxiliar Administrativo', href: '#', rating: 5, image: '/cardcurso/', description: 'Testes' },
                        { name: 'Marketing Digital', href: '#', rating: 5, image: '/cardcurso/', description: 'Testes' },
                        { name: 'Telemarketing', href: '#', rating: 5, image: '/cardcurso/', description: 'Testes' },
                    ],
                },
                {
                    id: 'tecnologia',
                    name: 'Tecnologia',
                    icons: faMicrochip,
                    color: '',
                    items: [
                        { name: 'Informatica Profissional', href: '#', rating: 5, image: '/cardcurso/', description: 'Testes' },
                        { name: 'Desenvolvedor De Games', href: '#', rating: 5, image: '/cardcurso/', description: 'Testes' },
                        { name: 'Desenvolvedor De Software', href: '#', rating: 5, image: '/cardcurso/', description: 'Testes' },
                        { name: 'Técnico Em Hardware', href: '#', rating: 5, image: '/cardcurso/', description: 'Testes' },
                    ],
                },
                {
                    id: 'pedagogia',
                    name: 'Pedagogia',
                    icons: faBookOpen,
                    color: '',
                    items: [
                        { name: 'Auxiliar De Creche', href: '#', rating: 5, image: '/cardcurso/', description: 'Testes' },
                    ],
                },
            ],
        }
    ],
    /*Cards Inicio*/
    cardsHome: [
        {
            title: 'Área Da Estetica',
            subtitle: 'Propomos um ensino inovador, com metodologias ativas, onde o professor é capacitado na área e cria o próprio conteúdo, reinventando o sistema de ensino de uma forma prática.',
            icons: faSprayCanSparkles,
            image: '/cardcurso/necropsia.jpg',
            link: '1',
            iconsColor: '#dc06e6'
        },
        {
            title: 'Flexíveis',
            subtitle: 'Escolha entre os modos: Presencial, Semipresencial ou Online. Independente de qual for sua escolha, receba o suporte de nossa equipe de professores e técnicos quando quiser.',
            icons: faComputer,
            image: '/cardcurso/aux-administrativo.jpg',
            link: '2',
            iconsColor: '#122753'
        },
        {
            title: 'Áreas Da Saúde',
            subtitle: 'Chega de estudar aquilo que você nunca irá colocar em prática, todos os cursos são adequados às novas técnicas, exigências e tecnologias empregadas pelas empresas.',
            icons: faHeartPulse,
            image: '/cardcurso/cuidador-de-idosos.png',
            link: '3',
            iconsColor: '#18E101'
        },
        {
            title: 'Idiomas',
            subtitle: 'Escolha qual módulo fazer, aqui você quem manda. Adapte seu pacote escolhendo apenas os conhecimentos específicos, conforme seu interesse e(ou) necessidade.',
            icons: faFlagUsa,
            image: '/cardcurso/idiomas.jpg',
            link: '4',
            iconsColor: '#dc2626'
        },
        {
            title: 'Tecnologia',
            subtitle: 'Escolha qual módulo fazer, aqui você quem manda. Adapte seu pacote escolhendo apenas os conhecimentos específicos, conforme seu interesse e(ou) necessidade.',
            icons: faMicrochip,
            image: '/cardcurso/cuidador-de-idosos.png',
            link: '5',
            iconsColor: '#007FE0'
        },
    ]
}