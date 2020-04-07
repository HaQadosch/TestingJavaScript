import React from 'react'
import { loadGreeting } from './api'

export const GreetingLoader: React.FC = () => {
  const [greeting, setGreeting] = React.useState('')
  async function loadGreetingForInput (e) {
    e.preventDefault()
    const { data } = await loadGreeting(e.target.elements.name.value)
    console.log({ data })
    setGreeting(data.greeting)
  }
  return (
    <form onSubmit={ loadGreetingForInput }>
      <label htmlFor="name">Name</label>
      <input id="name" />
      <button type="submit">Load Greeting</button>
      <div aria-label="greeting">{ greeting }</div>
    </form>
  )
}
