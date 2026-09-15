/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Nebbys Kasm Images',
    description: 'My Custom Kasm Images.',
    icon: '/img/logo.svg',
    listUrl: 'https://nebulahhh.github.io/kasm-registry',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
