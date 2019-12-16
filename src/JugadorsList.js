import React, { Component } from 'react';
import JugadorCard from './JugadorCard.js';
import Table from 'react-bootstrap/Table';

class JugadorsList extends Component {

	static defaultProps = {
        jugadors: []
    }


	render() {
	    return ( 
	    	<div>
	    		<Table striped bordered hover>
	    		  <thead>
	    		    <tr>
	    		      <th>Nom Esportiu</th>
	    		      <th>Nom</th>
	    		      <th>Llinatge 1</th>
	    		      <th>Llinatge 2</th>
	    		    </tr>
	    		  </thead>
	    		  <tbody>
	            	{
	                	this.props.jugadors.map(jugador => <JugadorCard key={jugador.id} jugador={jugador} />)
	            	}
	               </tbody>
	            </Table>
	        </div>
	    );
	}
}


export default JugadorsList;