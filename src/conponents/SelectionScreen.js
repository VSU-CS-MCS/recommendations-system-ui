import React from "react";
import HintsRow from "./HintsRow";

class SelectionScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeEmotion: "SadHappy"
        };

        this.backFunc = this.backFunc.bind(this)
        this.nextFunc = this.nextFunc.bind(this)
    }

    render() {
        return (<div className="selectionScreen">
            <div className="titleContainer">
                <div className="title">EMOTION TEST</div>
            </div>

            <HintsRow id="hr1" leftHint="sad" rightHint="happy" className={this.state.activeEmotion === "SadHappy" ? "" : "hide"} />
            <HintsRow id="hr2" leftHint="cheerful" rightHint="calm" className={this.state.activeEmotion === "CheerfulCalm" ? "" : "hide"} />
            <HintsRow id="hr3" leftHint="terrible" rightHint="pacifying" className={this.state.activeEmotion === "TerriblePacifying" ? "" : "hide"} />
            <HintsRow id="hr4" leftHint="disgusting" rightHint="pleasant" className={this.state.activeEmotion === "DisgustingPleasant" ? "" : "hide"} />

            <div className="selectionBar">
                <button id="sb1" className="selectionButton"></button>
                <button id="sb2" className="selectionButton"></button>
                <button id="sb3" className="selectionButton"></button>
                <button id="sb4" className="selectionButton"></button>
                <button id="sb5" className="selectionButton"></button>
            </div>

            <div className="buttonContainer">
                <button className="navigationButton" onClick={this.backFunc}>
                    BACK
                </button>
                <button className="navigationButton" onClick={this.nextFunc}>
                    NEXT
                </button>
            </div>
        </div>)
    }

    backFunc() {
        if (this.state.activeEmotion === "SadHappy") {

        } else if (this.state.activeEmotion === "CheerfulCalm") {
            this.setState({activeEmotion: "SadHappy"})
        } else if (this.state.activeEmotion === "TerriblePacifying") {
            this.setState({activeEmotion: "CheerfulCalm"})
        } else {
            this.setState({activeEmotion: "TerriblePacifying"})
        }
        console.log(this.state.activeEmotion)
    }

    nextFunc() {
        if (this.state.activeEmotion === "SadHappy") {
            this.setState({activeEmotion: "CheerfulCalm"})
        } else if (this.state.activeEmotion === "CheerfulCalm") {
            this.setState({activeEmotion: "TerriblePacifying"})
        } else if (this.state.activeEmotion === "TerriblePacifying") {
            this.setState({activeEmotion: "DisgustingPleasant"})
        } else {

        }
        console.log(this.state.activeEmotion)
    }
}

export default SelectionScreen