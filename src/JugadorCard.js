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
   	            <td>{this.props.jugador.nom_esportiu}</td>
   	            <td>{this.props.jugador.nom}</td>
   	            <td>{this.props.jugador.ap1}</td>
   	            <td>{this.props.jugador.ap2}</td>
	    	</tr>
	    );
	}
}


export default JugadorCard;