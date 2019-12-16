import React, { Component } from 'react';
//import {Button} from 'react-bootstrap';
import {Link} from "react-router-dom";

import './Clubs.css';

class ClubCard extends Component {

	static defaultProps = {
        club: {}
    }


	render() {

		let imgURL = "escuts/"+this.props.club.nom+".jpg";
		let imgALT = this.props.club.nom;

	    return (

			<div className="club-card">
	    	    <div className="club-card card">
	    	        <img className="card-img-top" src={imgURL} alt={imgALT} />
	    	        <div className="card-body">
	    	            <h4 className="card-title">{this.props.club.nom}</h4>
	    	            <h6 className="card-subtitle mb-2 text-muted">{this.props.club.nom}</h6>
	    	        </div>
	    	        <div className="card-footer">
		    	        <Link to={"/ClubPage?club="+this.props.club.id} >
		    	        	<button className="btn btn-dark">
		    	        		<i className="fa fa-hand-o-right"></i> INFO
		    	        	</button>
	    	        	</Link>
	    	        </div>
	    	    </div>
	    	</div>
	    );
	}
}


export default ClubCard;