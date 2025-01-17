/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  // 添加antd的按需加载支持
  transpilePackages: ['antd', '@ant-design/icons'],
};

export default nextConfig; 