import React from 'react';
import {useState} from "react";
import AddTask from "../Tasks/AddTask";
import TaskData from "../Tasks/TaskData";
import TaskForm from "../Tasks/TaskForm";
import SearchTask from "../Tasks/SearchTask";

export default function HomePage() {

const [taskList, setTaskList] = useState(TaskData);
  const [search, setSearch] = useState("");

  const checkTask = (id) => {
    setTaskList(
      taskList.map((task) => 
      task.id ==id ? {...task, checked: !task.checked} : task
      )
    );
    
  };
  const addTask = (newTask) =>{
    setTaskList([newTask, ...taskList]);
  };
  const deleteTask = (id) => {
   setTaskList(taskList.filter((task) => task.id !== id));
  };
        
  return (
  <div className="container">
  <h1>Welcome to Task Manager</h1>
  <AddTask handelAdd={addTask}/>
  <SearchTask search={search} setSearch={setSearch}/>
  <TaskForm taskList={taskList.filter((task) =>
  task.title.toLowerCase().includes(search.toLowerCase())
  )} 
  
  handelDelete={deleteTask}
  handelCheck={checkTask} />
  
  </div>
  );
}
  
