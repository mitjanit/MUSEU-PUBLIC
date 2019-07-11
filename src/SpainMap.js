
import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import ReactTooltip from "react-tooltip";
import {Button, Collapse, Tooltip, OverlayTrigger} from "react-bootstrap";
import { ComposableMap, ZoomableGroup, Geographies, Geography } from "react-simple-maps";
import chroma from "chroma-js";

const wrapperStyles = {
  width: "100%",
  maxWidth: 1800,
  margin: "0 auto",
}

const include = [
    "Ceuta y Melilla", "Andalucía", "Región de Murcia", "Castilla-La Mancha", "Extremadura",
    "Comunidad Valenciana", "Islas Baleares", "Comunidad de Madrid", "Castilla y León",
    "Galicia", "Principado de Asturias", "Cantabria", "País Vasco", "Comunidad Foral de Navarra",
    "La Rioja", "Aragón", "Cataluña", "Islas Canarias"
  ];

const include2 = [
    "Ceuta y Melilla", "Andalucía", "Región de Murcia", "Castilla-La Mancha", "Extremadura",
    "Comunidad Valenciana", "Islas Baleares", "Comunidad de Madrid", "Castilla y León",
    "Galicia", "Principado de Asturias", "Cantabria", "País Vasco", "Comunidad Foral de Navarra",
    "La Rioja", "Aragón", "Cataluña", "Islas Canarias"
  ];

const colorScale = chroma
  .scale([
    '#FF6E40',
    'FFD740',
    '#00B8D4',
  ])
  .mode('lch')
  .colors(include.length);

class SpainMap extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false, 
                   continent: "Europe", 
                   country: "Spain",
                   toCommunity: false,
                   community : null
                 };
    this.handleClick = this.handleClick.bind(this);
    this.handleCitySelection = this.handleCitySelection.bind(this);
  }

  handleCitySelection(evt){
    const cityId = evt.target.getAttribute("data-city")
    const city = include[cityId]
    console.log("Geography data: ", city);
    this.setState({toCommunity : true, community : city});
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
    console.log("Geography data: ", geography.properties.NAME_1);
    this.setState({toCommunity : true, community : geography.properties.NAME_1});
  }

  render() {

    const { open } = this.state;

    if (this.state.toCommunity === true) {
      let url = "/CommunityPage?continent="+this.state.continent+"&country="+this.state.country+"&community="+this.state.community;
      return <Redirect to={url} />
    }


    return (
      <div>
      <div style={wrapperStyles}>
        <ComposableMap
          projectionConfig={{
            scale: 3805,
            rotation: [-11,0,0],
          }}
          width={1280}
          height={651}
          style={{
            width: "100%",
            height: "auto",
          }}
          >
          <ZoomableGroup center={[-4, 39]} disablePanning>
            <Geographies geography="maps/spain-comunidades.json">
              {(geographies, projection) =>
                geographies.map((geography, i) =>
                  include.indexOf(geography.properties.NAME_1) !== -1 && (
                    <Geography
                      key={i}
                        geography={geography}
                        projection={projection}
                        onClick={ this.handleClick }
                        data-tip={geography.properties.NAME_1}
                        data-for="spaintip"
                        style={{
                          default: {
                            fill: colorScale[include.indexOf(geography.properties.NAME_1)],
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
        <ReactTooltip id="spaintip" />
      </div>
      <div className="collapseStyles">
        <OverlayTrigger
                    placement="right"
                    overlay={ <Tooltip> Comunidades </Tooltip> }
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

export default SpainMap;