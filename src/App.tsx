import { useState } from 'react'
import './App.css'
import { Greet } from './components/Greet'
import Person from './components/Person'
import PersonList from './components/PersonList'

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },
    {
      first: 'Pricess',
      last: 'Diana',
    },
  ]

  return (
    <div className='App'>
      <Greet name={'Veritasium'} messageCount={10} />
      <Person personName={personName} />
      <PersonList names={nameList} />
    </div>
  )
}

export default App
