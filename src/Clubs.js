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

		console.log("Intentant accedir a http://34.90.92.235/api/clubs/"+this.props.provincia);
	     axios.get('http://34.90.92.235/api/clubs/'+this.props.provincia,{
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