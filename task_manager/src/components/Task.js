import { useState } from "react";

import TaskHeader from "./TaskHeader";


function Task({ task, editTask, deleteTask }){
    const [isEditable, setIsEditable] = useState(false);

    const onClick = (event) => {
        event.preventDefault();
        deleteTask(task.id);
    }

    return (
        <div className="card p-3" style={{width: 600}}>
            <TaskHeader task={task} isEditable={isEditable} setIsEditable={setIsEditable} editTask={editTask}/>
            <div className="d-flex flex-row align-self-end justify-content-end" style={{width: 200, float: "right"}}>
                <a href="#" className="m-2" onClick={() => setIsEditable(() => !isEditable)}>Edit</a>
                <a href="#" className="m-2" onClick={onClick}>Delete</a>
            </div>
        </div>
    );
};


export default Task;