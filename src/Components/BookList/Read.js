import React, { Component } from "react";

import "./Read.css";

class Read extends Component {
    render() {
        const { hasRead, updateRead } = this.props;
        const classNameList = ["btn"];
        const text = hasRead ? "Read" : "To Read";
        classNameList.push(hasRead ? "book-read" : "not-read");
        return (
            <button className={classNameList.join(" ")} onClick={updateRead}>
                {text}
            </button>
        );
    }
}

export default Read;
