import AddStepForm from "./AddStepForm";
import TaskStep from "./TaskStep";

function TaskSteps({ task, showSteps, setTasks }){
    let { steps } = task;

    const addStep = (stepTitle) => {
        const newTaskSteps = steps.push({"id": Math.random() * 1000, "title": stepTitle});
        setTasks(
            (oldTasks) => oldTasks.map(
                (oldTask) => oldTask.id === task.id ? {...task, newTaskSteps} : oldTask
            )
        )
    };

    const deleteStep = (stepId) => {
        steps = steps.filter((oldStep) => oldStep.id !== stepId);
        setTasks(
            (oldTasks) => oldTasks.map(
                (oldTask) => oldTask.id === task.id ? {...task, steps} : oldTask
            )
        )
    };

    const updateStep = (stepId, title) => {
        steps = steps.map((oldStep) => oldStep.id === stepId ? {...oldStep, title} : oldStep);
        setTasks(
            (oldTasks) => oldTasks.map(
                (oldTask) => oldTask.id === task.id ? {...task, steps} : oldTask
            )
        );
    };

    return (
        showSteps && (
            <div className="container d-flex flex-column">
                <div className="d-flex flex-column align-items-center justify-content-around m-1"
                >
                    {
                        steps && (
                            steps.map(
                                (step) => {
                                    return (
                                        <TaskStep step={step} key={step.id} deleteStep={deleteStep} updateStep={updateStep}/>
                                    )
                                }
                            )
                        )
                    }
                </div>
                <div className="container m-1">
                    <AddStepForm addStep={addStep}/>
                </div>
            </div>
        )
    );
};


export default TaskSteps;