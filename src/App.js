import React, { Component } from 'react';
import './App.css';
import Box from './Box';
import Chiffre from './chiffres';
import Lieu from './lieu';
import tunis from './amine.jpg';
import sousse from './sousse.jpg';
import sfax from './sfax.jpg';
class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="h1">Nos programmes</h1>
        <div className="box">
          <div className="full">
            <Box title="FULL TIME PROGRAM" gender="male" des="FULL TIME PROGRAMFULL TIME PROGRAMFULL TIME PROGRAMFULL TIME PROGRAMFULL TIME PROGRAMFULL TIME PROGRAMFULL TIME PROGRAMFULL TIME PROGRAMFULL TIME PROGRAMFULL TIME PROGRAMFULL TIME PROGRAM" />
          </div>
          <div className="part">
            <Box title="PART TIME PROGRAM" gender="female" des="PART TIME PROGRAMPART TIME PROGRAMPART TIME PROGRAMPART TIME PROGRAMPART TIME PROGRAMPART TIME PROGRAMPART TIME PROGRAMPART TIME PROGRAMPART TIME PROGRAMPART TIME PROGRAMPART TIME PROGRAMPART T" />
          </div>
          <div className="kids">
            <Box title="KIDS CODING PROGRAM" gender="male" des="KIDS CODING PROGRAM KIDS CODING PROGRAM KIDS CODING PROGRAM KIDS CODING PROGRAMKIDS CODING PROGRAM KIDS CODING PROGRAM KIDS CODING PROGRAM" />
          </div>
          <div className="summer">
            <Box title="SUMMER ACADEMY" gender="female" des="SUMMER ACADEMYSUMMER ACADEMYSUMMER ACADEMYSUMMER ACADEMYSUMMER ACADEMYSUMMER ACADEMYSUMMER ACADEMYSUMMER ACADEMYSUMMER ACADEMYSUMMER ACADEMY" />
          </div>
        </div>

        <div className="numbers">
          <h1 className="h1">Quelques chiffres</h1>
          <div className="number1">
            <Chiffre number="+20.000" gender="male" des="passionnés du digital" />
          </div>
          <div className="number2">
            <Chiffre number="+500" gender="female"des="étudiants en août 2016" />
          </div>
          <div className="number3">
            <Chiffre number="+300" gender="male" des="produits développés" />
          </div>
          <div className="number4">
            <Chiffre number="+30" gender="female" des="instructeurs game, Web et mobile" />
          </div>
          <div className="number5">
            <Chiffre number="+50" gender="male" des="SPEAKERS" />
          </div>
          <div className="number6">
            <Chiffre number="400m2" gender="female" des="de hackerspace au coeur du lac" />
          </div>
        </div>

        <div className="place" gender="male" style={{display: "flex"  }}>
        
          <div className="tunis">
            <Lieu pic={tunis} gender="female" detail="Tunis" />
          </div>
          <div className="sousse">
            <Lieu pic={sousse} gender="male" detail="Sousse" />
          </div>
          <div className="sfax">
            <Lieu pic={sfax} gender="female" detail="Sfax" />
          </div>
        </div>

      </div>
      
    );
  }
}
export default App;