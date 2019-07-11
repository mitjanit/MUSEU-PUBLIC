import React, { Component } from 'react';
import ClubCard from './ClubCard.js';

import './Clubs.css';

class ClubsList extends Component {

	static defaultProps = {
        clubs: []
    }


	render() {
	    return ( 
	    	<div className="card-deck">
	            {
	                this.props.clubs.map(club => <ClubCard key={club.id} club={club} />)
	            }
	        </div>
	    );
	}
}


export default ClubsList;