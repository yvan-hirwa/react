import { useEffect, useState } from "react"
import CurrentWeather from "./components/CurrentWeather"
import Search from "./components/Search"

function App() {

  const [input, setInput] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState(null)

  function handleSearch(){
    if(input.trim()){
    setSearchTerm(input)
  }
  }

  useEffect(()=>{
    if(!searchTerm) return

    const abortController = new AbortController()
    async function fetchWeather() {
      
      try {
        setLoading(true)
        const coordinates = await fetch( `https://geocoding-api.open-meteo.com/v1/search?name=${searchTerm}`,{signal: abortController.signal})
        if(!coordinates.ok)throw new Error('Failed to find City')
        const coordinatesObj = await coordinates.json()
        if(!coordinatesObj.results?.length) throw new Error('City not found')
        const {latitude, longitude} = coordinatesObj.results[0]
        
        const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&timezone=auto`, {signal: abortController.signal})
        if(!weatherRes.ok) throw new Error('Failed to fetch weather')
        const weatherObj = await weatherRes.json()
        console.log(weatherObj)
        setWeather(weatherObj)

      } catch (error) {
        if (error.name !== 'AbortError') setError(error)
      }finally{
        setLoading(false)
        setInput('')
      }
    }

    fetchWeather()

    return ()=> {
      abortController.abort()
      setError(null)
    }
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
