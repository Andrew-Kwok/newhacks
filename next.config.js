/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

module.exports = {
    publicRuntimeConfig: {
        API_URL: "",
    },
    images: {
        domains: ['localhost', 'images.unsplash.com', 'drewkwok.pythonanywhere.com']
    },
}
