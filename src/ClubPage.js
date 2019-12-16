import React, { Component } from "react";
import {Link} from "react-router-dom";
import queryString from 'query-string';

 
class ClubPage extends Component {

  render() {

  	const values = queryString.parse(this.props.location.search);

  	let urlJugadors = "/JugadorsPage?club=".values.id;
    
    return (
	      <div className="ClubPage">
	          <h2>Club {values.id}</h2>
	          <Link to={"/"}> Home </Link> &nbsp;
	          <Link to={"/CountryPage"}> BACK </Link> &nbsp;
	          <p> Info club .... jugadors</p>
	          <Link to={urlJugadors}> Jugadors </Link>

	      </div>
    );
  }

}
 
export default ClubPage;