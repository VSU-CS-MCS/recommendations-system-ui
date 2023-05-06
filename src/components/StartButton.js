import React from "react";
import Image from "./Image";
import startButtonImg from "../img/start_button.png"

class StartButton extends React.Component {
    render () {
        return (<div className={`startButton clickable ${this.props.popUpIsActive ? "hidden" : ""}`} onClick={this.props.showFunc}>
            <Image image={startButtonImg} className={"startButtonImg"}/>
        </div>)
    }
}

export default StartButton