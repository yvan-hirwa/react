// import { useState } from 'react'
import './App.css'

function App() {
  const users = [
    {
      id: 1,
      hobby: 'Football',
      name: 'Alex',
      age: 23
    },
    {
      id: 2,
      hobby: 'Cooking',
      name: 'Eric',
      age: 22
    },
    {
      id: 3,
      hobby: 'Coding',
      name: 'Trevor',
      age: 14
    }
  ]
  return (
    <div className="app-container">
      <h1>Hello React</h1>

      {users.map(user => <Header key={user.id} person = {user} > Secret message </Header>)}
    </div>
  )
}

function Header({ person, children }){
  // person.name = 'Hacker' immutability of props
  const {name, hobby, age} = person

  return (
  <p>
    Hello, My name is: {name} and my hobby is: {hobby}. I am {age} years old, I was born in {2026 - age}
    message: {children}
  </p>
  )
}

export default App