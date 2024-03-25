
function StepStripe({ task }){

    const { steps } = task;
    console.log(steps)
    let progress = 0;

    if(steps.length > 0){
        const doneSteps = steps.filter((step) => step.isDone === true);
        progress = (doneSteps.length / steps.length) * 100;
    };

    const containerStyle = {
        backgroundColor: "#3366ff",
        width: `${progress}%`, 
        height: "10px",
    };

    return (
        <div style={containerStyle}/>
    )
};


export default StepStripe;