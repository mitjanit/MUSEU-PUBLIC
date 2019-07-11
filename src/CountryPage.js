import React, { Component } from "react";
import {Link} from "react-router-dom";
import queryString from 'query-string';

import SpainMap from "./SpainMap";
import CountryMap from "./CountryMap";
 
class CountryPage extends Component {


  render() {

  	const values = queryString.parse(this.props.location.search);
    
    let urlBack = "/ContinentPage?continent="+values.continent;

    let stuff;

    if (values.country==="Spain") {
      stuff = <SpainMap />;
    }
    else {
      stuff = <CountryMap continent={values.continent} 
      					 country={values.country}
      					 scaleMap="2005" xMap="10" yMap="38" />;
    }

    return (
	      <div className="CountryPage">
	          <h2>Country {values.country}</h2>
	          <Link to={"/"}> Home </Link> &nbsp;
	          <Link to={urlBack}> BACK </Link> &nbsp;

	          {stuff}

	          <Link to={"/ClubPage?club=All"}> CLUB </Link>
	          <Link to={"/ClubPage?club=RealMadrid"}> REAL MADRID </Link>
	          <Link to={"/ClubPage?club=FCBarcelona"}> FC BARCELONA </Link>
	      </div>
    );
  }

}
 
export default CountryPage;