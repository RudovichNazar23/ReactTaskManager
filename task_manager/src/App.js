import React from "react";
import './App.css';

import TaskList from "./components/TaskList";


function App() {
  return (
    <div className="container d-flex flex-column align-items-center m-auto">
        <h3 className="text-center p-3">Task Manager</h3>
        <TaskList/>
    </div>
  );
}

export default App;
