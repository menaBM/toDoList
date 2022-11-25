import './App.css';
import Form from './components/form';
import {useEffect, useState} from "react"
import ToDoList from './components/toDoList';

function App() {
  const [form, setForm] = useState()
  const [allTasks, setAllTasks] = useState(0)
  const [data, setData] = useState([])
  const [dates, setDates] = useState([])
  // data is passed to to do list, all tasks is a fetch request when the form is updated 
  useEffect(()=>{
    console.log("hello")
    fetch("http://localhost:3001/task")
    .then(res => res.json())
    .then(res => {
      setData(res.task)
    })
  },[allTasks] )

  async function getByDate(event){
    console.log("getting date", event.target.value)
    fetch(`http://localhost:3001/task/allTasks/${event.target.value}`)
    .then(res => res.json())
    .then(res => {
      setData(res.task)
    })
  }

  return (
    <div className="App">
      <header>
        <h1>The MIMB To Do List</h1>
      </header>
      <main>
        <Form allTasks = {allTasks} setAllTasks = {setAllTasks} />
        <ToDoList tasks = {data}/>
        <section >
          <h2>filter by:</h2>
          <p>date:</p>
          <input type="date" onChange = {getByDate}/>
        </section>
      </main>
    </div>
  );
}

export default App;
