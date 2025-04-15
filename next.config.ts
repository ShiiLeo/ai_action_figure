import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // 忽略构建时 ESLint 报错（让 Vercel 顺利部署）
    ignoreDuringBuilds: true,
  },
  /* 你可以继续保留其他配置项 */
};

export default nextConfig;
