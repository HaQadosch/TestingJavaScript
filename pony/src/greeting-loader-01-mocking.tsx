import React from 'react'
import { loadGreeting } from './api'

export const GreetingLoader: React.FC = () => {
  const [greeting, setGreeting] = React.useState('')
  async function loadGreetingForInput (e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()

    const { data: { greeting } } = await loadGreeting(e.target.elements.name.value)
    setGreeting(greeting)
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
