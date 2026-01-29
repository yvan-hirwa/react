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


//The Test on App.jsx

// 🏆 The "Store Manager" Final Exam
// This challenge is designed to test every single thing we have covered: JSX, Props, Composition, State Objects, Arrays in State, and Lifting State Up.

// 1. The Data (The "State")
// Your app will manage a Bakery. In your App component, create a state called bakeryData. It should be an array of objects.

// Each object needs: id, itemName (e.g., "Croissant"), price, and stock (how many are left).

// 2. The Component Tree (The "Architecture")
// You must build this specific hierarchy:

// App: The "Boss." Holds the bakery state.

// Storefront: The "Wrapper." Use Composition (children) to give it a nice border or title.

// ProductCard: Receives an individual item as a Prop.

// StockDisplay: A small component inside ProductCard that shows the stock number.

// 3. The Interactions (The "Logic")
// "Buy" Button: Inside ProductCard, add a button. When clicked, it should decrease the stock of that specific item by 1.

// Rule: The stock cannot go below 0.

// Lifting State: The function to change the stock must be defined in App and passed down.

// "Restock" Button: Add a button in App (not the child) that sets the stock of every item back to 10 at once.