import React, { useEffect} from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { useSearch } from '../../context/SearchContext';
import { useResult } from '../../context/ResultContext';
import { sun,cloudy,rain } from '../../assets/icons';


function SearchBar() {
    const {searchVal, setSearchVal}= useSearch();
    const {results, setResults,weather,setWeather,data,setData} = useResult();
    let fec=0;

    useEffect(()=>{
         if(searchVal!==''){
            axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${searchVal}&limit=5&appid=${process.env.REACT_APP_API_KEY}`).then(res=>{
              //  console.log(res.data);
                setResults(res.data);
              });
              
      //  console.log("Search value: ",searchVal)
            }
       
  },[searchVal,setResults]);

  useEffect(()=>{
      const x= Object.values(results);
      if(x.length>0){
          //eslint-disable-next-line
        results.map((element,index) => {
            if(index===0){
              //  console.log(index, element.value,element.name , element.lat,element.lon);
                axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${element.lat}&lon=${element.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`).then(res=>{
                //console.log(res.data);
                setWeather(res.data);
                });
            }
            
        })
     //   console.log("Result value: ",results)
        
      }
       //eslint-disable-next-line 
  },[results])

  useEffect(()=>{
    const y= Object.values(weather);
    if(y.length>0){
     //  console.log("B:",weather.list)
       const z= Object.values(weather.list)
       while(data.length>0){
         data.pop();
       }
       z.forEach(element => {
           let vl=convertDate(element.dt)
           if(fec!==vl){
          //  console.log(vl)
          //eslint-disable-next-line
            fec=vl
           data.push(element)
           }
      
       });
       
       const x= Object.values(data)
       const sondata= x.map((element) => {
          // console.log("B:",(element.main).temp)
           return{
               day: convertDate(element.dt),
               icon: selectIcon(element.weather.map((item)=>item.main)),
               temp: (element.main).temp
           }
       });
      // console.log("DATA: ",sondata)
       setData(sondata)
       
    }
  },[weather])

  return (
      <div className='Select'>
    
    <TextField
                size='small'
                id="standard-bare"
                variant="outlined"
                label="Where are you ?"
                onChange={(e)=>{
                // console.log(e.target.value)
                }}
                onKeyDown={(e)=>{
                    if (e.key==='Enter'){
                       // console.log(e.target.value)
                        setSearchVal(e.target.value.toUpperCase())
                        e.target.value=""
                       e.preventDefault()
                        
                    }
                }}
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <ManageSearchIcon/>
                      
                    </IconButton>
                  ),
                }}
              /> 

                </div>
  )
}

function convertDate(unixTime){
    const date = new Date(unixTime*1000);
    return date.toLocaleDateString("tr-TR")
}

function selectIcon(value){
    for (const item of value) {
        if(item==='Clear') return sun;
        if(item==='Clouds') return cloudy;
        if(item==='Rain') return rain;
    }
}

export default SearchBar



