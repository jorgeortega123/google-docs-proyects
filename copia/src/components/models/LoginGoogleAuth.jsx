import React, { Component } from "react";
import axios from "axios";
import {SpinnerInfinity} from 'spinners-react';
import "../styles/authgoogle.css"
const server = "http://localhost:4000";
export default class LoginGoogleAuth extends Component {
  state = {
    code: [],
    text: [],
    charge: false,
    charged: false,
    sucess: false
  };
  componentDidMount() {
   this.res()
    // -> "front"
  }
  res = async() => { 
     var qs = (function (a) {
          if (a === "") return {};
          var b = {};
          for (var i = 0; i < a.length; ++i) {
            var p = a[i].split("=", 2);
            if (p.length === 1) b[p[0]] = "";
            else b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
          }
          return b;
        })(window.location.search.substr(1).split("&"));
        var codee = qs.code;
        this.setState({ code: codee });
        this.setState({ charge: true });

        await this.asd(codee); 
  }

  asd = async(codee) => {
    if(!codee) {this.setState({text: "Invalid Arguments"})}
    console.log(codee);
    if (this.state.charge === true) {
      console.log(codee);
      const sad = async () => {
        console.log(server + "/loginid/?code=" + codee);
        await axios.get(server + "/loginid/?code=" + codee)
          .then((datos) => {
            console.log(datos)
            document.getElementById("text").innerHTML = JSON.stringify(datos)
            this.send(datos)
          })
          .catch((err) => {
            console.log("AERORRO" +err );
          });
        //if(respuesta.data.error===true){return ({error: true, data: respuesta.data.data})} else {
      };
      const constres = await sad();
    } else {
      return;
    }
  };

  send = async(d) => {  
    console.log(d.data)
    console.log(d.data.data + "DATA DATA")
    if (!d) alert("Error: Datos negados")
    await axios.post(server + "/beforeform", { 
       data: d.data
    }).then((res) => {
      console.log(res)
      var pdg = JSON.parse(res)
      document.getElementById("textt").innerHTML = JSON.stringify(pdg)
      //if(pdg.data.extra===123) 
      this.follow(pdg)
      /*this.setState({ text: "da"[datos.data.data] });
      this.setState({ charged: true });
      return { error: false, data: datos.data.data };*/
    })
    .catch((err) => {
      this.setState({text: "Invalid Arguments"})
    });
  }
 follow = (e) => { 
  var idname = e.data.extra
  //idname.replace(/@gmail.com/, "") 
  localStorage.setItem("idname", idname); 
  localStorage.setItem("tokenid", e.data.data); 
  window.location.replace("/form") 
 }
 
  render() {
    return (
      <div className="contain-token">

        <div className="spinners-logingoogle">
             {<SpinnerInfinity className="spinner" size="120" thickness={110} сolor="rgb(235, 246, 246);" speed={170} />}
        </div>
        <p> Verificando aprovación...</p>
     
        {/*
        !this.state.charged ? (
          <div><p id="text">{this.state.text}</p>
        <p id="textt"></p>
        </div>
        )
      }*/
    }
    


      </div>
    );
  }
}
