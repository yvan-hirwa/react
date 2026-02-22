import { useState } from "react"
import CurrentWeather from "./components/CurrentWeather"
import Search from "./components/Search"

function App() {

  const [input, setInput] = useState('')
  const [loading, SetLoading] = useState(false)

  return (
    <div className="h-screen w-screen relative">
      <div 
        className="bg-[url('./assets/background.jpg')] h-full w-full bg-cover bg-no-repeat flex flex-col justify-center items-center">
      </div>
      {/* <div className=" absolute inset-0 h-full w-full bg-black opacity-10 "></div> */}

      <div className="absolute inset-0 h-full w-full flex flex-col justify-center items-center gap-5">
        <Search input={input} inputHandler = {setInput}/>
        <CurrentWeather loading= {loading}/>
      </div>
    </div>
  )
}

export default App
