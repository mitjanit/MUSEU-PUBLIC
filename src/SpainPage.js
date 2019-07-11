import React, { Component } from "react";
import {Link} from "react-router-dom";
import queryString from 'query-string';
 
class SpainPage extends Component {

  render() {

  	const values = queryString.parse(this.props.location.search);
    
    let urlBack = "/ContinentPage?continent="+values.continent;

    return (
	      <div className="CountryPage">
	          <h2>Country {values.country}</h2>
	          <Link to={"/"}> Home </Link> &nbsp;
	          <Link to={urlBack}> BACK </Link> &nbsp;

	          <Link to={"/ClubPage?club=All"}> CLUB </Link>
	          <Link to={"/ClubPage?club=RealMadrid"}> REAL MADRID </Link>
	          <Link to={"/ClubPage?club=FCBarcelona"}> FC BARCELONA </Link>
	      </div>
    );
  }

}
 
export default SpainPage;