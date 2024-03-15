function TaskStep({ step, deleteStep }){
    const onDeleteStep = (event) => {
        event.preventDefault();
        deleteStep(step.id);
    };

    return (
        <div className="d-flex flex-row justify-content-between m-1 p-2" style={{backgroundColor: "whitesmoke", width: 500}}>
            {step.title}
            <div>
                <a className="m-1 p-1 step-button" href="#" onClick={onDeleteStep}>
                    <img src="/delete.png" />
                </a>
            </div>
        </div>
    );
};


export default TaskStep;