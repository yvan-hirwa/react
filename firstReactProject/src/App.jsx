import './App.css'

function App() {
  const users = [
    {
      hobby: 'Football',
      name: 'Alex',
      age: 23
    },
    {
      hobby: 'Cooking',
      name: 'Eric',
      age: 22
    },
    {
      hobby: 'Coding',
      name: 'Trevor',
      age: 14
    }
  ]
  return (
    <div className="app-container">
      <h1>Hello React</h1>

      {users.map(user => <Header hobby={user.hobby} name={user.name} age={user.age} />)}
    </div>
  )
}

function Header({ hobby, name, age }){

  return <p>Hello, My name is: {name} and my hobby is: {hobby}. I am {age} years old, I was born in {2026-age}</p>
}

export default App