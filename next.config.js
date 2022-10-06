/** @type {import('next').NextConfig} */

const contentSecurityPolicy = `
  default-src
    'self';
  script-src
    *.googletagmanager.com
    'nonce-test'
    ${process.env.NODE_ENV === 'development' ? `'unsafe-eval'` : ''}
    'self';
  style-src
    ${process.env.NODE_ENV === 'development' ? `'unsafe-inline'` : 'nonce-test'}
    'self';
`;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: contentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
];

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
