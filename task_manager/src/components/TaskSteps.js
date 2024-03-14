import AddStepForm from "./AddStepForm";

function TaskSteps({ task, showSteps }){
    const { steps } = task;
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
                                        <div key={step.id} className="m-1 p-2" style={{backgroundColor: "whitesmoke", width: 500}}>
                                            {step.title}
                                        </div>
                                    )
                                }
                            )
                        )
                    }
                </div>
                <div className="container m-1">
                    <AddStepForm task={task}/>
                </div>
            </div>
        )
    );
};


export default TaskSteps;