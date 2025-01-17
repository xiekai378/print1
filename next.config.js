/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  // 关闭严格模式以避免开发时的双重渲染
  reactStrictMode: false,
}

module.exports = nextConfig 