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
    next: false,
    sesion: false, 
    login: false
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
        this.setState({text: "ERROR"})   
      })
      var itemSiu = localStorage.getItem("sesion");
      if(itemSiu==="true"&&this.state.error===true) { 
        this.setState({text: "ERROR"})
      } else if (itemSiu==="true"&&this.state.error===false) { 
        this.setState({sesion: true})
      } else if (itemSiu==="false"&&this.state.error===false){ 
        window.location.replace("/login") 
      } else if (this.state.error===true){ 
        window.location.replace("/login")
      } else if (this.state.next===true){ 
        window.location.replace("/login")
      }
     
  }
     
  render() {
    return (
      <div>

        <div class="main-loading-screen">
          <div className="spnner-cont">
         <SpinnerInfinity size="120" speed={this.state.speed} thickness={90} />
         </div>
         <p class="title">{this.state.text}</p>
          <div class="rainbow-marker-loader"></div>
          {this.state.error&& window.location.replace("/error")}
          {this.state.login&& window.location.replace("/login")}
         {this.state.sesion&& window.location.replace("/home")}
         
        </div>
      </div>
    );
  }
}
