import React from 'react'
//import "./styles/style.scss"
import FollowRegister from "./FollowRegister"
class Start extends React.Component {
     state = {
          hola: false

        };
componentDidMount(){ 
     document.getElementsByTagName("body")[0].classList.add("body2");
     //document.body.style.setProperty("background", "linear-gradient(10deg, rgba(244,235,160,1) 43%,rgba(192,250,202,1) 43%)", "important")
     setTimeout(() => { 
          this.Das()
          }, 2000);
     setTimeout(() => { 
          document.getElementById("hola").innerHTML="";
          }, 2000);  

}
 Das() { 
     const h1 = document.getElementsByTagName("h1")[0]
     h1.style.setProperty("font-size", "rgba(20, 85, 129, 0.37);", "important")
     /*document.getElementsByTagName('body')[0].animate([
          // keyframes
          { transition: 20},
          { transform: 'translateY(0px)' },
          { transform: 'translateY(-600px)' }
        ], {
          // timing options
          duration: 1000,
        });
     document.getElementById("hola").textContent= "A"
     document.getElementsByTagName("h1")[0].animate([
          // keyframes
          { transition: 20},
          { transform: 'translateY(0px)' },
          { transform: 'translateY(-600px)' },
          {opacity: 0}
        ], {
          // timing options
          duration: 1000,
        });*/

 }
 //setTimeout(() => {  console.log("World!"); }, 2000);
 hola(){
      if (this.state.hola===false) { 
      return (
          <h1 id="asd_" className="asd"><span id="hola">Hola!!</span></h1>
      )}
      else { 
          setTimeout(() => { 
                document.getElementById("hola").innerHTML="";
                }, 17000);  
      }
 }

 render() {    
 return (

          <div id="sd_" className="sd" >
               <span>Hi there, gracias por probar la pagina ♥</span>
               <h1 id="asd_" className="asd"><span id="hola">Hola!!</span></h1>
               <FollowRegister />
               
          </div>
     )}
}
export default Start