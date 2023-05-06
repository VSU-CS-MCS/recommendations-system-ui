import React from "react";

class SelectionButton extends React.Component {
    render() {
        const { id, activeEmotion, selectedButton, onClick } = this.props;
        const className = id === selectedButton ? "active" : "";

        return (
            <button id={id} className={`selectionButton ${className}`} onClick={() => onClick(activeEmotion, id)}></button>
        );
    }
}

export default SelectionButton