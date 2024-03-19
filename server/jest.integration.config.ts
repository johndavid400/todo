const config = {
  globalSetup: './test/global-setup.js',
  globalTeardown: './test/global-teardown.js',
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  testTimeout: 1500,
  reporters: ["default", "jest-junit"]
};

export default config;
