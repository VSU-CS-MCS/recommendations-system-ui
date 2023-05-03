import React from "react";

class CloseButton extends React.Component {
    render () {
        return (<div className="closeButton" onClick={this.props.onClick}>
            <div className={"stick stick1"}></div>
            <div className={"stick stick2"}></div>
        </div>)
    }
}

export default CloseButton