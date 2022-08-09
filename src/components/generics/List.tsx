import React from 'react'

type ListProps<T> = T extends number | string
  ? {
      items: number[] | string[]
      onClick: (item: number | string) => void
    }
  : {
      items: T[]
      onClick: (item: T) => void
    }

const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      {items.map((item) => (
        <li onClick={() => onClick(item)}>item</li>
      ))}
    </div>
  )
}

export default List
