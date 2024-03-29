

function TodoList({ wholeList, setList , complete, setComplete}) {

  const deleteItem = (key) => {
    complete.map((e) =>{
      if (e === key) {
        const index = complete.indexOf(e);
        complete.splice(index, 1)
        setList([...complete])
        setComplete([...complete])
      }
    })
   
  }

  return <section className="main">
    <input className="toggle-all" type="checkbox" /> 
    <label htmlFor="toggle-all">Mark all as complete</label>

    <ul className="todo-list">
      {wholeList.map((key, i) => {
        return <li key={i} className={key.class === false ? "" : "completed"}>
          <div className="view">
            <input className="toggle" type="checkbox" checked={key.class} onChange={() => {
            
            
                wholeList[i].class = !wholeList[i].class;
                setList([...wholeList])
                setComplete([...wholeList])
               
                
             
            }} />
            <label>{key.value}</label>
            <button className="destroy" onClick={() =>{
              deleteItem(key)
              
            }}></button>
          </div>
        </li>
      })}
    </ul>
  </section>
}


export default TodoList;
