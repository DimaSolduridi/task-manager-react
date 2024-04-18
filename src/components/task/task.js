import './task.css'
function TaskItem(props){

    return <div>
        <div className={props.task.isDone? 'faded':''}>
            <h2>{props.task.title} ({props.task.isDone ? 'DONE':'NOT DONE'})</h2>
            <h2>Due date: {props.task.dueDate}</h2>
            <h3>Subtitle : {props.task.subtitle}</h3>
            <img src={props.task.image} width={'100%'}/>
            <p>Description : {props.task.description}</p>
        </div>
        <button onClick={()=>props.deleteItem(props.task.id)}>Delete</button>
    </div>
}

export default TaskItem