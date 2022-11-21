const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    stories: [
        // First story is the default loading page, so set it explicitly
        './docs/Overview.stories.mdx',
        './docs/**/*.stories.mdx',
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: ['@storybook/addon-docs'],
    framework: '@storybook/react',
    staticDirs: ['./assets'],
    webpackFinal: async (config) => {
        config.resolve.plugins = [
            ...(config.resolve.plugins || []),
            new TsconfigPathsPlugin({
                extensions: config.resolve.extensions
            })
        ];
        return config;
    }
};
