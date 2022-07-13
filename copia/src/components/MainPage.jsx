import React, {useState} from "react";
import axios from 'axios'
//import { render } from "react-dom";
import dotenv from "dotenv"
dotenv.config()
const server = process.env.SERVER

 export default function  MainPage() {

  const [valbtn, btn] = useState((false)) 
 function SENDSERVER() { 
   var htl = document.getElementById("consola_text").value
  document.getElementById("novedad_").innerHTML = "Procesando petición..." 
  document.getElementById("ServerRes").innerHTML = "Procesando petición..." 
        btn(true)
      if (htl === "") {
        document.getElementById("novedad_").innerHTML = "Parametro invalidos" 
        document.getElementById("ServerRes").innerHTML = "Parametro invalidos" 
      }else { 

        const htl = document.getElementById("consola_text").value;
        var request = new XMLHttpRequest();
        request.open("POST", server + "post", true);
        request.setRequestHeader(
          "Content-Type",
          "application/json; charset=UTF-8"
        );
        request.send(htl);
        document.getElementById("novedad_").innerHTML = "Petición enviada al servidor" 
        document.getElementById("ServerRes").innerHTML = "Petición enviada al servidor" 
      btn(false)
      }
  }
    function STARTFOLDER() { 
      var m = document.getElementById("drawfs").value
      axios.get(server + "/start/" +m ).then((res => {document.getElementById("ServerRes").innerHTML = res.data})).catch((err) => {
        document.getElementById("ServerRes").innerHTML = "Some error " + err
         })
    }

  return ( 
     <React.Fragment>
      <div onClick={SENDSERVER} id={"Serverbtn"} disabled={valbtn|| false}> 
       <p>Generar doc</p>
       
      <img class="doc-icon" src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Icon-doc.svg"/>
      </div>
      {//<button onClick={STARTFOLDER}>Abrir caprte</button>
  } </React.Fragment>
  );

  };
