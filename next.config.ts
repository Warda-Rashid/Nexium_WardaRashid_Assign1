/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable ESLint during production build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Optionally, you might need to ensure module resolution is strict
  // webpack: (config, { isServer }) => {
  //   // This might help with path aliases, but usually not needed if tsconfig.json is correct
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     '@/data': require('path').join(__dirname, 'src/data'),
  //   };
  //   return config;
  // },
};

export default nextConfig;