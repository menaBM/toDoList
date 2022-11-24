import { useState } from "react"

export default function Form (props){
    const [author, setAuthor] = useState()
    const [task, setTask] = useState()
    const [date, setDate] = useState()
    
    async function submitHandler(){
        const response = await fetch("http://localhost:3000/new",{
            method: "POST",
            body: JSON.stringify({
                authorName: author,
                task: task,
                date: date
            })
        })
        const data = await response.json();
        }

    return (
        <form onSubmit={submitHandler}>
            <input placeholder="author" onChange={(event) => setAuthor(event.target.value) } />
            <input placeholder="task description" onChange= {(event)=> setTask(event.target.value)} />
            <input placeholder="complete by date" onChange= {(event)=>setImmediate(event.target.value)} />
            <button type="submit">create to do</button>
        </form>
    )}