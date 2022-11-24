import './App.css';
import Form from './components/form';
import {useEffect, useState} from "react"
import ToDoList from './components/toDoList';

function App() {
  const [form, setForm] = useState()
  const [allTasks, setAllTasks] = useState()
  const [data, setData] = useState()
  // data is passed to to do list, all tasks is a fetch request when the form is updated 
  // useEffect(()=>{
    // fetch("http://localhost:3000/")
  //   .then(res => res.json())
  //   .then(res => setTasks(res.tasks))

  // },[] )

  return (
    <div className="App">
      <Form  />
      <ToDoList tasks = {data}/>
    </div>
  );
}

export default App;
