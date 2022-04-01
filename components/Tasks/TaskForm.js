import Task from "../Tasks/Task";

export default function TaskForm({ taskList, handelDelete }) {
   if(!taskList || taskList.length === 0){
       return <p>No Tasks</p>;
   }
    
    

    return (
        <div>
            {taskList.map((task) =>(
                <Task key={task.id} 
                id={task.id} 
                title={task.title} 
                description={task.description}
                 handelDelete={handelDelete}
                 checked={task.checked}
                 />
            ))}
            
        </div>
    );
}
