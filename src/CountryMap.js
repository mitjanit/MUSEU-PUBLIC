
import React, { Component } from "react";
import { ComposableMap, ZoomableGroup, Geographies, Geography } from "react-simple-maps";

const wrapperStyles = {
  width: "100%",
  maxWidth: 1800,
  margin: "0 auto",
}


class CountryMap extends Component {

  constructor(props) {
    super(props);

    this.state = { continent: this.props.continent, 
                   country: this.props.country
                 };
  }

  render() {

    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projectionConfig={{
            scale: this.props.scaleMap,
            rotation: [-11,0,0],
          }}
          width={980}
          height={651}
          style={{
            width: "100%",
            height: "auto",
          }}
          >
          <ZoomableGroup center={[this.props.xMap,this.props.yMap]} disablePanning>
            <Geographies geography="maps/world-countries.json">
              {(geographies, projection) =>
                geographies.map((geography, i) =>
                  (geography.properties.NAME_EN === this.props.country) && (
                    <Geography
                      key={i}
                        geography={geography}
                        projection={projection}
                        style={{
                          default: {
                            fill: "#CFD8DC",
                            stroke: "#607D8B",
                            strokeWidth: 0.75,
                            outline: "none",
                          },
                          hover: {
                            fill: "#CFD8DC",
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
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }
}

export default CountryMap;