import React,{useState, useRef} from 'react'

const Todo=()=>
{
    const inputRef=useRef<HTMLInputElement|null>(null)
    const[todoList, setTodoList]=useState<string[]>([])
    const addTodo=()=>{
        if(inputRef.current){
        const todo=inputRef.current.value
       setTodoList([...todoList, todo])
        }
    }
    return(
        <div>
            <input 
            ref={inputRef}
            type='text'
            placeholder='type todo'
            />
            <button onClick={addTodo}>Add todo</button>
            <ul>
                {
                    todoList.map(item=>{
                        return <li key={item}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Todo