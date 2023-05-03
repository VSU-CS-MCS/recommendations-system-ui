import React from "react";
import PopUp from "./components/PopUp";
import StartButton from "./components/StartButton";

class App extends React.Component {
    render() {
        return (<div>
            <StartButton />
            <PopUp />
        </div>)
    }
}

export default App