import React from "react";
import Image from "./Image";
import backgroundImg from "../img/background.png"
import CloseButton from "./CloseButton";

class PopUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }

        this.hideFunc = this.hideFunc.bind(this)
    }

    render () {
        return (<div className="popUp" style={{ display: this.state.active ? "block" : "none" }}>
            <div className="backgroundDimming"></div>
            <div className="window">
                <Image image={backgroundImg} className={"backgroundImg"} />
                <div className="content">
                    <CloseButton onClick={this.hideFunc}/>
                </div>
            </div>
        </div>)
    }

    hideFunc() {
        this.setState({active: false})
    }
}

export default PopUp