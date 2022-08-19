import { createContext,useState, useContext } from "react";


const ResultContext = createContext();

export const ResultProvider = ({children})=>{
    const [results,setResults]=useState([]);
    const [weather,setWeather]=useState([]);
    const [data,setData]=useState([]);
    const arr=Array.from(data);
    const values={results,setResults,weather,setWeather,data,setData,arr}
    return <ResultContext.Provider value={values}>{children}</ResultContext.Provider>
}

export const useResult = () => useContext(ResultContext);