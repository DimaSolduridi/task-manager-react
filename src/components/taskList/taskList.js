import HttpService from "../../services/httpService";
import TaskItem from "../task/task";
import { useEffect, useState } from "react";
import UpdateTask from "../updateTask/updateTask";
import './taskList.css';

function TaskList(){

    const [list, setList] = useState([]);
    

    let httpService = new HttpService();

    useEffect(() => {
        httpService.get()
            .then(response=>{
                let sorted=response.data.sort((a,b)=>new Date(a.dueDate)-new Date(b.dueDate));
                sorted.sort((a,b)=> a.isDone-b.isDone);
                setList(sorted);
            })
            .catch((error)=>console.log(error))
            
      }, [list]);


  

    const deleteItem = (id)=>{

        httpService.delete(id)
                   .then((response)=>{
                        let updated = list.filter(i=>i.id != id);
                        setList(updated);
                    })
                    .catch((error)=>console.log(error)) 
    }

    
    const updateItem = (item)=>{

        httpService.put(item)
                    .then(response=>{
                        let updated = [...list];
                        let index = updated.findIndex(i=>i.id===item.id);

                        updated[index] = item;
                        setList(updated);
                    })
    }

    const updateDoneStatus=(item)=>{
        let updated = [...list];
        let index = updated.findIndex(i=>i.id===item.id);
        updated[index].isDone = !updated[index].isDone;
        httpService.put(item)
        .then(response=>{
            setList(updated);
        })
        .catch((error)=>console.log(error)) 
    }

    const sortByDateAsecending=()=>{
        let sorted=[...list];
        sorted = this.sorted.sort((a,b)=>new Date(a.dueDate)-new Date(b.dueDate));
        setList(sorted);
    }

  

    return <div className="tasks">
        {list.map(task=><div key={task.id} className="task">
          <TaskItem task={task} deleteItem={deleteItem} ></TaskItem>   
          <button onClick={()=>updateDoneStatus(task)}>({task.isDone?'Undone':'Done'})</button>
          <UpdateTask task={task} onUpdate={updateItem}></UpdateTask>
        </div>)}
    </div>
}

export default TaskList;