import React, { Component } from 'react';
//import {Button} from 'react-bootstrap';
import {Link} from "react-router-dom";


class JugadorCard extends Component {

	static defaultProps = {
        jugador: {}
    }


	render() {


	    return (
			<tr className="jugador-row">
   	            <td>{this.props.jugador.nom}</td>
   	            <td>{this.props.jugador.llinatge1}</td>
	    	</tr>
	    );
	}
}


export default JugadorCard;