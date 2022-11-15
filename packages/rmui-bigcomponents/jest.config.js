/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleDirectories: ['node_modules', 'src'],
    setupFiles: ['@testing-library/react/dont-cleanup-after-each'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
};
