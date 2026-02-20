
function Button({children, color, className, handler }) {
  return (
    <button 
        className={"flex justify-center items-center w-full h-full cursor-pointer font-roboto font-bold text-2xl text-white rounded-xl "+(color==='number'? 'bg-gray-500 hover:bg-gray-500/85 ':'bg-amber-500 hover:bg-amber-500/85 ')+ className}
        value={children}
        onClick = {() => handler(children)}
    >

    {children}
    </button>
  )
}

export default Button

