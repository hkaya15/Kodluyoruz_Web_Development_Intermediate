import {useState,useEffect} from 'react';

function Header({setList,list, setComplete}){
    const [duty, setDuty]=useState("");
    useEffect(()=>{
      setDuty("")
    },[list])
    const onChangeInput=(e)=> {
      setDuty(e.target.value)
    }
    const onSubmit=(e)=>{
      e.preventDefault();
      if(duty === ""){
        return false;
      }
      setList([...list,{value: duty,class:false}])
      setComplete([...list,{value: duty,class:false}])
    }
   return <header>
        <h1>todos</h1>
        <form onSubmit={onSubmit}>
          <input className="new-todo" placeholder="What needs to be done?" autoFocus value={duty} onChange={onChangeInput}/>
        </form>
      </header>
}

export default Header;