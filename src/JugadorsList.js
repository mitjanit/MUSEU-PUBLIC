import React, { Component } from 'react';
import JugadorCard from './JugadorCard.js';

class JugadorsList extends Component {

	static defaultProps = {
        jugadors: []
    }


	render() {
	    return ( 
	    	<div className="card-deck">
	    		<table>
	            	{
	                	this.props.jugadors.map(jugador => <JugadorCard key={jugador.id} jugador={jugador} />)
	            	}
	            </table>
	        </div>
	    );
	}
}


export default JugadorsList;