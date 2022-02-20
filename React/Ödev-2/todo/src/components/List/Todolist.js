
function TodoList({wholeList, setList}){
    
    return <section className="main">
          <input className="toggle-all" type="checkbox"/>
          <label htmlFor="toggle-all">Mark all as complete</label>

          <ul className="todo-list">
            {wholeList.map((key,i)=>{
              return <li key={i} className={key.class === false ? "" : "completed"}>
                <div className="view">
                  <input className="toggle" type="checkbox" onChange={()=>{
                    wholeList[i].class=!wholeList[i].class;
                    setList([...wholeList])
                  }}/>
                  <label>{key.value}</label>
                  <button className="destroy"></button>
                </div>
              </li>
            })}
          </ul>
      </section>
}


export default TodoList;
