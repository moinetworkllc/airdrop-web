/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/pages/eligibility',
        destination: '/eligibility',
        permanent: true,
      },
    ];
  },
};
