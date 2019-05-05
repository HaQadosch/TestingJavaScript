module.exports = {
  testEnvironment: 'jest-environment-jsdom', // 'jest-environment-node'
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js')
  }
}
