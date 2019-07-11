import React, { Component } from "react";
import {Link} from "react-router-dom";

import './App.css';
 
class Home extends Component {
  render() {
    return (
      <div className="Home">
      	<Link to={"/WorldPage"}>
        	<img className="logo" src="img/logo.jpg" alt="logo" />
        </Link>
      </div>
    );
  }
}
 
export default Home;