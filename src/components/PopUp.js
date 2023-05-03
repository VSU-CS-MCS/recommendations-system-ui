import React from "react";
import Image from "./Image";
import backgroundImg from "../img/background.png"
import CloseButton from "./CloseButton";

class PopUp extends React.Component {
    render () {
        return (<div className={`popUp ${this.props.popUpIsActive ? "" : "hidden"}`}>
            <div className="backgroundDimming"></div>
            <div className="window">
                <Image image={backgroundImg} className={"backgroundImg"} />
                <div className="content">
                    <CloseButton onClick={this.props.hideFunc}/>
                </div>
            </div>
        </div>)
    }
}

export default PopUp