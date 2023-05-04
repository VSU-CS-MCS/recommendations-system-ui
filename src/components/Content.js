import React from "react";
import CloseButton from "./CloseButton";

class Content extends React.Component {
    render () {
        return (<div className="content">
            <CloseButton onClick={this.props.hideFunc}/>

        </div>)
    }
}

export default Content