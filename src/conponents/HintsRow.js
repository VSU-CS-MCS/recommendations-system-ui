import React from "react";

class HintsRow extends React.Component {
    render() {
        return (<div className={`hintsRow ${this.props.className}`}>
            <div className="hint">{this.props.leftHint}</div>
            <div className="hint">{this.props.rightHint}</div>
        </div>)
    }
}

export default HintsRow