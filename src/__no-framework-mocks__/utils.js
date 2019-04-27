function foo(implementation = () => { }) {
  const mockFoo = (...args) => {
    mockFoo.mock.calls.push(args)
    return implementation(...args)
  }

  mockFoo.mock = {
    calls: []
  }

  mockFoo.mockImplementation = newImpl => implementation = newImpl

  return mockFoo
}

module.exports = {
  getWinner: foo((p1, p2) => p1)
}