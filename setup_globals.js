global.test = async function test (title, foo) {
  try {
    await foo()
    console.info(`✔ ${title}`)
  } catch (error) {
    console.error(`💩 ${title}`)
    console.error(error)
  }
}

global.expect = function expect (actual) {
  return {
    toBe (expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}
