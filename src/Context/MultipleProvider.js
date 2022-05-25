import { createContext, useContext, useState } from "react";
const MultipleContext=createContext();
const useMultipleContext=()=>useContext(MultipleContext);
const MultipleContextProvider=({children})=>{
  function getEncodedToken(){
      return localStorage.getItem("token");
  }
  const[token,setToken]=useState(getEncodedToken);
return(
    <MultipleContext.Provider value={{getEncodedToken,setToken,token }}>
    {children}
    </MultipleContext.Provider>
)
}
export {useMultipleContext,MultipleContext};