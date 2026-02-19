import Button from "./Button.jsx"

function Keys() {
  return (
    <div className="grid grid-cols-4 auto-rows-[3.5rem] gap-0.5 m-2">
        <Button color ='number'>AC</Button>
        <Button color = 'number'>+/-</Button>
        <Button color = 'number'>DEL</Button>
        <Button color = 'number'>÷</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button color = 'number'>x</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button color = 'number'>-</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button color = 'number'>+</Button>
        <Button className='col-span-2'>0</Button>
        <Button color = 'number'>.</Button>
        <Button color = 'number'>=</Button>
    </div>
  )
}

export default Keys