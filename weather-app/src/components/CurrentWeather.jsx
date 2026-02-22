

export default function CurrentWeather({error}) {
  return (
    <div className="h-60 w-md relative rounded-2xl shadow-sm">
        <div className="absolute inset-0 h-full w-full bg-white opacity-10 rounded-2xl"></div>
        <div className="absolute inset-0 h-full w-full flex flex-col justify-center items-center">
          {error}
            <div className="text-white font-bold font-google">Hello world</div>
        </div>
    </div>
  )
}
