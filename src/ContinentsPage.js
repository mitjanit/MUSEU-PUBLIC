import React, { Component } from "react";
import {Link} from "react-router-dom";
 
class ContinentsPage extends Component {

  render() {
    return (
	      <div className="ContinentsPage">
	          <h2>Continents</h2>
	          <Link to={"/"}> Home </Link>
	          <Link to={"/WorldPage"}> BACK </Link>
	          <Link to={"/ContinentPage"}> CONTINENT </Link>
	          <Link to={"/ContinentPage?continent=Europa"}> EUROPA</Link>
	          <Link to={"/ContinentPage?continent=Asia"}> ASIA</Link>
	          <Link to={"/ContinentPage?continent=Africa"}> AFRICA</Link>
	          <Link to={"/ContinentPage?continent=America"}> AMERICA</Link>
	      </div>
    );
  }

}
 
export default ContinentsPage;