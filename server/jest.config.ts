const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  testTimeout: 1500,
  reporters: ["default", "jest-junit"]
};

export default config;
