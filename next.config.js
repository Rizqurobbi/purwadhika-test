/** @type {import('next').NextConfig} */
const withCSS = require("@zeit/next-css")

module.exports = withCSS({
  cssLoaderOptions: {
    url: false
  }
})
const nextConfig = {
  reactStrictMode: true,
}
module.exports = nextConfig
