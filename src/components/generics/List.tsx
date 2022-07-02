import React from 'react'

type ListProps<T> = {
  items: T[]
  onClick: (item: T) => void
}

const List = <T extends { id: number }>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      {items.map((item) => (
        <li key={item.id} onClick={() => onClick(item)}>
          {item.id}
        </li>
      ))}
    </div>
  )
}

export default List
