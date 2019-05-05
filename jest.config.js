module.exports = {
  testEnvironment: 'jest-environment-jsdom', // 'jest-environment-node'
  moduleNameMapper: {
    '\\.css$': require.resolve('./test/style-mock.js')
  }
}
