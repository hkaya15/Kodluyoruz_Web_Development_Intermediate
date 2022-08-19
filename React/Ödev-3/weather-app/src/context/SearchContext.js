import {createContext, useContext, useState} from "react";

export const SearchContext = createContext();

export const SearchProvider = ({children}) =>{
    const [searchVal, setSearchVal]=useState("");

    const values={searchVal,setSearchVal}
    return <SearchContext.Provider value={values}>{children}</SearchContext.Provider>
}

export const useSearch = () => useContext(SearchContext);

