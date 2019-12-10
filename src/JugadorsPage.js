import React, { Component } from "react";
import queryString from 'query-string';

 
class JugadorsPage extends Component {

  render() {

  	const values = queryString.parse(this.props.location.search);
    
    return (
	      <div className="JugadorsPage">
	          <h2>Jugadors del {values.club}</h2>
	          <p> Info jugadors .... </p>
	      </div>
    );
  }

}
 
export default ClubPage;