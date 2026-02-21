import { useState } from "react"
import Display from "./components/display"
import Keys from "./components/Keys"


function App() {

  const [display, setDisplay] = useState('0')
  const [accumulator, setAccumulator] = useState(0)
  const [pendingOperator, setPendingOperator] = useState(null)
  const [newInput, setNewInput] = useState(true)
  
  function handleDigits(element){
    if(element === '0' && display === '0'){
      setDisplay('0')
    }
    else if(newInput){
      setDisplay(element)
      setNewInput(false)
    }else{
      setDisplay(prev => prev+element)
    }
  }

  function handleDot(){
    if(newInput){
      setDisplay('0.')
      setNewInput(false)
      return 
    }
    if(!display.includes('.')){
      setDisplay(prev => prev+'.')
    }
  }

  function handleFunction(children){
      if(children === 'AC'){
        setDisplay('0')
        setNewInput(true)
        setAccumulator(0)
        setPendingOperator(null)
        return 
      }
      if(children === '+/-' && !(display.charAt(0)==='-')){
        setDisplay(prev => '-'+prev)
        return 
      }
      if(children === '+/-' && display.charAt(0)==='-'){
        setDisplay(prev => prev.slice(1))
        return 
      }
      if(children === 'DEL'){
        setDisplay(prev =>{
          if(prev.length >1){
            return prev.slice(0,prev.length-1)
          }else{
            setNewInput(true)
            return '0'
          }
        })
      }

      if (children === '=') {
        if (pendingOperator && !newInput) {
          compute(pendingOperator, null)
        }
        return
      }
  }

  function handleOp(op) {
    if (newInput && pendingOperator) {
      setPendingOperator(op)
      return
    }

    if (!pendingOperator) {
      setAccumulator(Number(display))
      setPendingOperator(op)
      setNewInput(true)
      return
    }

    compute(pendingOperator, op)
  }

  function compute(opToApply, nextOp) {
    let result = 0

    switch (opToApply) {
      case '÷':
        result = accumulator / Number(display)
        break
      case '+':
        result = accumulator + Number(display)
        break
      case '-':
        result = accumulator - Number(display)
        break
      case 'x':
        result = accumulator * Number(display)
        break
      default:
        return
    }

    setAccumulator(result)
    setDisplay(String(result))
    setPendingOperator(nextOp)   
    setNewInput(true)
  }
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-1">
      <div className="w-96 h-115 rounded-2xl shadow-xl">
        <Display  display = {display}/>
        <Keys handleDigits = {handleDigits} handleDot = {handleDot} handleFunction = {handleFunction} handleOp = {handleOp}/>
      </div>
    </div>
  )
}

export default App
