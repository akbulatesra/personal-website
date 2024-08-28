/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PUBLIC_KEY: process.env.PUBLIC_KEY,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    SERVICE_ID: process.env.SERVICE_ID,
  },
};

export default nextConfig;
