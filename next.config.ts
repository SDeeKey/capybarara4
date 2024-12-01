import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        // дополнительные опции, если необходимо
                    },
                },
            ],
        });

        return config;
    },
};

export default nextConfig;
