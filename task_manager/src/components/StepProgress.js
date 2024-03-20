
function StepProgress({ task }){
    const { steps } = task;

    const doneSteps = steps.filter((step) => step.isDone === true);

    const progress = (doneSteps.length / steps.length) * 100

    return(
        <div>
            <h4 className="" style={{color: "#3366ff"}}>
                {progress} %
            </h4>
        </div>
    );
};


export default StepProgress;