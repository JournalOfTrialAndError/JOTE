const config = {
  displayName: 'ojs-client',
  preset: '../../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      useESM: true,
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+.[tj]sx?$': 'ts-jest',
  },
  transformIgnorePatterns: [],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/ojs-client',
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(.{1,2}/.*).js$': '$1',
  },
}

export default config
