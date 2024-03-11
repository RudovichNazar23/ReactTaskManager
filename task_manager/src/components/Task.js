import TaskHeader from "./TaskHeader";


function Task({ task }){
    return (
        <div className="card p-3" style={{width: 600}}>
            <TaskHeader value={task.title} />
            <div className="d-flex flex-row align-self-end justify-content-end" style={{width: 200, float: "right"}}>
                <a href="#" className="m-2">Edit</a>
                <a href="#" className="m-2">Delete</a>
            </div>
        </div>
    )
};


export default Task;