import windIcon from '../assets/wind.png'

export default function WeatherError({error}) {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-2">
        <div>
           <img src={windIcon} alt=""  className='w-28 h-28'/> 
        </div>
        <div>
            <h1 className='font-google font-semibold text-white text-lg'>
                {error}
            </h1>
        </div>
    </div>
  )
}
