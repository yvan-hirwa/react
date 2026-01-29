import { useState } from "react"

function UserInfo({ person, setLikes }){
  // const [userData, setUserData] = useState(person)

  const {id, name, hobby, age, likes} = person

  return (
      <p>
        My name is: {name} and my hobby is: {hobby}. I am {age} years old, I was born in {2026 - age}
       <button onClick={() => setLikes(id)}>Like ❤️{likes}</button>
       {/* <button onClick={()=> setUserData(prev => ({...prev, hobby: 'Programming'}))}>Change hobby</button> */}
      
      </p>
  )
}

function Header({ children }){
  
  return (
  <div> 
      {children}
  </div>
  
)}

function App() {
  const users = [
    {
      id: 1,
      hobby: 'Football',
      name: 'Alex',
      age: 23,
      likes: 0
    },
    {
      id: 2,
      hobby: 'Cooking',
      name: 'Eric',
      age: 22,
      likes: 0
    },
    {
      id: 3,
      hobby: 'Coding',
      name: 'Trevor',
      age: 14,
      likes: 0
    }
  ]

  const[allUsers, setAllUsers] = useState(users)

  function handleLike(id) {
  setAllUsers(prevUsers => prevUsers.map(user => 
    user.id === id ? { ...user, likes: user.likes + 1 } : user
  ));
}
  return (
    <div className="app-container">
      <h1>Hello React</h1>

      { allUsers.map( user =>  <Header key={user.id}> <UserInfo person = {user} setLikes ={handleLike} /> </Header> ) }

    </div>
  )
}



export default App