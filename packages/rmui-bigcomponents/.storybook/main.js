const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    stories: [
        // First story imported is the default displayed page, so set it explicitly
        // For more details: https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy#sorting-stories
        './docs/Overview.stories.mdx',
        './docs/**/*.stories.mdx',
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    typescript: {
        check: true // type-check stories during Storybook build
    },
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
