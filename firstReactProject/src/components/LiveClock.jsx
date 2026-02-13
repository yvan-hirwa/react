import React, {useState, useEffect} from 'react'

function LiveClock() {
    const [time, setTime] = useState(new Date())
    const [timezone, setTimezone] = useState('local')

    useEffect(()=>{
        const intervalId = setInterval(()=> setTime(new Date()), 1000)

        return ()=> clearInterval(intervalId)
    }, [])


  return (
    <div>
        <h1>{time.toLocaleTimeString(undefined, {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: "2-digit",
                    timeZone: timezone ==='UTC' ? 'UTC': undefined
                    
                    })}
        </h1>
        <p>Timezones: </p>
        <button onClick={()=> setTimezone('local')}>Local</button>
        <button onClick={()=> setTimezone('UTC')}>UTC</button>
    </div>
  )
}

export default LiveClock