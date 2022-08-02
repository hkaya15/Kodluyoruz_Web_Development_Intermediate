import Header from '../Header/Header';
import TodoList from "../List/Todolist";
import Footer from "../Footer/Footer";
import {useState} from "react";

function Main(){
  const [todoList,setList]=useState([{value:"Learn React", class:false}]);
  const [complete,setCompleteList]=useState([{value:"Learn React", class:false}]);
    return <section className="todoapp">
    <Header setList={setList} list={todoList} setComplete={setCompleteList}/>
    {/* Main */}
    <TodoList wholeList={todoList} setList={setList} complete={complete}  setComplete={setCompleteList}/>  
    {/* Footer */}
    <Footer wholeList={todoList} setList={setList} complete={complete} setComplete={setCompleteList}/>
  </section>
}

export default Main;