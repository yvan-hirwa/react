import React from 'react'

function ControlledInput() {
    const [username, setUsername] = React.useState('')
    const length = username.length

    function handleUsername(e) {
      // const {type, value} = e.target
      console.log(e)

      setUsername(e.target.value)
    }

  return (
    <div>
    <input type="text" value={username} onChange={e => handleUsername(e)} />
    <p>{length}/12</p>
    <p>
        {length<3 ? 'Too Short': length<=12 ? 'Looks good': 'Too Long'}
    </p>
    </div>
  )
}

export default ControlledInput