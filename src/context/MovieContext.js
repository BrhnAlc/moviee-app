import React, {  createContext } from 'react'
 

export const MovieContext =createContext();

const MovieContextProvider = ({Children}) => {



  const values={}
  return (
    <MovieContext.Provider value={values}>{Children}</MovieContext.Provider>
  )
}

export default MovieContextProvider;