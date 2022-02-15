import React, { Component } from "react";
import Book from "./Book";

import "./BookList.css";

class BookList extends Component {
    render() {
        if (this.props.books === null) {
            return <h3>Loading Books...</h3>;
        }
        let bookItems = this.props.books ? (
            this.props.books.map((book, index) => {
                return <Book key={index} book={book} />;
            })
        ) : (
            <h3>No books found.</h3>
        );
        return <div className="book-list">{bookItems}</div>;
    }
}

export default BookList;
