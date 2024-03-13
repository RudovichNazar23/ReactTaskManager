function TaskHeader({ task, isEditable,  setIsEditable, editTask }){
    const { title, id } = task

    const onSubmitHandler = (event) => {
        event.preventDefault();
        editTask(id, event.target.title.value);
        setIsEditable(false);
    };

    if(isEditable){
        return (
            <div>
                <form className="container d-flex flex-row justify-content-between"
                      onSubmit={onSubmitHandler}
                >
                    <input defaultValue={title} className="form-control"
                           name="title"
                    />
                    <button className="btn btn-info m-2">
                        Edit
                    </button>
                </form>
            </div>
        );
    }


    return (
        <div className="card-title"><h5>{title}</h5></div>
    );
};

export default TaskHeader;