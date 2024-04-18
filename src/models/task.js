class TaskModel{
    constructor(id=0,title="",subtitle="",description="",image="",isDone=false,dueDate= new Date()){
        this.id=id;
        this.title=title;
        this.subtitle=subtitle;
        this.description=description;
        this.image=image;
        this.isDone=isDone;
        
        const year=dueDate.getFullYear();
        const month=dueDate.getMonth();
        const day=dueDate.getDay();
        this.dueDate= `${year}-${month}-${day}`;
    }
}
export default TaskModel;