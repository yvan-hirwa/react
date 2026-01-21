import './App.css'

function App() {
  return (
    <div className="app-container">
      <h1>Hello React</h1>
      
      <Header />
    </div>
  )
}

function Header(){
  const hobby = 'Playing football'

  return <p>Hello, My hobby is: {hobby}</p>
}

export default App