import { useState } from "react"
import Display from "./components/display"
import Keys from "./components/Keys"


function App() {

  const [display, setDisplay] = useState('0')
  const [accumulator, setAccumulator] = useState(0)
  const [pendingOperator, setPendingOperator] = useState(null)
  const [newInput, setNewInput] = useState(true)
  


  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-1">
      <div className="w-96 h-115 rounded-2xl shadow-xl">
        <Display  display = {display}/>
        <Keys />
      </div>
    </div>
  )
}

export default App
