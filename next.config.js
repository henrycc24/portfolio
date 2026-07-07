/**
 * @type {import('next').NextConfig}
 */
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW
    },
    trailingSlash: true,
    reactStrictMode: true,
    ...(isGithubPages
        ? {
              output: 'export',
              images: { unoptimized: true },
              basePath: basePath || undefined,
              assetPrefix: basePath ? `${basePath}/` : undefined
          }
        : {}),
    allowedDevOrigins: ['192.168.1.84']
};

module.exports = nextConfig;
