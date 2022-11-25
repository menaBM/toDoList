import { useState } from "react"

export default function Form (props){
    const [author, setAuthor] = useState()
    const [task, setTask] = useState()
    const [date, setDate] = useState()
    
    async function submitHandler(event){
        event.preventDefault()
        const data = { "authorName":author, "task":task, "date":date};
        props.setAllTasks(props.allTasks + 1)
        const response = await fetch("http://localhost:3001/task/new",{
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(data)
        })
        // const data = await response.json();
        }

    return (
        <div id="formContainer" key ="form">
            <form onSubmit={submitHandler}>
                <h2>Write your tasks!</h2>
                <input placeholder="Name..." onChange={(event) => setAuthor(event.target.value) } key = "a"/>
                <input placeholder="Task Description..." onChange= {(event)=> setTask(event.target.value)} key ="b"/>
                <input type = "date" placeholder="Complete By Date..." onChange= {(event)=>setDate(event.target.value)} key = "c"/>
                <button id="createItButton"  type="submit">Create it!</button>
            </form>
        </div>
    )}