import React, { Component } from "react";
import "../styles/home-main.css"
import "../styles/style.css"
import Settings from "../Settings";
//import Textareainput from "../Textareainput";
import Upzone from "../Upzone";
import TopicAndParemeters from "../TopicAndParemeters";
import settingIcon from "../icons/setting.svg"
import docsIcon from "../icons/docx.svg"
import homeIcon from "../icons/home.svg"


const imagendepruebaeliminarestoxdddd = "https://lh3.googleusercontent.com/a/AATXAJww30JGDFfkU_DeUo5U9V-upMcPnFoArEZKdDCZ=s96-c"
export default class Home extends Component {
  state={ 
    msg: true, 
    msgtext: "",
    configIn: false
  }
  
  msg = () =>{ 
    setTimeout(() => {
      this.setState({msg: false})
    }, 20000);
    return(
      <div className="flotante-msg">
       <p className="title-msg-home">Nuevo mensaje</p>
       <p className="text-msg-home">Hola, esto es un test para comprobabar mensajes</p>
      </div>
    )
  }
  render() {
    return (
      
      <div className="all-web-page">
         {this.state.msg && this.msg()}
         <div id="sky_" class="sky">
        <div id="stars_" class="stars" ></div>
        <div id="stars1_" class="stars1" ></div>
        <div id="stars2_" class="stars2" ></div>
        <div id="stars3_" class="shooting-stars" onclick="alert('SIUUUUUUUUU')"></div>
    </div>

        <div className="navbar-left">
          <div className="home-class-user-img">

          <div className="flex flex-wrap gap-x-2 gap-y-2 justify-center mt-1">
		<div className="relative flex-shrink-0">
			<span className="absolute bottom-0 right-0 w-4 h-4 dark:bg-green-600 border rounded-full text-gray-100 border-gray-900"></span>
			<img src={imagendepruebaeliminarestoxdddd} alt="" className="w-12 h-12 border rounded-full bg-gray-500 border-gray-700" />
		</div> 
    </div>
           
          </div>
          {
            //<img className="home-user-img" src={imagendepruebaeliminarestoxdddd}alt="" />
          //<p className="emoji-setting" onClick={()=>this.setState({configIn: true})}></p>
          }
              <img src={homeIcon} className="svg-home" alt="" style={{width: "50px"}} />
          <img src={settingIcon} alt="" style={{width: "50px"}} />
          
               <p>sads</p>
               <p>sads</p>
               <p>sads</p>
               <p>sads</p>
        </div>
        <div className="home-no-navbar">
          {this.state.configIn && <Settings />}
        <Upzone />
          <TopicAndParemeters />

        </div>
      </div>
      
    );
  }
}
