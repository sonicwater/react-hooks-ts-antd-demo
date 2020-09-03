import React, { useContext } from 'react'

const ColorContext = React.createContext<string>('')

const Example7 = () => {
  return (
    <ColorContext.Provider value='#cbf145'>
      <Father />
    </ColorContext.Provider>
  )
}

const Father = () => {
  return (
    <Child />
  )
}

const Child = () => {
  const color = useContext(ColorContext)
  return (
    <div style={{ backgroundColor: color }}>Background color is: { color }</div>
  )
}

export default Example7