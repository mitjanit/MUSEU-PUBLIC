import React, { Component } from "react";
import {Link} from "react-router-dom";
import Translate from "./locales/Translate";
import queryString from 'query-string';

import CommunityMap from "./CommunityMap";
import BalearsMap from "./BalearsMap";
 
class CommunityPage extends Component {


  render() {

  	const values = queryString.parse(this.props.location.search);
    
    let urlBack = "/CountryPage?continent="+values.continent+"&country="+values.country;

    let stuff;

    if(values.community==="Islas Baleares"){
    	stuff = <BalearsMap />
    }
    else {
    	stuff = <CommunityMap community={values.community} />
    }

    return (
	      <div className="CountryPage">
	          <h2><Translate string="comunitat" /> {values.community}</h2>
	          <Link to={"/"}> Home </Link> &nbsp;
	          <Link to={urlBack}> BACK </Link> &nbsp;
	          { stuff }
	      </div>
    );
  }

}
 
export default CommunityPage;