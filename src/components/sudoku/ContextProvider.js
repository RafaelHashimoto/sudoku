import React, { useState, useContext } from 'react';
import Context from './Context'

export const ContextProvider = ({children}) => {
  const [board, setBoard] = useState()

  const value = { board, setBoard }

  return(
    <Context.Provider>
      { children }
    </Context.Provider>
  )
}