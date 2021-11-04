// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function Greeting({initialName = ''}) {
  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') || initialName
  
  const [name, setName] = React.useState(window.localStorage.getItem('name') || initialName)

  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰 window.localStorage.setItem('name', name)

  function handleChange(event) {
    setName(event.target.value)
  }

  React.useEffect(() => {
    window.localStorage.setItem('name', name)
  }, [name]) // only update when name changes

  return (
    <div>
      <form>
        <div>{name ? <strong>Hello {name}</strong> : 'Please type your name'}</div>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>    
    </div>
  )
}

function App() {
  return <Greeting initialName="beautiful stranger"/>
}

export default App
