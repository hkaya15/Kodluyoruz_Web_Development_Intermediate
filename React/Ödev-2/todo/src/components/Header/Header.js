import {useState,useEffect} from 'react';

function Header({setList,list}){
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
      setList([...list,duty])
    }
   return <header>
        <h1>todos</h1>
        <form onSubmit={onSubmit}>
          <input className="new-todo" placeholder="What needs to be done?" autoFocus value={duty} onChange={onChangeInput}/>
        </form>
      </header>
}

export default Header;