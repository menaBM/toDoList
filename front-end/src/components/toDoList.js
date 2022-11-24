import React from 'react';
import ToDoItem from './toDoItem';


export default function ToDoList(props){
    return <div>
            {props.tasks.map((item, index)=>{
                <ToDoItem task = {item.task} author = {item.author} key = {index} date = {item.date}/>
            })}
    </div>
}