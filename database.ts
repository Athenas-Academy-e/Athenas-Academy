import { faBookOpen, faBriefcase, faComputer, faFlagUsa, faHeartPulse, faMicrochip, faPalette, faSprayCanSparkles, faUserNurse } from "@fortawesome/free-solid-svg-icons";

export const Database = {
    /*Lista de configuracoes*/
    settings: [{
        id:'01',
        companyname: 'Athenas Academy',
        logoDark: '/logo-dark.png',
        logoLight: '/logo-light.png',
        logoSmallLight: '/logo-small-light.png',
        logoSmallDark: '/logo-small-dark.png',
        alt: 'Athenas Academy Logo',
        urlaluno: 'https://alunos.athenasacademy.com.br/',
        urllogin: '/login',
        urlcadastro: '/cadastro'
    }],
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
    /*Lista as paginas */
    pages: [
        {id:'01', name: 'Home', href: '/', ativo: "none" },
        {id:'02', name: 'Sobre a Athenas', href: '/sobre', ativo: "flex" },
        {id:'03', name: 'Contato', href: '/contato', ativo: "none" },
    ],
    /*Cards home*/
    cardsHome: [
        {   
            id:'01',
            title: 'Área Da Estetica',
            subtitle: 'Propomos um ensino inovador, com metodologias ativas, onde o professor é capacitado na área e cria o próprio conteúdo, reinventando o sistema de ensino de uma forma prática.',
            icons: faSprayCanSparkles,
            image: '/cardcurso/necropsia.jpg',
            link: '1',
            iconsColor: '#dc06e6'
        },
        {   
            id:'02',
            title: 'Flexíveis',
            subtitle: 'Escolha entre os modos: Presencial, Semipresencial ou Online. Independente de qual for sua escolha, receba o suporte de nossa equipe de professores e técnicos quando quiser.',
            icons: faComputer,
            image: '/cardcurso/aux-administrativo.jpg',
            link: '2',
            iconsColor: '#122753'
        },
        {   
            id:'03',
            title: 'Áreas Da Saúde',
            subtitle: 'Chega de estudar aquilo que você nunca irá colocar em prática, todos os cursos são adequados às novas técnicas, exigências e tecnologias empregadas pelas empresas.',
            icons: faHeartPulse,
            image: '/cardcurso/cuidador-de-idosos.png',
            link: '3',
            iconsColor: '#18E101'
        },
        {   
            id:'03',
            title: 'Idiomas',
            subtitle: 'Escolha qual módulo fazer, aqui você quem manda. Adapte seu pacote escolhendo apenas os conhecimentos específicos, conforme seu interesse e(ou) necessidade.',
            icons: faFlagUsa,
            image: '/cardcurso/idiomas.jpg',
            link: '4',
            iconsColor: '#dc2626'
        },
        {   
            id:'04',
            title: 'Tecnologia',
            subtitle: 'Escolha qual módulo fazer, aqui você quem manda. Adapte seu pacote escolhendo apenas os conhecimentos específicos, conforme seu interesse e(ou) necessidade.',
            icons: faMicrochip,
            image: '/cardcurso/cuidador-de-idosos.png',
            link: '5',
            iconsColor: '#007FE0'
        },

    ]
}