import React, { Component } from "react";
import {SpinnerInfinity} from 'spinners-react';
import axios from "axios";
//import { Navigate } from 'react-router-dom';
import "../styles/loading-screen.css"
import dotenv from "dotenv"
dotenv.config()
const server = process.env.SERVER
export default class Loading extends Component {
  state = { 
    speed: 150,
    text: "Cargando",
    error: false,
    next: false
  }
     componentDidMount(){ 
     document.getElementsByTagName("body")[0].classList.add("main-screen");
     this.loadig()
     }

      

    loadig=async()=> { 
      //document.getElementsByClassName("title").innerText = this.state.text
      await axios.get(server  + '/page')
      .then(() => this.setState({next: true}))
      .catch(() => {
        this.setState({error: true})
        this.setState({text: "ERRO"})   
      })
     
     
    
  }
     
  render() {
    return (
      <div>
     
     <p>EEROR</p>
      </div>
    );
  }
}
