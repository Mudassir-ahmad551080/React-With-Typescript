import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState<number>(0);
  return (
    <div>
        <h1>Counter: {count}</h1>
        <button className='bg-pink-600 rounded-md px-2 py-1 text-center cursor-pointer' onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Counter