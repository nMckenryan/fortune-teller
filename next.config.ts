import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff|woff2|ttf|eot|otf)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'public/fonts/',
          publicPath: '/fonts/',
        },
      },
    });
    return config;
  },
};

export default nextConfig;
