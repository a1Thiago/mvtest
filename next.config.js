/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  future: {
    webpack5: true,
  },

  // webpack: function (config) {
  //   config.plugins.push(new webpack.EnvironmentPlugin({ ...process.env }))
  //   return config;
  // },

}

module.exports = nextConfig

