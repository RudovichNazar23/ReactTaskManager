function AddStepForm({ addStep }){

    const onAddStep = (event) => {
        event.preventDefault();
        if(!event.target.stepTitle.value) return;
        addStep(event.target.stepTitle.value);
        event.target.stepTitle.value = "";
    };

    return (
        <form className="d-flex flex-row justify-content-around"
              onSubmit={onAddStep}
        >
            <input type="text" className="form-control" placeholder="Type step title" name="stepTitle"/>
            <button className="btn btn-success align-self-end m-1">
                Add
            </button>
        </form>
    );
};


export default AddStepForm;