const config = {
  globalSetup: './test/global-setup.js',
  globalTeardown: './test/global-teardown.js',
  clearMocks: true,
  testTimeout: 1500,
  testEnvironment: 'node',
  preset: 'ts-jest',
};

export default config;
