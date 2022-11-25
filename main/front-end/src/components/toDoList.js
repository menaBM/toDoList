import React from 'react';
import ToDoItem from './toDoItem';


export default function ToDoList(props){
    return <div className='toDoListBox' key = "list" >
            {props.tasks.map((item, index)=>{
                return ( 
                <>
                <ToDoItem task = {item.task} author = {item.authorName} key = {index} date = {item.date} id = {item.id}/>
                </>
                )
            })}
    </div>
}