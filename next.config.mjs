const isProd = process.env.NODE_ENV === 'production'
const prefixPath = !isProd ? '/sub-derectory' : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    assetPrefix: prefixPath,
    basePath: prefixPath,
};



export default nextConfig;
