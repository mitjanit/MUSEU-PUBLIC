import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import ReactTooltip from "react-tooltip";
import {Button, Collapse, OverlayTrigger, Tooltip} from "react-bootstrap";
import { ComposableMap, ZoomableGroup, Geographies, Geography } from "react-simple-maps";
import chroma from "chroma-js";

const wrapperStyles = {
  width: "100%",
  maxWidth: 1400,
  margin: "0 auto",
}


const include = [
    "Australia", "New Zealand", "Papua New Guinea", "Indonesia", "Philippines",
    "Fiji", "Malaysia", "Brunei"
  ];

const include2 = [
    "Australia", "New Zealand", "Papua New Guinea", "Indonesia", "Philippines",
    "Fiji", "Malaysia", "Brunei"
  ];

const colorScale = chroma
  .scale([
    '#FF6E40',
    'FFD740',
    '#00B8D4',
  ])
  .mode('lch')
  .colors(include.length);

class OceaniaMap extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false, continent: "Asia", toCountry: false, country: null };
    this.handleClick = this.handleClick.bind(this);
    this.handleCitySelection = this.handleCitySelection.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      ReactTooltip.rebuild()
    }, 10)
  }

  componentDidUpdate(){
    ReactTooltip.rebuild()
  } 


  handleClick(geography, evt) {
    console.log("Geography data: ", geography.properties.NAME_EN);
    this.setState({toCountry : true, country : geography.properties.NAME_EN});
  }

  handleCitySelection(evt){
    const cityId = evt.target.getAttribute("data-city")
    const city = include[cityId]
    console.log("Geography data: ", city);
    this.setState({toCountry : true, country : city});
  }

  render() {

    const { open } = this.state;

    if (this.state.toCountry === true) {
      let url = "/CountryPage?continent="+this.state.continent+"&country="+this.state.country;
      return <Redirect to={url} />
    }


    return (
      <div>
      <div style={wrapperStyles}>
        <ComposableMap
          projectionConfig={{
            scale: 1100,
            rotation: [-11,0,0],
          }}
          width={1920}
          height={1280}
          style={{
            width: "100%",
            height: "auto",
          }}
          >
          <ZoomableGroup center={[130,-20]} disablePanning>
            <Geographies geography="maps/world-countries.json">
              {(geographies, projection) =>
                geographies.map((geography, i) =>
                  include.indexOf(geography.properties.NAME_EN) !== -1 && (
                    <Geography
                      key={i}
                        geography={geography}
                        projection={projection}
                        onClick={ this.handleClick }
                        data-tip={geography.properties.NAME_EN}
                        data-for="oceaniatip"
                        style={{
                          default: {
                            fill: colorScale[include.indexOf(geography.properties.NAME_EN)],
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
        <ReactTooltip id="oceaniatip" />
      </div>
      <div className="collapseStyles">
        <OverlayTrigger
                      placement="right"
                      overlay={ <Tooltip> Countries </Tooltip> }
          >
          <Button variant="dark" className="btn-circle btn-x4"
            onClick={() => this.setState({ open: !open })}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            <i className="fa fa-bars fa-1x"></i>
          </Button>
        </OverlayTrigger>
        <Collapse in={this.state.open}>
          <div id="example-collapse-text" className="wrapperStyles2">
            {
            include.sort().map((city, i) => (
              <button
                key={i}
                className="btn btn-light blink"
                data-city={i}
                onClick={this.handleCitySelection}
                >
                { include2.sort()[i] }
              </button>
            ))
          }
          </div>
        </Collapse>
      </div>
      </div>
    )
  }
}

export default OceaniaMap;