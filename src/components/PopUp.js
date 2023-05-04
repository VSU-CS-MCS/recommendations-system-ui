import React from "react";
import Image from "./Image";
import Content from "./Content";
import backgroundImg from "../img/background.png"

class PopUp extends React.Component {
    render () {
        return (<div className={`popUp ${this.props.popUpIsActive ? "" : "hidden"}`}>
            <div className="backgroundDimming"></div>
            <div className="window">
                <Image image={backgroundImg} className={"backgroundImg"} />
                <Content hideFunc={this.props.hideFunc}/>
            </div>
        </div>)
    }
}

export default PopUp