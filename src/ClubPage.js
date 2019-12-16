import React, { Component } from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
import queryString from 'query-string';

import {URL_API} from './Constants.js'
import JugadorsList from "./JugadorsList.js";

 
class ClubPage extends Component {

	constructor() {
	    
	    super();

	    this.state = {
	        jugadors: []
	    };

	}

	componentDidMount() {

		const values = queryString.parse(this.props.location.search);

		var codiClub = values.club;

		console.log("Accedint a la API "+URL_API+"/api/clubs/"+codiClub+"/jugadors/");
	    axios.get(URL_API+'clubs/'+codiClub+'/jugadors/',{
		  method: 'GET',
		  mode: 'no-cors',
		  headers: {
		    'Access-Control-Allow-Origin': '*',
		    'Content-Type': 'application/json',
		    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
		  }
		})
        .then(res => {
          const info = res.data;
          console.log(info);
          this.setState({ jugadors : info });
        })
	}

  	render() {

  	const values = queryString.parse(this.props.location.search);

  	console.log(values);

  	let urlJugadors = "/JugadorsPage?club="+values.club;
    
    return (
	      <div className="ClubPage">
	          <h2>Club {values.club}</h2>
	          <Link to={"/"}> Home </Link> &nbsp;
	          <Link to={"/CountryPage"}> BACK </Link> &nbsp;
	          <p> Info club .... jugadors</p>
	          <JugadorsList jugadors={this.state.jugadors} />
	      </div>
    );
  }

}
 
export default ClubPage;