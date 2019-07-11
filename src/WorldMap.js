
import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import ReactTooltip from "react-tooltip";
import Translate from "./locales/Translate";
import {Button, Collapse, OverlayTrigger, Tooltip} from "react-bootstrap";
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

class WorldMap extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false, toContinent: false, continent: null };
    this.handleClick = this.handleClick.bind(this);
    this.handleCitySelection = this.handleCitySelection.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      ReactTooltip.rebuild()
    }, 10)
  }

  componentDidUpdate(){
    setTimeout(() => {
      ReactTooltip.rebuild()
    }, 10)
  } 


  handleClick(geography, evt) {
    console.log("Geography data: ", geography.properties.continent);
    this.setState({toContinent : true, continent : geography.properties.continent});
  }

  handleCitySelection(evt){
    const cityId = evt.target.getAttribute("data-city")
    const city = subregions[cityId]
    console.log("Geography data: ", city);
    this.setState({toContinent : true, continent : city});
  }

  render() {

    const { open } = this.state;

    if (this.state.toContinent === true) {
      let url = "/ContinentPage?continent="+this.state.continent;
      return <Redirect to={url} />
    }

    return (
      <div>
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
          <ZoomableGroup center={[0,20]} disablePanning >
            <Geographies geography="maps/world-continents.json">
              {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                <Geography
                  key={i}
                  data-tip={geography.properties.continent}
                  data-for="worldtip"
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
        <ReactTooltip id="worldtip" />
      </div>
      <div className="collapseStyles">
        <OverlayTrigger
                      placement="right"
                      overlay={ <Tooltip> <Translate string="continents"/> </Tooltip> }
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
            subregions.sort().map((city, i) => (
              <button
                key={i}
                className="btn btn-light blink"
                data-city={i}
                onClick={this.handleCitySelection}
                >
                { subregions.sort()[i] }
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

export default WorldMap;