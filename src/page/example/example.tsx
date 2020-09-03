import React, { useState, useEffect, useRef } from 'react'

type UserInfo = {
  name: string;
  age: number;
}

export const User:React.FC<UserInfo> = ({ name, age }) => {

  const [user,setUser] = useState<UserInfo>({ name, age });

  useEffect(()=>{
  	setUser({ name:'lily', age: 28 });
  },[]);

  return (
    <div className="App">
      <p>{ user.name }</p>
      <p>{ user.age }</p>
    </div>
  )
  
}

// const user = <User name='vortesnail' age={25} />