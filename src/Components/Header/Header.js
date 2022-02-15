import React, { Component } from "react";

import styles from "./Header.module.css";
import "./Header.css";

class Header extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm: "",
            menuActive: false,
        };
    }

    setSearchTerm = (e) => {
        this.setState({
            searchTerm: e.target.value,
        });
    };

    setMenuActive = () => {
        console.log("hi");
        const newMenuActive = !this.state.menuActive;
        this.setState({
            menuActive: newMenuActive,
        });
    };

    makeClassNamePerMenuActive = (baseClass) => {
        const classNameList = [baseClass];
        if (this.state.menuActive) {
            classNameList.push("active");
        }
        return classNameList.join(" ");
    };

    render() {
        return (
            <header className={styles.header}>
                <div className={styles["header-logo-button"]}>
                    <h2>Book Barn</h2>
                    <div
                        className={this.makeClassNamePerMenuActive(
                            "menu-button"
                        )}
                        onClick={this.setMenuActive}
                    >
                        <div className="menu-button-line" />
                        <div className="menu-button-line" />
                        <div className="menu-button-line" />
                    </div>
                </div>
                <nav className={this.makeClassNamePerMenuActive("menu")}>
                    <a href="/">Home</a>
                    <a href="/">My Books</a>
                    <a href="/">Browse</a>
                    <a href="/">Community</a>
                    <input type="text" className={styles.search} />
                    <a href="/">Sign In</a>
                    <a href="/">Join</a>
                </nav>
            </header>
        );
    }
}

export default Header;
