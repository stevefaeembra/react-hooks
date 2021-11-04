// Lifting state
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

function Name({name, onNameChange}) {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
    </div>
  )
}

// 🐨 accept `animal` and `onAnimalChange` props to this component
function FavoriteAnimal({animal, onAnimalChange}) {
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        value={animal}
        onChange={onAnimalChange}
      />
    </div>
  )
}

// 🐨 uncomment this
function Display({name, animal}) {
  return <div>{`Hey ${name}, your favorite animal is: ${animal}!`}</div>
}

function App() {
  const [animal, setAnimal] = React.useState('')
  const [name, setName] = React.useState('')
  return (
    <form>
      <Display name={name} animal={animal}/>
      <Name name={name} onNameChange={event => setName(event.target.value)} />
      <FavoriteAnimal onAnimalChange={event => setAnimal(event.target.value)}/>    
    </form>
  )
}

export default App
