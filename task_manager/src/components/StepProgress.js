
function StepProgress({ task }){
    const { steps } = task;
    
    let progress = 0;

    if(steps.length > 0){
        const doneSteps = steps.filter((step) => step.isDone === true);
        progress = (doneSteps.length / steps.length) * 100
    }
    return(
        <div>
            <h4 className="" style={{color: "#3366ff"}}>
                {progress} %
            </h4>
        </div>
    );
};


export default StepProgress;