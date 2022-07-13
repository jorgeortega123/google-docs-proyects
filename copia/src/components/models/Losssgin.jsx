import React from "react";
import axios from "axios";
//import uniqid from 'uniqid';
//console.log(uniqid()); // -> 4n5pxq24kpiob12og9
//import Tryserver from "./Tryserver";
//import "../../components/styles/login.css";
import "../../components/styles/login.css";
import Google from "../../components/icons/google.svg";
//import GoogleAnimation from "../GoogleAnimation";
//import { GoogleLogin } from "react-google-login";
import dotenv from "dotenv";
dotenv.config();
const server = process.env.SERVER;
class Login extends React.Component {
  state = {
    show: true,
    msg: null,
    req: null,
    user: false,
    pass: false,
  };
  logingoogle = async () => {
    var respuesta = await axios.get(server + "/authgoogle");
    console.log(respuesta);
    if (respuesta.data.error === true) alert("Error" + respuesta.data.data);
    window.open(respuesta.data.web);
  };

  login = () => {
    var user_ = document.getElementById("userid").value;
    var pass_ = document.getElementById("passid").value;
    console.log(user_);
    console.log(pass_);
    if (user_ === "jorge") {
      this.setState({ user: true });
    }
    if (pass_ === "356679") {
      this.setState({ pass: true });
    }
    if (this.state.pass === true) {
      localStorage.setItem("login", "true");
      window.location.replace("/home");
    } else {
      localStorage.setItem("login", "true");
      window.location.replace("/home");
    }
  };
  giveData = async (response) => {
    console.log(response);
    const { tokenId } = response;
    //const { tokenId, profileObj } = response;
    //await localStorage.setItem("profile", JSON.stringify(profileObj));
    //await localStorage.setItem("User", true);
    alert("Success to seccion");
    console.log(response);
    const token = {
      tokenId,
    };
    const respuesta = await axios.post(
      `http://localhost:5000/api/v1/create/user`,
      token
    );
    console.log(respuesta);
    //props.setUser(true);
    //const USER=localStorage.getItem("User")
    //props.setUser(USER)
  };
  /*
  failedSeccion = (e) => {
    alert("Failed seccion" + e);
  };*/
  reles(){ 
    return (
        <div className="content-alll"> 
        <div className="text">
<h1>holad</h1>

        </div>
        
        </div>

    )
   
  }

  render() {
    return (
      <>
        {this.reles()}
      </>
    );
  }
}

export default Login;
