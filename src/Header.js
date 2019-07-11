import React, { Component } from 'react';
import {Link} from "react-router-dom";

import './Header.css';
import LanguagePicker from "./LanguagePicker";

class Header extends Component {

    constructor(props) {
        super();
    }

    static defaultProps = {
        title: 'Title'
    }

    render() {
        return (
            <header>
                <nav className="header navbar navbar-dark bg-dark">
                        <Link className="navbar-brand atitol" to={"/"}>
                            <h3 className="titol">
                                <i className="fa fa-futbol-o fa-2x text-white my-auto"></i> {this.props.title}
                            </h3>
                        </Link>
                        <LanguagePicker changeLanguage={this.props.changeLanguage} />
                </nav>

            </header>
        );
    }
}


export default Header;