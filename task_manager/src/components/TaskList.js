import Task from "./Task";
import NewTaskForm from "./NewTaskForm";

function TaskList({ tasks }){
    return (
        <div className="container d-flex flex-column align-items-center">
            {
                tasks && (
                    tasks.map(
                        (task) => <Task task={task} />
                    )
                )
            }
            <div className="card p-3 mt-3" style={{width: 600}}>
                <NewTaskForm />
            </div>
        </div>
    );
};


export default TaskList;