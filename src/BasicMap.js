
import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { ComposableMap, ZoomableGroup, Geographies, Geography } from "react-simple-maps";
import chroma from "chroma-js";

const wrapperStyles = {
  width: "100%",
  maxWidth: 1400,
  margin: "0 auto",
}

const colorScale = chroma
  .scale([
    '#FF6E40',
    'FFD740',
    '#00B8D4',
  ])
  .mode('lch')
  .colors(6);

const subregions = [
    "Asia",
    "Africa",
    "Europe",
    "South America",
    "North America",
    "Oceania"
  ];

class BasicMap extends Component {

  constructor(props) {
    super(props);
    this.state = { toContinent: false, continent: null };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(geography, evt) {
    console.log("Geography data: ", geography.properties.continent);
    this.setState({toContinent : true, continent : geography.properties.continent});
  }

  render() {

    if (this.state.toContinent === true) {
      let url = "/ContinentPage?continent="+this.state.continent;
      return <Redirect to={url} />
    }

    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projectionConfig={{
            scale: 205,
            rotation: [-11,0,0],
          }}
          width={980}
          height={551}
          style={{
            width: "100%",
            height: "auto",
          }}
          >
          <ZoomableGroup center={[0,20]} disablePanning>
            <Geographies geography="maps/world-continents.json">
              {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                <Geography
                  key={i}
                  geography={geography}
                  projection={projection}
                  onClick={ this.handleClick }
                  style={{
                    default: {
                      fill: colorScale[subregions.indexOf(geography.properties.continent)],
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    hover: {
                      fill: "#607D8B",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    pressed: {
                      fill: "#FF5722",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                  }}
                />
              ))}
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }
}

export default BasicMap