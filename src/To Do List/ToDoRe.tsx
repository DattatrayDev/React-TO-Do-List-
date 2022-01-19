import Todo from "./Todo";
import TodoItem from "./TodoItem";

const ToDoRe: React.FC<{items:Todo[]; onRemoveTodo:(id:string)=>void}>=(props)=>
{
    return(
        <ul>
            {props.items.map((item)=>(
                <TodoItem
                 key={item.id} 
                 text={item.text}
                 onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}/>
            ))}
        </ul>
    );
}
export default ToDoRe