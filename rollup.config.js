export default {
  input: 'src/monkeyPatching.js',
  output: {
    file: 'src/monkeyPatching.test.js',
    format: 'cjs'
  },
  external: ['riteway']
}
