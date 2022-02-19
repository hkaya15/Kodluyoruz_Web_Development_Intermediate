import Header from '../Header/Header';
import TodoList from "../List/Todolist";
import Footer from "../Footer/Footer";
import {useState} from "react";

function Main(){
  const [todoList,setList]=useState(["Learn React"])
    return <section className="todoapp">
    <Header setList={setList} list={todoList}/>
    {/* Main */}
    <TodoList wholeList={todoList}/>  
    {/* Footer */}
    <Footer/>
  </section>
}

export default Main;