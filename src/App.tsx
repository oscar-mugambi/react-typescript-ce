import './App.css'
import Button from './components/Button'
import Container from './components/Container'
import { Greet } from './components/Greet'
import Heading from './components/Heading'
import Input from './components/Input'
import Oscar from './components/Oscar'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Box from './components/state/context/Box'
import { ThemeContextProvider } from './components/state/context/ThemeContext'
import { User } from './components/state/context/User'
import { UserContextProvider } from './components/state/context/UserContext'
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
      <Container styles={{ border: '1px solid black', padding: '1 rem' }} />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  )
}

export default App
