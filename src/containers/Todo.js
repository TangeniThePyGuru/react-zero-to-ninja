import React, { Component } from 'react'
import Todolist from '../components/TodoList'

export default class Todo extends Component {
  constructor () {
    super()

    this.state = {
      items: [],
      text: '',
      error: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render () {
    return (
      <div>
        {this.state.error && <span>Please fill in a todo</span>}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="todo" />
          <input
            id="todo"
            name="todo"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </form>
        {this.state.items.length > 0 && <Todolist items={this.state.items} />}
      </div>
    )
  }

  handleSubmit (e) {
    // prevents the default actions for the form
    e.preventDefault()

    const newItem = {
      title: this.state.text,
      id: Date.now()
    }

    // a clone of the existing items
    this.setState({ items: [...this.state.items, newItem], text: '' })
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        const todos = json.slice(0, 10)
        this.setState({
          items: [...this.state.items, ...todos]
        })
      })
  }

  handleChange (e) {
    this.setState({
      text: e.target.value,
      error: false
    })
  }
}
