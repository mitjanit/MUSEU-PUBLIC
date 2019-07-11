import React, { Component , Fragment } from 'react';
import {Route, BrowserRouter} from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import WorldPage from "./WorldPage";
import ContinentsPage from "./ContinentsPage";
import ContinentPage from "./ContinentPage";
import CountryPage from "./CountryPage";
import CommunityPage from "./CommunityPage";
import ProvincePage from "./ProvincePage";
import ClubPage from "./ClubPage";
import SpainPage from "./SpainPage";


import './App.css';

class Museu extends Component {

  constructor(props) {
     super(props);

     this.changeLanguage = this.changeLanguage.bind(this);
  }
  
  render() {


    return (
      <BrowserRouter>
          <div className="App">
                <Header title="Museu Futbol Menorquí"  changeLanguage={this.changeLanguage} />
                <div className="content">              
                  <Route path="/" exact component={Home} />
                  <Route path="/Home" exact component={Home} />
                  <Route path="/WorldPage" component={WorldPage} />
                  <Route path="/ContinentsPage" component={ContinentsPage} />
                  <Route path="/ContinentPage" component={ContinentPage} />
                  <Route path="/CountryPage" component={CountryPage} />
                  <Route path="/CommunityPage" component={CommunityPage} />
                  <Route path="/ProvincePage" component={ProvincePage} />
                  <Route path="/ClubPage" component={ClubPage} />
                  <Route path="/SpainPage" component={SpainPage} />
                </div>
                <Footer info="Museu Menorquí" />
          </div>
        </BrowserRouter>
    );
  }

}

export default Museu;
