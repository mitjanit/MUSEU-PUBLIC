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
	    	clubNom: "",
	        jugadors: []
	    };

	}

	componentDidMount() {

		const values = queryString.parse(this.props.location.search);

		var codiClub = values.club;

		// Accés a informació dle club
		console.log("Accedint a la API "+URL_API+"/api/clubs/"+codiClub);
	    axios.get(URL_API+'clubs/'+codiClub,{
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
          this.setState({ clubNom : info.nom });
        })



		// Acces a dades dels jugadors del club

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

    
    return (
	      <div className="ClubPage">
	          <h2>Club {this.state.clubNom}</h2>
	          <Link to={"/"}> Home </Link> &nbsp;
	          <Link to={"/ClubPage.js?club="+values.club}> BACK </Link> &nbsp;
	          <p> Info club .... jugadors</p>
	          <JugadorsList jugadors={this.state.jugadors} />
	      </div>
    );
  }

}
 
export default ClubPage;