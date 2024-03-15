import { useState } from "react";

import TaskHeader from "./TaskHeader";
import TaskSteps from "./TaskSteps";
import ShowStepsButton from "./ShowStepsButton";


function Task({ task, editTask, deleteTask, setTasks }){
    const [isEditable, setIsEditable] = useState(false);
    const [showSteps, setShowSteps] = useState(false);

    const onDeleteTask = (event) => {
        event.preventDefault();
        deleteTask(task.id);
    };

    const showTaskSteps = (event) => {
        event.preventDefault();
        setShowSteps(!showSteps);
    };

    return (
        <div className="card p-3" style={{width: 600}}>
            <div className="d-flex flex-row">
                <ShowStepsButton onClick={showTaskSteps} showSteps={showSteps} />
                <TaskHeader task={task} isEditable={isEditable} setIsEditable={setIsEditable} editTask={editTask}/>
            </div>
            <TaskSteps showSteps={showSteps} task={task} setTasks={setTasks}/>
            <div className="d-flex flex-row align-self-end justify-content-end" style={{width: 200, float: "right"}}>
                <a href="#" className="m-2" onClick={() => setIsEditable(() => !isEditable)}>Edit</a>
                <a href="#" className="m-2" onClick={onDeleteTask}>Delete</a>
            </div>
        </div>
    );
};


export default Task;