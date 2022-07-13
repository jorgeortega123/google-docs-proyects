import React, { Component } from 'react'
import "../../components/styles/login.css";
import Googlee from "../../components/icons/google.svg";
import axios from "axios";
//import dotenv from "dotenv";
//dotenv.config();
const server = "http://localhost:4000"
//import { google } from 'googleapis';
export default class Loggin extends Component {
     state={ 
          
          obtuvoenlaceGoogle: true,
          detallesError: "",
          googleLink: "", 
          error: false, 
          errorshow: "",
          inputUser: null,
          inputPass: null,

     }

     mostrarerror(){ 
           return(
                <p>{this.state.detallesError}</p>
           )
     }
     users = () => { 
          var user = this.state.inputUser
          var pass = this.state.inputPass

          if (user===null&&pass===null){ 
               this.setState({detallesError: "Completa todos los datos"})
          } 
     }

     logingoogle = async () => {

         /*await  axios.get(server  + "/authgoogle")
          .then((res => { this.setState({googleLink: res.data})}))
          .catch((err) => { 
               console.log(err)
               */
            try {
               var respuesta = await axios.get(server + "/authgoogle");
               console.log(respuesta);
               if (respuesta.data.data.error === true) alert("Error" + respuesta.data.data);
               window.open(respuesta.data.data)

            } catch (err) {
                 document.getElementById("algohaidomall").innerHTML = err
            }

        };


     render() {
          return (
               <div className='all-login-container'>
                    <div className='login-title'><p>Inicia sesión o regístrate</p> </div>
                    <div className='login-google'>
                       </div>  
                         <p className='labe-google'>Docs For Classroom </p>
                         <div className='google-eelgant'> 
                         <img onClick={()=>this.logingoogle()} className='googlesvg' src={Googlee} alt="googlesvg" />
                         
                         <img onClick={()=>this.logingoogle()} className='login-img-onHover' src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png" alt="" />
                         </div>
                         


                         <div className='GOOOGLE_CENTER'>

                         <div className="google-btn">
  <div className="google-icon-wrapper">
    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
  </div>
  <p className="btn-text"><b>Sign in with google</b></p>
</div>
</div>



                        
                    
                    <div className='login-user-pass'>
                         <div className='login-user'>
                              <p className='text-input-login'>Usuario:</p>
                              <input 
                              onChange={(e) => this.setState({inputUser: e })}
                              className='login-input-user' type="text" />
                         </div>
                         <div className='pass-user'>
                              <p className='text-input-login'>Contraseña:</p>
                              <input 
                              onChange={(e) => this.setState({inputPass: e })}
                              className='login-input-pass' type="text" />
                         </div>
                         {//<button onClick={()=> this.users()} className='login-user-pass-button'>Entrar</button>
                         }
                         <div onClick={()=> this.users()} className={"Login-nutton"}><p>Ingresar</p></div>
                         <div className='algohaidomall'>
                         <p id='algohaidomall'>{this.state.detallesError}</p>
                         {//!this.state.detallesError && <p>{this.state.detallesError}</p>}
     }
                   </div>

                    
                    </div>
               </div>
          )
     }
}
