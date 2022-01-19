
import './App.css';
// import { LoggedIn } from './Components/State/LoggedIn';
// import {Greet} from './Components/Greet'
// // import {Person} from './Components/person'
// import {PersonList} from './Components/PersonList'
// import {Status} from './Components/Status'
// import {Heading} from './Components/Heading'
// import {Oscar} from './Components/Oscar'
// import { Button } from './Components/Button';
// import {Input} from './Components/Input'
// import { Container } from './Components/Container';
// import Profile from './Components/State/Profile'
import ToDoRe from './To Do List/ToDoRe'
import Todo from './To Do List/Todo';
import NewTodo from './To Do List/NewTodo';
import {useState} from 'react';
function App() {
  const [todos, setTodos]=useState<Todo[]>([]);

  const addTodoHandler=(todoText:string)=>{
    const newTodo=new Todo(todoText);

    setTodos((prevTodos)=>{
      return prevTodos.concat(newTodo);
      
    });
  };

  const removeTodoHandler=(todoId:string)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=> todo.id !== todoId)
      
    });
  };
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
        <ToDoRe items={todos} onRemoveTodo={removeTodoHandler}/>
    </div>
  )
}

export default App;
