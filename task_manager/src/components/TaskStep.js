import { useState } from "react";

import EditStepForm from "./EditStepForm";

function TaskStep({ step, deleteStep, updateStep, setStepIsDone }){
    const [showEditStepForm, setEditStepForm] = useState(false);

    const { isDone } = step;

    const onDeleteStep = (event) => {
        event.preventDefault();
        deleteStep(step.id);
    };

    const onSetStepIsDone = (event) => {
        setStepIsDone(step, !isDone);
    };

    return (
        <div className="d-flex flex-row justify-content-between m-1 p-2" style={{backgroundColor: "whitesmoke", width: 500}}>
            {
                showEditStepForm ? 
                    <EditStepForm step={step} updateStep={updateStep} setEditStepForm={setEditStepForm}/> 
                : 
                    <div className="d-flex flex-row ">
                        <input type="checkbox" onChange={onSetStepIsDone} checked={isDone}/>  
                        <div className="m-1">
                            {
                                step.isDone ? (<del>{step.title}</del>) : (step.title)
                            }
                        </div>
                    </div>
            }
            <div>
                <a className="m-1 p-1" href="#" onClick={onDeleteStep}>
                    <img src="/delete.png" />
                </a>
                <a className="m-1 p-1" href="#" onClick={() => setEditStepForm(!showEditStepForm)}>
                    <img src="/pencil.png"/>
                </a>
            </div>
        </div>
    );
};


export default TaskStep;