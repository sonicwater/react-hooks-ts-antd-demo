import React, { useState, useEffect, useRef } from 'react'

const Counter = () => {
  const [count, setCount] = useState<number>(0)
  const countRef = useRef<number>(count)

  useEffect(() => {
    countRef.current = count
  })

  const handleCount = () => {
    setTimeout(() => {
      alert('current count: ' + countRef.current)
    }, 3000);
  }

  return (
    <div>
      <p>pre count: { countRef.current }</p>
      <p>current count: { count }</p>
      <button onClick={() => setCount(count + 1)}>加</button>
      <button onClick={() => handleCount()}>弹框显示</button>
      <br /><br />
    </div>
  )
}
export default Counter