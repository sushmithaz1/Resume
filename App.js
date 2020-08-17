import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Comp1 from './components/comp1';
import pic from './pic.jpg';
import linkedin from './linkedin.png';
import { findByLabelText } from '@testing-library/react';
import Education from './components/education';
import Projects from './components/projects';

export default class App extends Component{
  constructor(){
    super();
    this.state={
      width:800
    }
  }
 
  render(){
  return (
    <table align="center" >
      
      <tr >
        <div align="left">
          <td>
          <h1 align="center">Resume</h1>
          <h4 align="center">Sushmitha R</h4>
          <p align="center">---------------&nbsp;&nbsp;&nbsp;Skills&nbsp;&nbsp;&nbsp;---------------</p>
            <Comp1/></td>
          </div>
          <td  rowSpan="4" valign="top"><img src={pic}  alt="logo" height="100" width="100"  />
          <br/> <p>&nbsp;&nbsp;Sushmitha R
          <br/>&nbsp;&nbsp;&nbsp;&nbsp;Fresher
          <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.linkedin.com/in/sushmitha-sush-629113156"><img src={linkedin} height="20" width="20"/></a></p>              
          </td>
      </tr>
      <p align="center">---------------&nbsp;&nbsp;&nbsp;Education&nbsp;&nbsp;&nbsp;---------------</p>
      <tr>
        <div align="left">
        <td><Education/></td>
        </div>
      </tr>
      <p align="center">---------------&nbsp;&nbsp;&nbsp;Projects&nbsp;&nbsp;&nbsp;---------------</p>
      <tr >
        <div align="left">
        <td><Projects/></td>
        </div>
      </tr>
      <p align="center">---------------&nbsp;&nbsp;&nbsp;Contact&nbsp;&nbsp;&nbsp;---------------
      <br/><p align="center"><a href="https://www.linkedin.com/in/sushmitha-sush-629113156"><img src={linkedin} height="20" width="20"/></a>  </p>
      </p>
    
    </table>

  );
}
}


