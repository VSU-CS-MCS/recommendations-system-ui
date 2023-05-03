import React from "react";
import PopUp from "./components/PopUp";
import StartButton from "./components/StartButton";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popUpIsActive: false
        };

        this.switchPopUpIsActive = this.switchPopUpIsActive.bind(this)
    }

    render() {
        return (<div>
            <StartButton popUpIsActive={this.state.popUpIsActive} showFunc={this.switchPopUpIsActive}/>
            <PopUp popUpIsActive={this.state.popUpIsActive} hideFunc={this.switchPopUpIsActive}/>
        </div>)
    }

    switchPopUpIsActive () {
        this.setState({popUpIsActive: !this.state.popUpIsActive})
    }
}

export default App