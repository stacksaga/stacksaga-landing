/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repositoryName = 'stacksaga-landing'
const nextConfig = {
    output: 'export',
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: false,
    },
    basePath: isProd ? `/${repositoryName}` : '',
    assetPrefix: isProd ? `/${repositoryName}/` : '',
}

export default nextConfig
