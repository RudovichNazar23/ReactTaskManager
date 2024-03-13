function NewTaskForm({ addTask }){
    const onSubmitHandler = (event) => {
        if(!event.target.newTaskTitle.value) return;

        event.preventDefault();
        addTask(event.target.newTaskTitle.value);
        event.target.newTaskTitle.value = "";
    }


    return (
        <form className="container d-flex flex-row p-0" 
              onSubmit={onSubmitHandler}
        >
            <input className="form-control m-2" placeholder="Add new task" name="newTaskTitle" defaultValue={""}/>
            <button className="btn p-0 m-1">
                <img src="/add.png" />
            </button>
        </form>
    );
};


export default NewTaskForm;