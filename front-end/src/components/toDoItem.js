export default function ToDoItem(props){
    

    return (
    <section className ="task" id = {props.id} >
        <p className = "author" key = "1">{props.author}</p>
        <p className = "taskDes" key ="2">{props.task}</p>
        <p className = "date" key = "3">{props.date}</p>
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
    console.log(task.id);
    const response = await fetch(`http://localhost:3001/task/delete/${task.id}`, {
        method: "PUT"
    })


}