import React, { Component } from 'react';
import axios from 'axios';
import ClubsList from './ClubsList.js';

import {paisos, URL_API} from './Constants.js'


class ClubsPais extends Component {

	constructor() {
	    super();

	    this.state = {
	        clubs: []
	    };
	}

	componentDidMount() {

		var codiPais = paisos[this.props.country];

		console.log("Accedint a la API "+URL_API+"paissos/"+codiPais+"/clubs/");
	    axios.get(URL_API+'paissos/'+codiPais+'/clubs/',{
		  method: 'GET',
		  mode: 'no-cors',
		  headers: {
		    'Access-Control-Allow-Origin': '*',
		    'Content-Type': 'application/json',
		    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
		  },
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
	                	<p>{this.props.country}</p>
	                    <ClubsList clubs={this.state.clubs} />
	                </div>
	            </div>
	        </div>
	    );
	}
}


export default ClubsPais;