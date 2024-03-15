
function EditStepForm({ step, updateStep, setEditStepForm }){
    const { title } = step;

    const onUpdateStep = (event) => {
        event.preventDefault();
        if(!event.target.title.value) return;
        updateStep(step.id, event.target.title.value);
        setEditStepForm(false);
    }

    return (
        <form className="d-flex flex-row jusitfy-cotent-between"
              onSubmit={onUpdateStep}
        >
            <input type="text" className="form-control" defaultValue={title} name="title"/>
            <button className="btn btn-info m-1 p-1">
                Update step
            </button>
        </form>
    )
};

export default EditStepForm;