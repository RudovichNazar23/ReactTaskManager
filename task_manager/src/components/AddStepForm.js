function AddStepForm(){
    return (
        <form className="d-flex flex-row justify-content-around">
            <input type="text" className="form-control" placeholder="Type step title" name="stepTitle"/>
            <button className="btn btn-success align-self-end m-1">
                Add
            </button>
        </form>
    );
};


export default AddStepForm;