import { useState, useEffect } from "react";

import Task from "./Task";
import NewTaskForm from "./NewTaskForm";

import getInitialState from "../getInitialState";

function TaskList() {
    const [tasks, setTasks] = useState(getInitialState);

    useEffect(
        () => {
            localStorage.setItem("task-manager-items-list", JSON.stringify(tasks));
        }, [tasks]
    );

    const addTask = (title) => setTasks(
        (oldTasks) => oldTasks.concat([{"id": Math.random() * 1000, "title": title, "steps": []}])
    );

    const editTask = (id, title) => setTasks(
        (oldTasks) => oldTasks.map(
            (task) => task.id === id ? {...task, title} : task
        )
    );

    const deleteTask = (id) => setTasks(
        (oldTasks) => oldTasks.filter((task) => task.id !== id)
    );  

    return (
        <div className="container d-flex flex-column align-items-center justify-content-between">
            {
                tasks && (
                    tasks.map(
                        (task) => <Task key={task.id} task={task} editTask={editTask} deleteTask={deleteTask} setTasks={setTasks}/>
                    )
                )
            }
            <div className="card p-3 mt-3" style={{width: 600}}>
                <NewTaskForm addTask={addTask} />
            </div>
        </div>
    );
}

export default TaskList;
