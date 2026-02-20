// import Button from "./Button.jsx"
import Button from "./button"

function Keys({handleDigits, handleDot, handleFunction, handleOp}) {
  return (
    <div className="grid grid-cols-4 auto-rows-[3.5rem] gap-0.5 m-2">
        <Button color ='number'handler = {handleFunction}>AC</Button>
        <Button color = 'number'handler = {handleFunction}>+/-</Button>
        <Button color = 'number'handler = {handleFunction}>DEL</Button>
        <Button color = 'number' handler={handleOp}>÷</Button>
        <Button handler = {handleDigits}>1</Button>
        <Button handler = {handleDigits}>2</Button>
        <Button handler = {handleDigits}>3</Button>
        <Button color = 'number' handler={handleOp}>x</Button>
        <Button handler = {handleDigits}>4</Button>
        <Button handler = {handleDigits}>5</Button>
        <Button handler = {handleDigits}>6</Button>
        <Button color = 'number' handler={handleOp}>-</Button>
        <Button handler = {handleDigits}>7</Button>
        <Button handler = {handleDigits}>8</Button>
        <Button handler = {handleDigits}>9</Button>
        <Button color = 'number' handler={handleOp}>+</Button>
        <Button className='col-span-2' handler = {handleDigits}>0</Button>
        <Button color = 'number' handler = {handleDot}>.</Button>
        <Button color = 'number'handler = {handleFunction}>=</Button>
    </div>
  )
}

export default Keys