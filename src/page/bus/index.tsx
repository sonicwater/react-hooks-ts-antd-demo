import React from "react";

import { useRouteMatch } from 'react-router';

interface PropsMenu {
  
}

export const Bus1: React.FC<any> = (props) => {
  const match = useRouteMatch();
  return (
    <div>
      Bus1 
      {JSON.stringify(match)}
    </div>
  )
}

export const Bus2: React.FC<any> = (props) => {
  const match = useRouteMatch();
  return (
    <div>
      Bus2 
      {JSON.stringify(match)}
    </div>
  )
}

export const Bus3: React.FC<any> = (props) => {
  return (
    <div>
      Bus3
    </div>
  )
}

export const Bus4: React.FC<any> = (props) => {
  return (
    <div>
      Bus4
    </div>
  )
}

