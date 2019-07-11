
import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import ReactTooltip from "react-tooltip";
import Translate from "./locales/Translate";
import {Button, Collapse, OverlayTrigger, Tooltip} from "react-bootstrap";
import { ComposableMap, ZoomableGroup, Geographies, Geography } from "react-simple-maps";
import chroma from "chroma-js";

import './App.css';

const wrapperStyles = {
  width: "100%",
  maxWidth: 2400,
  margin: "0 auto",
  position:"absolute",
  top:"100px",
  left:"0px",
  zIndex:"0"
}

const include = [
    "Spain","France","Portugal","Italy", "Germany", "Austria", "United Kingdom",
    "Switzerland", "Ireland", "Belgium", "Netherlands", "Denmark", "Luxembourg",
    "Czech Republic", "Poland", "Slovakia", "Hungary", "Slovenia", "Sweden",
    "Norway", "Finland", "Greece", "Albania", "Croatia", "Romania", "Bosnia and Herzegovina",
    "Montenegro", "Moldova", "Ukraine", "Belarus", "Lithuania", "Latvia", "Estonia",
    "Turkey", "Serbia", "Kosovo", "Bulgaria", "Republic of Macedonia", "Georgia", "Armenia", "Azerbaijan",
    "Russia",
  ];

const include2 = [
    "Spain","France","Portugal","Italy", "Germany", "Austria", "United Kingdom",
    "Switzerland", "Ireland", "Belgium", "Netherlands", "Denmark", "Luxembourg",
    "Czech Republic", "Poland", "Slovakia", "Hungary", "Slovenia", "Sweden",
    "Norway", "Finland", "Greece", "Albania", "Croatia", "Romania", "Bosnia",
    "Montenegro", "Moldova", "Ukraine", "Belarus", "Lithuania", "Latvia", "Estonia",
    "Turkey", "Serbia", "Kosovo", "Bulgaria", "Macedonia", "Georgia", "Armenia", "Azerbaijan",
    "Russia",
  ];

const colorScale = chroma
  .scale([
    '#FF6E40',
    'FFD740',
    '#00B8D4',
  ])
  .mode('lch')
  .colors(include.length);

class EuropeMap extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false, continent: "Europe", toCountry: false, country: null };
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
    this.setState({toContinent : true, country : geography.properties.NAME_EN});
  }

  handleCitySelection(evt){
    const cityId = evt.target.getAttribute("data-city")
    const city = include[cityId]
    console.log("Geography data: ", city);
    this.setState({toContinent : true, country : city});
  }

  render() {

    const { open } = this.state;

    if (this.state.toContinent === true) {
      let url = "/CountryPage?continent="+this.state.continent+"&country="+this.state.country;
      return <Redirect to={url} />
    }


    return (
      <div>
      <div style={wrapperStyles} >
        <ComposableMap
          projectionConfig={{
            scale: 555,
            rotation: [-11,0,0],
          }}
          width={900}
          height={600}
          style={{
            width: "100%",
            height: "auto",
          }}
          >
          <ZoomableGroup center={[30,42]} disablePanning data-tip="Europe">
            <Geographies geography="maps/world-countries.json">
              {(geographies, projection) =>
                geographies.map((geography, i) =>
                  include.indexOf(geography.properties.NAME_EN) !== -1 && (
                    <Geography
                      key={i}
                        geography={geography}
                        projection={projection}
                        data-tip={geography.properties.NAME_EN}
                        data-for="europetip"
                        onClick={ this.handleClick }
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
        <ReactTooltip id="europetip" />
      </div>
      <div className="collapseStyles">
        <OverlayTrigger
                      placement="right"
                      overlay={ <Tooltip> <Translate  string='paisos' /> </Tooltip> }
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

export default EuropeMap;