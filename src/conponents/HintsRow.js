import React from "react";

class HintsRow extends React.Component {
    render() {
        const { leftHint, rightHint, activeEmotion} = this.props;
        const emotion = leftHint.charAt(0).toUpperCase() + leftHint.slice(1) + rightHint.charAt(0).toUpperCase() + rightHint.slice(1);

        return (<div className={`hintsRow ${activeEmotion === emotion ? "" : "hide"}`}>
            <div className="hint">{this.props.leftHint}</div>
            <div className="hint">{this.props.rightHint}</div>
        </div>)
    }
}

export default HintsRow