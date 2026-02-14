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
        <ClockDisplay time = {time} timezone ={timezone} />
        <p>Timezones: </p>
        <TimezoneSelector timezone = {timezone}  setTimezone = {setTimezone}/>
    </div>
  )
}


function ClockDisplay({time, timezone}){
    return (
        <h1>{time.toLocaleTimeString(undefined, {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: "2-digit",
                    timeZone: timezone ==='UTC' ? 'UTC': undefined
                    
                    })}
        </h1>
    )
}

function TimezoneSelector({timezone, setTimezone}){
    return(
        <div>
            <button onClick={()=> setTimezone('local')} disabled = {timezone === 'local'}>Local</button>
            <button onClick={()=> setTimezone('UTC')}  disabled = {timezone === 'UTC'}>UTC</button>
        </div>
    )
}

export default LiveClock