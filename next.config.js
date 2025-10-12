/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    basePath: '/support.marshmallowwars.github.io',
    assetPrefix: '/support.marshmallowwars.github.io/',
}

module.exports = nextConfig
