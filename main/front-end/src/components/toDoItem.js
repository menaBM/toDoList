export default function ToDoItem(props){
    return (
    <section className ="task" id = {props.id} key = {props.id}>
        <p className = "author" key = {props.id + "1"}>Name:   {props.author}</p>
        <p className = "taskDes" key = {props.id + "2"}>Task:   {props.task}</p>
        <p className = "date" key = {props.id + "3"}>{props.date === "Not Applicable" ? "" : "Due:  " + props.date}</p>
    </section>
    )  
}

document.addEventListener("click",(e) => {
    if (e.target.matches(".task,.author,.taskDes,.date")){
        const task = e.target.closest(".task");
        deleteTask(task)
    }
})

async function deleteTask(task){
    task.remove();
    const response = await fetch(`http://localhost:3001/task/delete/${task.id}`, {
        method: "PUT"
    })
}