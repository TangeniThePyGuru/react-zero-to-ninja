import React from 'react'

const TodoList = props => (
  <ul>
    {props.items.map(item => (
      <li key={item.id}>
        <span>{item.title}</span>
      </li>
    ))}
  </ul>
)

export default TodoList
