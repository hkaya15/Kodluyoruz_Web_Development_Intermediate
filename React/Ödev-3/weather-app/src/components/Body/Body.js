import React from 'react'

import { useResult } from '../../context/ResultContext';

import { useSearch } from '../../context/SearchContext';

import logo from '../../assets/gifs/body.gif'
import WeatherCard from '../Card/Card'

function Body() {
  const { arr } = useResult();
  const { searchVal } = useSearch();

  return (
    <>
      {arr.length > 0 && <h3>{searchVal}</h3>}
      <div className='Cards'>
        {arr.length > 0 ?

          arr.map((item, key) =>
         <WeatherCard item={item} key={key} mykey={key}/>
            )



          : <div>
            <h1>How Is Your Weather?</h1>
            <img src={logo} alt="waiting..."></img>
          </div>
        }

      </div>
    </>
  )
}


export default Body