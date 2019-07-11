import React, {Component} from 'react';
import {Tooltip, OverlayTrigger} from 'react-bootstrap';

class LanguagePicker extends Component {
    
    // Renderitza els botons per canviar d'idioma
    render(){
        const {changeLanguage} = this.props;
        return (
            <div>
                <OverlayTrigger
                  key="en"
                  placement="bottom"
                  overlay={ <Tooltip> English </Tooltip> }
                >
                    <button className="btn btn-bandera btn-dark" id="en" onClick={changeLanguage}>
                        <img className="bandera" src="img/united-kingdom.png" alt="english" />
                    </button>
                </OverlayTrigger>

                <OverlayTrigger
                  key="es"
                  placement="bottom"
                  overlay={ <Tooltip> Español </Tooltip> }
                >
                    <button className="btn btn-bandera btn-dark" id="es" onClick={changeLanguage}>
                        <img className="bandera" src="img/spain.png" alt="español" />
                    </button>
                </OverlayTrigger>

                <OverlayTrigger
                  key="ca"
                  placement="bottom"
                  overlay={ <Tooltip> Català </Tooltip> }
                >
                    <button className="btn btn-bandera btn-dark" id="ca" onClick={changeLanguage}>
                        <img className="bandera" src="img/balearic-islands.png" alt="català" />
                    </button>
                </OverlayTrigger>
            </div>
        )
    }
}

export default LanguagePicker;