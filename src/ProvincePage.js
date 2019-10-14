import React, { Component } from "react";
//import {Link} from "react-router-dom";
import Translate from "./locales/Translate";
import queryString from 'query-string';

import Clubs from "./Clubs";
 
class ProvincePage extends Component {

  render() {

  	const values = queryString.parse(this.props.location.search);

    //let urlBack = "/CommunityPage?continent="+values.continent+"&country="+values.country+"&community="+values.community;

    return (
	      <div className="ProvincePage">
          <div className="container">
	          <h2><Translate string="provincia"/> {values.province}</h2>
            <h3>Clubs</h3>
            <hr/>
            <Clubs provincia={values.province} />
	        </div>
	      </div>
    );
  }

}
 
export default ProvincePage;