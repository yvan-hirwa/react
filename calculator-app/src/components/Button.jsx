
function Button({children, color}) {
  return (
    <button 
        className={"flex justify-center items-center w-16 h-12 font-roboto font-bold text-2xl text-white rounded-xl "+(color==='number'? 'bg-gray-500':'bg-amber-500')}
        value={children}
    >

    {children}
    </button>
  )
}

export default Button

