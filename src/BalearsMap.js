
import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import ReactTooltip from "react-tooltip";
import Translate from "./locales/Translate";
import {Button, Collapse, OverlayTrigger, Tooltip} from "react-bootstrap";

import { ComposableMap, ZoomableGroup, Geographies, Geography } from "react-simple-maps";
import chroma from "chroma-js";

const wrapperStyles = {
  width: "100%",
  maxWidth: 1800,
  margin: "0 auto",
}

const include = [ "Mallorca", "Menorca", "Eivissa", "Formenetera" ];

class BalearsMap extends Component {

  constructor(props) {

    super(props);

    this.state = { open: false,
                   continent: "Europe", 
                   country: "Spain",
                   community: "Islas Baleares",
                   toProvince: false,
                   province : null
                 };

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
    console.log("Geography data: ", geography.properties.NAMEUNIT);
    this.setState({toProvince : true, province : geography.properties.NAMEUNIT});
  }


  handleCitySelection(evt){
    const cityId = evt.target.getAttribute("data-city")
    const city = include[cityId]
    console.log("Geography data: ", city);
    this.setState({toProvince : true, province : city});
  }

  render() {

    const { open } = this.state;

    if (this.state.toProvince === true) {
      let url = "/ProvincePage?continent="+this.state.continent+"&country="+this.state.country+"&community="+this.state.community+"&province="+this.state.province;
      return <Redirect to={url} />
    }

    
    const colorScale = chroma
      .scale([
        '#FF6E40',
        'FFD740',
        '#00B8D4',
      ])
      .mode('lch')
      .colors(include.length);

    return (
      <div>
      <div style={wrapperStyles}>
        <ComposableMap
          projectionConfig={{
            scale: 16900,
            rotation: [-11,0,0],
          }}
          width={1280}
          height={800}
          style={{
            width: "100%",
            height: "auto",
          }}
          >
          <ZoomableGroup center={[3, 38.7]} disablePanning>
            <Geographies geography="maps/balears-illes4.json">
              {(geographies, projection) =>
                geographies.map((geography, i) =>
                  include.indexOf(geography.properties.NAMEUNIT) !== -1 && (
                    <Geography
                      key={i}
                        geography={geography}
                        projection={projection}
                        onClick={ this.handleClick }
                        data-tip={geography.properties.NAMEUNIT}
                        data-for="balearstip"
                        style={{
                          default: {
                            fill: colorScale[include.indexOf(geography.properties.NAMEUNIT)],
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
        <ReactTooltip id="balearstip" />
      </div>
        <div className="collapseStyles">
          <OverlayTrigger
                        placement="right"
                        overlay={ <Tooltip> <Translate  string='illes' /> </Tooltip> }
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
                  { include.sort()[i] }
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

export default BalearsMap;