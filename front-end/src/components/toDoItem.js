export default function ToDoItem(props){
    
    return (
    <section>
    <p>{props.author}</p>
    <p>{props.task}</p>
    <p>{props.date}</p>
    </section>
    )
}
