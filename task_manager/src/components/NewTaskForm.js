function NewTaskForm(){
    return (
        <form className="container d-flex flex-row p-0">
            <input className="form-control m-2" placeholder="Add new task"/>
            <button className="btn p-0 m-1">
                <img src="/add.png" />
            </button>
        </form>
    );
};


export default NewTaskForm;