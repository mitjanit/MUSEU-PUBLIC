import React, { Component } from "react";
import {Link} from "react-router-dom";
import queryString from 'query-string';

import SpainMap from "./SpainMap";
import CountryMap from "./CountryMap";
import ClubsPais from "./ClubsPais";
 
class CountryPage extends Component {


  render() {

  	const values = queryString.parse(this.props.location.search);
    
    let urlBack = "/ContinentPage?continent="+values.continent;

    let stuff;

    if (values.country==="Spain") {
      stuff = <SpainMap />;
    }
    else {
      /*stuff = <CountryMap continent={values.continent} 
      					 country={values.country}
      					 scaleMap="2005" xMap="10" yMap="38" />;*/

      stuff =<ClubsPais country={values.country} />
    }

    return (
	      <div className="CountryPage">
	          <h2>Country {values.country}</h2>
	          <Link to={"/"}> Home </Link> &nbsp;
	          <Link to={urlBack}> BACK </Link> &nbsp;

	          {stuff}

	         
	      </div>
    );
  }

}
 
export default CountryPage;