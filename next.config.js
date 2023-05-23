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
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (!isServer) {
        // config.plugins.push(
        //     new webpack.ProvidePlugin({
        //         global: "global"
        //     })
        // )

        config.resolve.fallback = {
            fs: false,
            stream: false,
            crypto: false,
            os: false,
            readline: false,
            ejs: false,
            assert: require.resolve("assert"),
            path: false,
            net: false,
            tls: false
        }

        return config
    }

    return config
  }
};
