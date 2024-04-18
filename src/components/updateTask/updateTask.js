import { useState } from "react";

function UpdateTask(props){


    const [task, updateTask] = useState(props.task);
    let [showEditor,setShowEditor]=useState(false);

    const onChange = (e)=>{

        let updated = {...task};
        updated[e.target.name] = e.target.value;
        updateTask(updated);
    }


    return <div>
        <button onClick={()=>setShowEditor(!showEditor)}>Show editor</button>
        {showEditor?<div>
            Title : <input type='text' value={task.title} name="title" onChange={onChange} />
            Subtitle : <input type='text' value={task.subtitle} name="subtitle" onChange={onChange} />
            Image : <input type='text' value={task.image} name="image" onChange={onChange} />
            Description : <input type='text' value={task.description} name="description" onChange={onChange} />
            Due date: <input type='date' value={task.dueDate} name="dueDate" onChange={onChange} />
            Is done : <input type='text' value={task.isDone} name="isDone" onChange={onChange} />

            <button onClick={() => props.onUpdate(task)}>Update</button>    
        </div> : null}
      
    </div>

}


export default UpdateTask;