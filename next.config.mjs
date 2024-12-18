/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.daisyui.com',
                port: '',
                pathname: '/images/**',
            },
        ],
    },
    async rewrites() {
        return [
          {
            source: '/:path*',
            destination: `${process.env.MATERIAL_URL}/:path*`, // Substitua pelo domínio do servidor de origem
          },
        ];
      },
};

export default nextConfig;
