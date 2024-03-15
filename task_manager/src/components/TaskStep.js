import { useState } from "react";

import EditStepForm from "./EditStepForm";

function TaskStep({ step, deleteStep, updateStep }){
    const [showEditStepForm, setEditStepForm] = useState(false);

    const onDeleteStep = (event) => {
        event.preventDefault();
        deleteStep(step.id);
    };

    return (
        <div className="d-flex flex-row justify-content-between m-1 p-2" style={{backgroundColor: "whitesmoke", width: 500}}>
            {showEditStepForm ? <EditStepForm step={step} updateStep={updateStep} setEditStepForm={setEditStepForm}/> : step.title}
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