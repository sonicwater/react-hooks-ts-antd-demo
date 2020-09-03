import React, { useRef } from 'react'

const TextInput = () => {
  const inputEl = useRef<HTMLInputElement>(null)

  const onFocusClick = () => {
    if(inputEl && inputEl.current) {
      inputEl.current.focus()
    } 
  }

  return (
    <div>
      <input type="text" ref={inputEl}/>
      <button onClick={onFocusClick}>Focus the input</button>
    </div>
  )
}

export default TextInput