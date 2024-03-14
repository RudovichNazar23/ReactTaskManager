

function ShowStepsButton({ showSteps, onClick }){
    return (
        <a className="align-self-start" style={{marginRight: "20px"}} href="#" onClick={onClick}>
            {
                <img src={showSteps ? "/angle-small-up.png" : "angle-small-down.png"} />
            }
        </a>
    )
};


export default ShowStepsButton;