import React, { Component } from "react";

import "./App.css";
import BookList from "./Components/BookList/BookList";
import Header from "./Components/Header/Header";

class App extends Component {
    constructor() {
        super();
        this.state = {
            books: null,
        };
    }

    async componentDidMount() {
        const booksResponse = await fetch(
            "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json"
        );

        const books = await booksResponse.json();
        setTimeout(() => {
            this.setState({
                books,
            });
        }, 1000);
    }

    render() {
        return (
            <div className="App">
                <Header />
                <BookList books={this.state.books} />
            </div>
        );
    }
}

export default App;
