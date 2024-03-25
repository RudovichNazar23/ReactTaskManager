import { useState } from "react";

import TaskHeader from "./TaskHeader";
import TaskSteps from "./TaskSteps";
import ShowStepsButton from "./ShowStepsButton";
import StepProgress from "./StepProgress";
import StepStripe from "./StepStripe";


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
        <div className="card p-3 m-1" style={{width: 600}}>
            <div className="d-flex flex-row justify-content-between">
                <div className="d-flex flex-row">
                    <ShowStepsButton onClick={showTaskSteps} showSteps={showSteps} />
                    <TaskHeader task={task} isEditable={isEditable} setIsEditable={setIsEditable} editTask={editTask}/>
                </div>
                <div className="">
                    <StepProgress task={task} />
                </div>
            </div>
            <div className="d-flex flex-row align-self-end justify-content-end" style={{width: 200, float: "right"}}>
                <a href="#" className="m-2" onClick={() => setIsEditable(() => !isEditable)}>Edit</a>
                <a href="#" className="m-2" onClick={onDeleteTask}>Delete</a>
            </div>
            <TaskSteps showSteps={showSteps} task={task} setTasks={setTasks}/>
            <StepStripe task={task} />
        </div>
    );
};


export default Task;