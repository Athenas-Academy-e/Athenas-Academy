/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://areaaluno.athenasacademy.com.br',
  generateRobotsTxt: true, // Gera o arquivo robots.txt
  exclude: [
    '/api/*',       // Exclui todas as páginas que começam com '/api'
    '/admin/*',     // Exclui todas as páginas que começam com '/admin'
    '/visualizador/*', // Exclui todas as páginas que começam com '/visualizador'
    '/dashboard/*',  // Exclui todas as páginas que começam com '/dashboard'
  ],
  sitemapSize: 7000,  // Limite de tamanho do sitemap (7000 URLs por arquivo)
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://areaaluno.athenasacademy.com.br/sitemap.xml', // Se você gerar múltiplos sitemaps
    ],
    policies: [
      {
        userAgent: '*',  // Aplicável a todos os agentes de usuário
        allow: '/',       // Permite o acesso à página inicial
        disallow: [
          '/admin/',        // Bloqueia o acesso a todas as páginas '/admin/'
          '/visualizador/',  // Bloqueia o acesso a todas as páginas '/visualizador/'
          '/api/',           // Bloqueia o acesso a todas as páginas '/api/'
          '/dashboard/',     // Bloqueia o acesso a todas as páginas '/dashboard/'
        ],
      },
    ],
  },
}
