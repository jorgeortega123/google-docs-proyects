import React, { Component } from "react";
import axios from "axios";
const server = "http://localhost:4000"


//  localStorage.setItem("idname", idname); 
//localStorage.setItem("tokenid", e.data.data); 

export default class Filesuser extends Component {
     state={ 
          name: true
     }
     componentDidMount(){ 
          this.get()
     }

     get = async() => { 
          var [name, token] = [localStorage.getItem("idname"), localStorage.getItem("tokenid")  ]
          if (!name) this.setState({name: false})
          await axios.get(server + "/files/" + name);
     }

     
     error = () => { 

          return (
               <div className="error-files">
               <p>No tienes id de usuario para continuar</p>
               </div>
          )
     }


  render() {
    return <>
    {this.state.name===false && this.error()}
    <p>Server Res</p>
    <p>sadas</p>
    </>;
  }
}
