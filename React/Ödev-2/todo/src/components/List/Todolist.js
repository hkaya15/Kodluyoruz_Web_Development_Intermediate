function TodoList({wholeList}){
    return <section className="main">
          <input className="toggle-all" type="checkbox"/>
          <label htmlFor="toggle-all">Mark all as complete</label>

          <ul className="todo-list">
            {wholeList && wholeList.map((duty,index)=>{
              return <li key={index}>
                <div className="view">
                  <input className="toggle" type="checkbox"/>
                  <label>{duty}</label>
                  <button className="destroy"></button>
                </div>
              </li>
            })}
          </ul>
      </section>
}


export default TodoList;


function deneme(){
  return  <ul>
     {/* Completed*/}
     <li className="completed">
                <div className="view">
                  <input className="toggle" type="checkbox"/>
                  <label>Learn JavaScript</label>
                  <button className="destroy"></button>
                </div>
            </li>
            {/* NotCompleted */}
            <li>
              <div className="view">
                <input className="toggle" type="checkbox"/>
                <label>Learn React</label>
                <button className="destroy"></button>
              </div>
            </li>
            {/* NotCompleted*/}
            <li>
              <div className="view">
                <input className="toggle" type="checkbox"/>
                <label>Have a life!</label>
                <button className="destroy"></button>
              </div>
            </li>
  </ul>
}