import { useEffect, useState } from "react"
import CurrentWeather from "./components/CurrentWeather"
import Search from "./components/Search"

function App() {

  const [input, setInput] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, SetLoading] = useState(false)
  const [weather, setWeather] = useState('')
  const [error, setError] = useState('')

  function handleSearch(){
    setSearchTerm(input)
  }

  useEffect(()=>{

    async function fetchWeather() {
      try {
        SetLoading(true)
        const coordinates = await fetch( `https://geocoding-api.open-meteo.com/v1/search?name=${searchTerm}`)
        if(!coordinates.ok)throw new Error('Failed to fetch')
        const coordinatesObj = coordinates.json()
        const {latitude, longtitude} = coordinatesObj.results[0]
        console.log(latitude,longtitude)
      } catch (error) {
        setError(error)
        SetLoading(false)
      }
    }
    fetchWeather()
  }, [searchTerm])


  return (
    <div className="h-screen w-screen relative">
      <div 
        className="bg-[url('./assets/background.jpg')] h-full w-full bg-cover bg-no-repeat flex flex-col justify-center items-center">
      </div>
      <div className=" absolute inset-0 h-full w-full bg-black opacity-30 "></div>

      <div className="absolute inset-0 h-full w-full flex flex-col justify-center items-center gap-5">
        <Search input={input} inputHandler = {setInput} handleSearch ={handleSearch}/>
        <CurrentWeather loading= {loading} error = {error} weather = {weather}/>
      </div>
    </div>
  )
}

export default App
