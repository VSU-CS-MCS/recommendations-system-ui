import React from "react";
import HintsRow from "./HintsRow";
import SelectionButton from "./SelectionButton";

class SelectionScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeEmotion: "SadHappy",
            selectedButtonForSadHappy: null,
            selectedButtonForCheerfulCalm: null,
            selectedButtonForTerriblePacifying: null,
            selectedButtonForDisgustingPleasant: null,
        };

        this.handleSelectionButtonClick = this.handleSelectionButtonClick.bind(this)
        this.backFunc = this.backFunc.bind(this)
        this.nextFunc = this.nextFunc.bind(this)
    }

    render() {
        return (<div className="selectionScreen">
            <div className="titleContainer">
                <div className="title">EMOTION TEST</div>
            </div>

            <HintsRow id="hr1" leftHint="sad" rightHint="happy" activeEmotion={this.state.activeEmotion} />
            <HintsRow id="hr2" leftHint="cheerful" rightHint="calm" activeEmotion={this.state.activeEmotion} />
            <HintsRow id="hr3" leftHint="terrible" rightHint="pacifying" activeEmotion={this.state.activeEmotion} />
            <HintsRow id="hr4" leftHint="disgusting" rightHint="pleasant" activeEmotion={this.state.activeEmotion} />

            <div className="selectionBar">
                {
                    Array.from({ length: 5 }, (_, i) => (
                        <SelectionButton
                            key={i}
                            id={`sb${i+1}`}
                            activeEmotion={this.state.activeEmotion}
                            selectedButton={this.getSelectedButton()}
                            onClick={this.handleSelectionButtonClick}
                        ></SelectionButton>
                    ))
                }
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

    handleSelectionButtonClick(activeEmotion, id) {
        if (activeEmotion === "SadHappy") {
            this.setState((prevState) => ({
                selectedButtonForSadHappy: prevState.selectedButtonForSadHappy === id ? null : id,
            }));
        } else if (activeEmotion === "CheerfulCalm") {
            this.setState((prevState) => ({
                selectedButtonForCheerfulCalm: prevState.selectedButtonForCheerfulCalm === id ? null : id,
            }));
        } else if (activeEmotion === "TerriblePacifying") {
            this.setState((prevState) => ({
                selectedButtonForTerriblePacifying: prevState.selectedButtonForTerriblePacifying === id ? null : id,
            }));
        } else {
            this.setState((prevState) => ({
                selectedButtonForDisgustingPleasant: prevState.selectedButtonForDisgustingPleasant === id ? null : id,
            }));
        }
        console.log(activeEmotion)
        console.log(id)
        console.log(this.state.selectedButtonForSadHappy)
    };

    getSelectedButton() {
        if (this.state.activeEmotion === "SadHappy") {
            return this.state.selectedButtonForSadHappy
        } else if (this.state.activeEmotion === "CheerfulCalm") {
            return this.state.selectedButtonForCheerfulCalm
        } else if (this.state.activeEmotion === "TerriblePacifying") {
            return this.state.selectedButtonForTerriblePacifying
        } else {
            return this.state.selectedButtonForDisgustingPleasant
        }
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