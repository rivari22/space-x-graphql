/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GRAPHQL_URL: process.env.GRAPHQL_URL
  }
}

module.exports = nextConfig
