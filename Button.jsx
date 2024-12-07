import React, { useState } from 'react'

function Button() {
  const [count, setCount] = useState(2)
  const handleIncrement = ()=>{
    setCount(count+2);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Button
