import React, { Component } from "react";

import "./Book.css";
import Read from "./Read";
import Stars from "./Stars";

class Book extends Component {
    constructor() {
        super();
        this.state = {
            hasRead: false,
            rating: 0,
        };
    }

    makeFullImgUrl = (link) => {
        return `https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${link}`;
    };

    toggleRead = () => {
        const newHasRead = !this.state.hasRead;
        this.setState({
            hasRead: newHasRead,
        });
    };

    handleRatingChange = (newRating) => {
        this.setState({
            rating: newRating,
        });
    };

    render() {
        const { book } = this.props;
        const { hasRead, rating } = this.state;
        const imgURL = this.makeFullImgUrl(book.imageLink);
        return (
            <div className="book-container">
                <div className="image-container">
                    <img src={imgURL} alt="Book Img" />
                </div>
                <div className="book-info">
                    <h4>{book.title}</h4>
                    <p>
                        <i>{book.author}</i>
                    </p>
                </div>
                <Read hasRead={hasRead} updateRead={this.toggleRead} />
                <Stars
                    rating={rating}
                    handleStarClick={this.handleRatingChange}
                />
            </div>
        );
    }
}

export default Book;
