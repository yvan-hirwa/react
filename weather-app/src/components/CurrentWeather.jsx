import LoadingSpinner from "./LoadingSpinner"
import CurrentData from "./CurrentData"
import WeatherError from "./WeatherError"

export default function CurrentWeather({loading, error, weather}) {
  return (
    <div className="h-70 w-md relative rounded-2xl shadow-sm">
        <div className="absolute inset-0 h-full w-full bg-white opacity-10 rounded-2xl backdrop-blur-2xl"></div>
        <div className="absolute inset-0 h-full w-full flex flex-col justify-center items-center">
          {error
            ? <WeatherError error = {error}/>

            :  loading 

            ? <LoadingSpinner />
            : <CurrentData weather = {weather}/>
          }
            
        </div>
    </div>
  )
}
