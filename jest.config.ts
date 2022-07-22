export default {
  roots: ['<rootDir>/src'],
  clearMocks: true,
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: false,
  bail: 1,
  collectCoverageFrom: ['src/*/.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'],
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
            decorators: true
          },
          keepClassNames: true,
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
            react: {
              runtime: 'automatic'
            }
          }
        },
        module: {
          type: 'es6',
          noInterop: false
        }
      }
    ]
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '\\.(scss|css|less)$': 'identity-obj-proxy',
    '\\.(png|svg|pdf|jpg|jpeg)$': '<rootDir>/.jest/fileMock.ts'
  }
};
