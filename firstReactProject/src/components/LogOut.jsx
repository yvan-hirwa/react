import React, { useEffect, useState } from 'react'

function LogOut() {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [secondsRemaining, setSecondsRemaining] = useState(5)

    useEffect(()=> {
        if(!isLoggedIn) return;
            const id = setInterval(()=> setSecondsRemaining(prev => Math.max(0, prev-1)), 1000)
            return ()=> clearInterval(id)
        
    }, [isLoggedIn])

    useEffect(()=> {
        function handlePage(){
            setSecondsRemaining(5)
        }
        if(isLoggedIn){
            document.addEventListener('keydown', handlePage)
            document.addEventListener('mousemove', handlePage)
        }

        return ()=>{
            document.removeEventListener('keydown', handlePage)
            document.removeEventListener('mousemove', handlePage)
        }
    }, [isLoggedIn])

    useEffect(()=>{
        if(secondsRemaining===0) setIsLoggedIn(false)
    }, [secondsRemaining])

  return (
    <div>
        {secondsRemaining? <p>Logged in: {secondsRemaining} seconds remaining</p>: <p>Logged Out</p>}
    </div>
  )
}

export default LogOut