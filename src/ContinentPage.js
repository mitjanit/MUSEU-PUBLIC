import React, { Component } from "react";
import queryString from 'query-string';

import EuropeMap from "./EuropeMap";
import AsiaMap from "./AsiaMap";
import OceaniaMap from "./OceaniaMap";
import AfricaMap from "./AfricaMap";
import NorthAmericaMap from "./NorthAmericaMap";
import SouthAmericaMap from "./SouthAmericaMap";
 
class ContinentPage extends Component {

  render() {

  	const values = queryString.parse(this.props.location.search);

  	let mapa;

    if (values.continent==="Asia") {
      mapa = <AsiaMap />;
    }
    else if (values.continent==="Africa") {
      mapa = <AfricaMap />;
    }
    else if (values.continent==="Europe") {
      mapa = <EuropeMap />;
    }
    else if (values.continent==="South America") {
      mapa = <SouthAmericaMap />;
    }
    else if (values.continent==="North America") {
      mapa = <NorthAmericaMap />;
    }
    else if (values.continent==="Oceania") {
      mapa = <OceaniaMap />;
    }

    return (
	      <div className="ContinentPage">
	          {mapa}
	      </div>
    );
  }

}
 
export default ContinentPage;