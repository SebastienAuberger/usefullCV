import './App.css';
import React from 'react';
import Header from './components/headerComponent/header';
import Experiences from './components/experiencesComponent/experiences';
import Etudes from './components/etudesComponent/etudes';
import Competences from './components/competencesComponent/competences';
import Autres from './components/autresComponent/autres';
import InfoPerso from './components/infoPersoComponent/infoPerso';
import Footer from './components/footerComponent/footer';
import cv from "./shared/cvInfo.json";

import Nav from './components/navComponent/nav';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

class App extends React.Component {
  
  componentDidMount(){

  }

  render(){
    return(
      <div className="cv">
        <Header/>
        <Router>
            <Nav />
            <Routes>
            <Route path="/" element={<Experiences/>}></Route>
              <Route path={cv.category[0].link} element={<Experiences/>}></Route>
              <Route path={cv.category[1].link} element={<Etudes/>}></Route>
              <Route path={cv.category[2].link} element={<Competences/>}></Route>
              <Route path={cv.category[3].link} element={<Autres/>}></Route>
              <Route path={cv.category[4].link} element={<InfoPerso/>}></Route>
            </Routes>
        </Router>
        <Footer />
      </div>
      )
  }
}

export default App;
