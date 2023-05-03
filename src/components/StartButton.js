import React from "react";
import Image from "./Image";
import startButtonImg from "../img/start_button.png"

class StartButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true
        }

        this.hideFunc = this.hideFunc.bind(this)
    }

    render () {
        return (<div className="startButton" style={{ display: this.state.active ? "block" : "none" }} onClick={this.hideFunc}>
            <Image image={startButtonImg} className={"startButtonImg"}/>
        </div>)
    }

    hideFunc() {
        this.setState({active: false})
    }
}

export default StartButton