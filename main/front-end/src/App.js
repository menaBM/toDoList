import './App.css';
import Form from './components/form';
import {useEffect, useState} from "react"
import ToDoList from './components/toDoList';

function App() {
  const [form, setForm] = useState()
  const [allTasks, setAllTasks] = useState(0)
  const [data, setData] = useState([])
  const [dates, setDates] = useState([])
  const [users, setUsers] = useState([])
  const [userData, setUserData] = useState([])
  const [dateData, setDateData] = useState([])
  // data is passed to to do list, all tasks is a fetch request when the form is updated 
  
  useEffect(()=>{
    fetch("http://localhost:3001/task/order")
    .then(res => res.json())
    .then(res => {
      setData(res.task)
    })
  },[allTasks] )

  async function getByDate(event){
    if (event.target.value){
      fetch(`http://localhost:3001/task/allTasks/${event.target.value}`)
      .then(res => res.json())
      .then(res => {
        setDateData(res.task)
        setData(res.task)
      })
    }else{
      setDateData([])
      if (userData.length >0){
        setData(userData)
      }else{
        setAllTasks(allTasks + 1)
      }
    }
  }

  useEffect(()=>{
    fetch(`http://localhost:3001/user/`)
    .then(res => res.json())
    .then(res => {
      let arr = []
        res.userName.map((user)=>{
        arr.push(user.userName)
      })
      setUsers(arr)
    })
  }, [allTasks])

  async function getByName(event){
    if (event.target.value !== "true"){
      fetch(`http://localhost:3001/user/${event.target.value}/tasks/`)
      .then(res => res.json())
      .then(res => {
        setData(res.task)
        setUserData(res.task)
      })
  }else{
    setUserData([])
    if (dateData.length >0){
      setData(dateData)
    }else{
      setAllTasks(allTasks + 1)
    }
  }
  }

  useEffect(()=>{
    // console.log(dateData, userData)
    if (userData.length > 0 && dateData.length > 0){
      // console.log(dateData, userData)
    let arr = []
    userData.forEach((item)=>{
      dateData.forEach((task)=>{
        if (item.id === task.id){
          arr.push(item)
        }
      })
    })
    setData(arr)
  }
  }, [userData, dateData])

  return (
    <div className="App">
      <header>
        <h1>☆ The MIMB To Do List ☆</h1>
      </header>
      <main>
        <section className = "filterContainer">
            <h2>filter by:</h2>
            <section id = "date" key = "1">
              <p>date:</p>
              <input type="date" onChange = {getByDate}></input>
            </section>
            <section id = "author" key = "2">
              <p>author:</p>
              <select name="users" id="users"  onChange={getByName}>
                <option defaultValue="select an author" value>select an author</option>
                {users.map((user, index)=>{
                  return (
                  <option key = {index} value={user}>{user}</option>
                  )
                })}
              </select>
            </section>
          </section>
          <section className = "mainBox" key = "3">
            <Form allTasks = {allTasks} setAllTasks = {setAllTasks} />
            <ToDoList tasks = {data}/>
        </section>
        
      </main>
    </div>
  );
}

export default App;