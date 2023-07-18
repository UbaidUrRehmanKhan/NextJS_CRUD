/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // MONGODB_URI: "mongodb://127.0.0.0:27017/nextjs-crud",
    MONGODB_URI: "mongodb+srv://urehman:523193@myprojectcluster.jdcpbjy.mongodb.net/users"
  },
  reactStrictMode: true
}

module.exports = nextConfig
