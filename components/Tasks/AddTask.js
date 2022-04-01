import React,{ useState } from "react";
import Card from "../shared/Card";

export default function AddTask({ handelAdd }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handelTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const handelDesChange = (e) =>{
        setDescription(e.target.value);
    };
    const handelSubmit= (e) => {
        e.preventDefault();
        if(title.length !==0 && description.trim().length > 10){
            const newTask ={
                title,
                description,
            };
            handelAdd(newTask);
            setTitle("");
            setDescription("");
        }
    }
    return (
    <Card>
    <form onSubmit={handelSubmit}>
    <h2>Add a Task to the Task List</h2>
    <div className="inputbox">
    <input onChange={handelTitleChange}
    type="text" placeholder="Task Title" value={title}/>
    <input onChange={handelDesChange}
    type="text" placeholder="Task Description" value={description}/>
    </div>
    <button className="btn">Add Task</button>
    </form>
    </Card>
    );
}