
function StepStripe({ task }){

    const { steps } = task;

    const doneSteps = steps.filter((step) => step.isDone === true);

    const progress = (doneSteps.length / steps.length) * 100;

    const containerStyle = {
        backgroundColor: "#3366ff",
        width: `${progress - 10}%`, 
        height: "10px",
    };

    return (
        <div style={containerStyle}/>
    )
};


export default StepStripe;