import { useState } from "react";
function ToDoItems(props){
    const [isDone , setisDone]=useState(false);
    function handleChange(){
        setisDone(prevValue =>{
       return !prevValue;
        })
    }
 
    return (
        <div 
        onClick={handleChange}
        onDoubleClick={() =>{
            props.onChecked(props.id)
        }
       }
        >
          <li style={{textDecoration : isDone ? "line-through": 'none'}}>{props.text}</li>
        </div>
    )       
}

export default ToDoItems;

