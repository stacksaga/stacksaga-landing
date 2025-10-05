/** @type {import('next').NextConfig} */
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
    basePath: '/stacksaga-landing',
}

export default nextConfig
