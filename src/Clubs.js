import React, { Component } from 'react';
import axios from 'axios';
import ClubsList from './ClubsList.js';

import './Movies.css';


class Clubs extends Component {

	constructor() {
	    super();

	    this.state = {
	        clubs: []
	    };
	}

	componentDidMount() {

		// Obtenir codi d eprovincia

		var dict = {};
		dict['Menorca']=51;

		codiProvincia = dict[this.props.provincia];

		console.log("Intentant accedir a la web http://34.90.211.155/api/provincies/"+codiProvincia+"/clubs/");
	    axios.get('http://34.90.211.155/api/provincies/'+codiProvincia+'/clubs/',{
		  method: 'GET',
		  mode: 'no-cors',
		  headers: {
		    'Access-Control-Allow-Origin': '*',
		    'Content-Type': 'application/json',
		    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
		  },
		  withCredentials: true,
		  credentials: 'same-origin',
		})
        .then(res => {
          const infoClubs = res.data;
          console.log(infoClubs);
          this.setState({ clubs : infoClubs });
        })
	}

	render() {
	    return (
	        <div className="container-fluid">
	            <div className="d-flex flex-row">                    
	                <div className="col-sm-12">
	                	<p>{this.props.provincia}</p>
	                    <ClubsList clubs={this.state.clubs} />
	                </div>
	            </div>
	        </div>
	    );
	}
}


export default Clubs;