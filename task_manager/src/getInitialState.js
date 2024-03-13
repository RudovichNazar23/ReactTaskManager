import initialState from "./initialState";

function getInitialState(){
    return (
        JSON.parse(localStorage.getItem("task-manager-items-list")) || 
        initialState
    );
};


export default getInitialState;