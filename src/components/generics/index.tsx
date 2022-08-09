import React from 'react'
import List from './List'

const Main = () => {
  return (
    <div>
      <List items={['Batman', 'Superman', 'Wonder Woman']} onClick={(item) => console.log(item)} />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      <List
        items={[
          {
            first: 'Bruce',
            last: 'Wayne',
            id: 1,
          },
          {
            first: 'Clark',
            last: 'Kent',
            id: 2,
          },
          {
            first: 'Princess',
            last: 'Diana',
            id: 3,
          },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  )
}

export default Main
