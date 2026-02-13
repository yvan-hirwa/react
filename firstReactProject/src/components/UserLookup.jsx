import React, { useState, useEffect } from 'react'

function UserLookUp() {

    const [query, setQuery] = useState('')
    const [status, setStatus] = useState('idle')
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    function validateInput(input){
        const number = input.value
        setQuery(number)
    }

   useEffect(()=>{
    if(!query){
        setStatus('idle')
        setUser(null)
        setError(null)
        return 
    }
    else if(!(parseInt(query) >= 1 && parseInt(query) <=10)){
        setStatus('error')
        setError('Input should be a number between 1 and 10')
        setUser(null)
        return 
    }
    else{
        setStatus('loading')
        setError('')
        fetch(`https://jsonplaceholder.typicode.com/users/${query}`)
            .then(data => data.json())
            .then(user => {
                setUser(user)
                setStatus('success')
            })
            .catch(error => {
                setError(error.message)
                setStatus('error')
            })
    }
   },[query])

    

  return (
    <div>
        <div>
            <input type="text" placeholder='Enter user id (1-10)' onChange={(e)=> validateInput(e.target)}  />
        </div>
        <div>
            {status === 'idle' ? 'Type an id to search':
            status === 'loading' ? 'Loading ...' : 
            status === 'error' ? error :
            status  === 'success' ? <div><p>{user.name}</p> <p>{user.email}</p></div> : ''
            }  
        </div>
    </div>
  )
}

export default UserLookUp