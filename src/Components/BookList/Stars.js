import React, { Component } from "react";

import starStroke from "./star_stroke.svg";
import starFill from "./star_fill.svg";

import "./Stars.css";

class Stars extends Component {
    render() {
        const { rating, handleStarClick } = this.props;

        const starItems = new Array(5).fill("").map((_, index) => {
            const imgSrc = index < rating ? starFill : starStroke;
            return (
                <img
                    src={imgSrc}
                    alt="Rating Star"
                    key={`star-${index}`}
                    onClick={() => handleStarClick(index + 1)}
                />
            );
        });
        return <div className="stars">{starItems}</div>;
    }
}

export default Stars;
