import { useState } from "react";
import TaskModel from "../../models/task";
import HttpService from "../../services/httpService";
import { useNavigate} from "react-router-dom";

function NewTask(props){


    const [newTask, updateTask] = useState(new TaskModel);
    const [list, setList] = useState([]);
    let navigate = useNavigate()

    let httpService = new HttpService();

    const onChange = (e)=>{

        let updated = {...newTask};
        updated[e.target.name] = e.target.value;
        updateTask(updated);
    }

    const addItem = (newTask)=>{

        httpService.post(newTask)
                    .then(response=>{
                        setList([...list, response.data]);
                        navigate('/tasks');
                    })
                    .catch((error)=>console.log(error))
                }


    return <div>
        Title : <input type='text' value={newTask.title} name="title" onChange={onChange} />
        Subtitle : <input type='text' value={newTask.subtitle} name="subtitle" onChange={onChange} />
        Image : <input type='text' value={newTask.image} name="image" onChange={onChange} />
        Description : <input type='text' value={newTask.description} name="description" onChange={onChange} />
        Due date: <input type='date' value={newTask.dueDate} name="dueDate" onChange={onChange} />
        Is done : <input type='text' value={newTask.isDone} name="isDone" onChange={onChange} />

        <button onClick={() => addItem(newTask)}>Add task</button>
    </div>

}


export default NewTask;


    
