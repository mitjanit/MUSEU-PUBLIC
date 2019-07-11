import React, { Component } from 'react';
import {Link} from "react-router-dom";

import './Footer.css';
import Translate from "./locales/Translate";

class Footer extends Component {

    constructor(props){
        super(props);
        this.state = { info : 'Museu del Futbol Menorquí' };
    }

    render() {
        return (
            <footer className="footer fixed-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p><Translate string={'museu'}/></p>
                        </div>

                        <div className="col">
                              <Link to={"/WorldPage"}>
                                  <button type="button" className="btn btn-warning btn-circle btn-dark btn-x4">
                                        <i className="fa fa-globe fa-1x"></i>
                                  </button>
                              </Link>

                              <Link to={"/Home"}>
                                <button type="button" className="btn btn-warning btn-circle btn-dark btn-x4">
                                    <i className="fa fa-home fa-1x"></i>
                                </button>
                              </Link>
                              <Link to={"/WorldPage"}>
                                <button type="button" className="btn btn-warning btn-circle btn-dark btn-x4">
                                    <i className="fa fa-hand-o-right fa-1x"></i>
                                </button>
                            </Link>
                        </div>

                        <div className="col"></div>
                    </div>
                </div>
            </footer>
        );
    }
}


export default Footer;