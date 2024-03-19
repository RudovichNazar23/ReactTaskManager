import { useState } from "react";

import EditStepForm from "./EditStepForm";
import StepButton from "./StepButton";

function TaskStep({ step, deleteStep, updateStep, setStepIsDone, moveStepBack, moveStepForward }){
    const [showEditStepForm, setEditStepForm] = useState(false);

    const { isDone } = step;

    const onDeleteStep = (event) => {
        event.preventDefault();
        deleteStep(step.id);
    };

    const onSetStepIsDone = (event) => {
        setStepIsDone(step, !isDone);
    };

    const onMoveStepBack = (event) => {
        event.preventDefault();
        moveStepBack(step);
    };

    const onMoveStepForward = (event) => {
        event.preventDefault();
        moveStepForward(step);
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
                <StepButton icon={"/upload.png"} onCLick={onMoveStepBack}/>
                <StepButton icon={"/down-chevron.png"} onCLick={onMoveStepForward}/>
                <StepButton icon={"/delete.png"} onCLick={onDeleteStep}/>
                <StepButton icon={"/pencil.png"} onCLick={() => setEditStepForm(!showEditStepForm)}/>
            </div>
        </div>
    );
};


export default TaskStep;