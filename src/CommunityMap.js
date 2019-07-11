
import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import ReactTooltip from "react-tooltip";
import {Button, Collapse, Tooltip, OverlayTrigger} from "react-bootstrap";
import { ComposableMap, ZoomableGroup, Geographies, Geography } from "react-simple-maps";
import chroma from "chroma-js";

let include = [];

class CommunityMap extends Component {

  constructor(props) {

    super(props);

    this.state = { open: false, continent: "Europe", 
                   country: "Spain",
                   community: this.props.community,
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
    console.log("Geography data: ", geography.properties.NAME_2);
    this.setState({toProvince : true, province : geography.properties.NAME_2});
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

    let xMap=0, yMap=20, scaleMap=9000;

    if(this.props.community==="Cataluña"){
      include = [ "Tarragona", "Lleida", "Barcelona", "Girona"];
      scaleMap = 9805; xMap = 2; yMap = 41;
    }
    else if(this.props.community==="Comunidad de Madrid"){
      include = [ "Madrid"];
      scaleMap = 19805; xMap = -4; yMap = 40.5;
    }
    else if(this.props.community==="Andalucía"){
      include = [ "Huelva", "Sevilla", "Córdoba", "Jaén", "Almería", "Granada", "Málaga", "Cádiz"];
      scaleMap = 9005; xMap = -4.5; yMap = 37;
    }
    else if(this.props.community==="Extremadura"){
      include = [ "Badajoz", "Cáceres"];
      scaleMap = 9005; xMap = -6; yMap = 38.75;
    }
    else if(this.props.community==="Castilla-La Mancha"){
      include = [ "Ciudad Real", "Albacete", "Toledo", "Cuenca", "Guadalajara"];
      scaleMap = 9005; xMap = -3; yMap = 39.5;
    }
    else if(this.props.community==="Región de Murcia"){
      include = [ "Murcia"];
      scaleMap = 10005; xMap = -1.5; yMap = 37.5;
    }
    else if(this.props.community==="Comunidad Valenciana"){
      include = [ "Alicante", "Valencia", "Castellón"];
      scaleMap = 10005; xMap = -0.5; yMap = 39.0;
    }
    else if(this.props.community==="Castilla y León"){
      include = [ "Ávila", "Salamanca", "Zamora", "Valladolid", "Segovia", "Soria", "Burgos", "Palencia", "León"];
      scaleMap = 11005; xMap = -4; yMap = 41.5;
    }
    else if(this.props.community==="Galicia"){
      include = [ "Ourense", "Pontevedra", "A Coruña", "Lugo"];
      scaleMap = 11905; xMap = -8; yMap = 42.5;
    }
    else if(this.props.community==="Aragón"){
      include = [ "Teruel", "Zaragoza", "Huesca"];
      scaleMap = 11005; xMap = -0.5; yMap = 41.25;
    }
    else if(this.props.community==="Principado de Asturias"){
      include = [ "Asturias"];
      scaleMap = 11005; xMap = -6; yMap = 42.5;
    }
    else if(this.props.community==="Cantabria"){
      include = [ "Cantabria"];
      scaleMap = 15005; xMap = -4; yMap = 42.5;
    }
    else if(this.props.community==="País Vasco"){
      include = [ "Vizcaya", "Guipúzcoa", "Álava"];
      scaleMap = 21005; xMap = -2.5; yMap = 42.75;
    }
    else if(this.props.community==="Comunidad Foral de Navarra"){
      include = [ "Navarra"];
      scaleMap = 19005; xMap = -1.5; yMap = 42.5;
    }
    else if(this.props.community==="La Rioja"){
      include = [ "La Rioja"];
      scaleMap = 21005; xMap = -2.5; yMap = 42;
    }
    else if(this.props.community==="Islas Baleares"){
      include = [ "Baleares"];
      scaleMap = 19005; xMap = 2.75; yMap = 39.2;
    }
    else if(this.props.community==="Ceuta y Melilla"){
      include = [ "Ceuta"];
      scaleMap = 19005; xMap = 2.75; yMap = 39.2;
    }
    else if(this.props.community==="Islas Canarias"){
      include = [ "Las Palmas"];
      scaleMap = 19005; xMap = 2.75; yMap = 39.2;
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
      <div className="wrapperStyles">
        <ComposableMap
          projectionConfig={{
            scale: scaleMap,
            rotation: [-11,0,0],
          }}
          width={1280}
          height={651}
          style={{
            width: "100%",
            height: "auto",
          }}
          >
          <ZoomableGroup center={[xMap, yMap]} disablePanning>
            <Geographies geography="maps/spain-provincias.json">
              {(geographies, projection) =>
                geographies.map((geography, i) =>
                  include.indexOf(geography.properties.NAME_2) !== -1 && (
                    <Geography
                      key={i}
                        geography={geography}
                        projection={projection}
                        onClick={ this.handleClick }
                        data-tip={geography.properties.NAME_2}
                        data-for="communitytip"
                        style={{
                          default: {
                            fill: colorScale[include.indexOf(geography.properties.NAME_2)],
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
        <ReactTooltip id="communitytip" />
      </div>
      <div className="collapseStyles">
        <OverlayTrigger
                    placement="right"
                    overlay={ <Tooltip> Províncias </Tooltip> }
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

export default CommunityMap;