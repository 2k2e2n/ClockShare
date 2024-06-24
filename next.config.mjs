

const isProd = process.env.NODE_ENV === 'production'
const prefixPath = !isProd ? '/sub-derectory' : ''
const prod = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    'process.env.BACKEND_URL': prod ? '/ClockShare' : '',
};

export default nextConfig;