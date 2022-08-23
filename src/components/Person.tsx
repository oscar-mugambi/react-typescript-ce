import { PersonProps } from './types/Person.types'

const Person = (props: PersonProps) => {
  return (
    <div>
      {' '}
      {props.personName.first} {props.personName.last}
    </div>
  )
}

export default Person
