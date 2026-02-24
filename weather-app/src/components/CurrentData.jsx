import windIcon  from "../assets/wind.png"
import sunIcon  from "../assets/sun.png"

export default function CurrentData({weather}) {
  return (
    <>
        <div className="w-full h-10 flex justify-start items-center px-5">
            <p className="font-google font-bold text-white text-sm w-[30%] py-2 border-b border-white/10">Kigali, Rwanda</p>
        </div>

        <div className="w-full h-40 flex justify-between items-center px-5 border-b border-white/10">
            <div className="w-full h-20 flex flex-col justify-center items-start">
              <h1 className="font-google font-bold text-white text-8xl  ">26°</h1>
              <h1 className="font-google font-bold text-white text-md  ">Sunny</h1>
            </div>
            <div className="w-full h-30 flex flex-col justify-start items-center ">
              <img src={sunIcon} alt="" className="h-28 w-28"/>
              
            </div>
        </div>

        <div className="w-full h-10 flex justify-between items-center bg-blue-950/5 px-5 border-b border-white/10">
            <div>
              <p className="font-google text-white">Humidity: <span className=" font-bold">40</span>%</p>
            </div>
            <div>
              <p className="font-google text-white">Wind: <span className=" font-bold">10</span>km/h</p>
            </div>
            <div>
              <p className="font-google text-white">Feels like: <span className=" font-bold">26°</span></p>
            </div>
            
        </div>

        <div className="w-full h-10 flex justify-center items-center bg-blue-950/30 rounded-b-2xl px-5">
            <p className="font-google  text-white text-sm ">Last updated: 17:15</p>
        </div>
    </>
  )
}
