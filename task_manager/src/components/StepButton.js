
function StepButton({ icon, onCLick }){
    return (
        <a className="m-1 p-1" href="#" onClick={onCLick}>
            <img src={icon} />
        </a>
    );
};

export default StepButton;