import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import { Greet } from './components/Greet'
import Heading from './components/Heading'
import Input from './components/Input'
import Oscar from './components/Oscar'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'

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
      <Greet name={'Veritasium'} messageCount={10} isLoggedIn={false} />
      <Person personName={personName} />
      <PersonList names={nameList} />
      <Status status='error' />
      <Oscar>
        <Heading>Oscar Goes to Dicaprio</Heading>
      </Oscar>
      <Button handleClick={(e) => console.log(e)} />
      <Input value='' handleChange={(event) => console.log(event)} />
    </div>
  )
}

export default App
