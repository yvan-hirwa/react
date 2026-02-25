import WeatherError from "./WeatherError"
import WEATHER_CODES from "../utility/utility"

export default function CurrentData({weather}) {
  if(!weather)return <WeatherError error = {{message: 'Search City'}} />


  const {name, label} = WEATHER_CODES[weather.current.weather_code]
  const time = new Date(weather?.current.time)
  return (
    <>
        <div className="w-full h-10 flex justify-start items-center px-5">
            <p className="font-google font-bold text-white text-sm w-[30%] py-2 border-b border-white/10">{weather.timezone}</p>
        </div>

        <div className="w-full h-40 flex justify-between items-center px-5 border-b border-white/10">
            <div className="w-full h-20 flex flex-col justify-center items-start">
              <h1 className="font-google font-bold text-white text-8xl  ">{Math.round(weather.current.temperature_2m)}°</h1>
              <h1 className="font-google font-bold text-white text-md  ">{label}</h1>
            </div>
            <div className="w-full h-30 flex flex-col justify-start items-center ">
              <img src={`/src/assets/icons/${name}.png`} alt="" className="h-28 w-28"/>
            </div>
        </div>

        <div className="w-full h-10 flex justify-between items-center bg-blue-950/5 px-5 border-b border-white/10">
            <div>
              <p className="font-google text-white">Humidity: <span className=" font-bold">{Math.round(weather.current.relative_humidity_2m)}</span>%</p>
            </div>
            <div>
              <p className="font-google text-white">Wind: <span className=" font-bold">{Math.round(weather.current.wind_speed_10m)}</span>km/h</p>
            </div>
            <div>
              <p className="font-google text-white">Feels like: <span className=" font-bold">{Math.round(weather.current.apparent_temperature)}°</span></p>
            </div>
            
        </div>

        <div className="w-full h-10 flex justify-center items-center bg-blue-950/30 rounded-b-2xl px-5">
            <p className="font-google  text-white text-sm ">Last updated: {time.toLocaleTimeString([],{
              hour: '2-digit',
              minute: '2-digit'
            })}</p>
        </div>
    </>
    )
}
