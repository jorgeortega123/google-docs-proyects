import React, { useState, useEffect } from "react";
//import DisableWallpaper from "./DisableWallpaper";
import GetMateriasWords from "./GetMateriasWords";
import axios from "axios";
//import dotenv from ("dotenv")
//import DeberMatWords from './DeberMatWords';
import dotenv from "dotenv"
dotenv.config()
const server = process.env.SERVER

export default function Options() {
     const [archivo, Setarchivo] = useState([])
     const [timee, Setimee] = useState(false)
  const [val, valedit] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("select");
    return saved;
  });

  useEffect(() => {
    // storing input name
    // eslint-disable-line react-hooks/exhaustive-deps
    //eslint-disable-next-line
    localStorage.setItem("select", val); 
    //eslint-disable-next-line
// eslint-disable-line react-hooks/exhaustive-deps
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  
  
  function siono(as) {
    if (as === val) {
      return true;
    } else {
      return false;
    }
  }

  function getasd(m)  { 
       valedit(m) 
       
       ///mtr/mtr/:id
      /* 
       axios.get(server  + '/mtr/' +m).then((res => { Setarchivo(res.data) })).catch((err) => {
        document.getElementById("msgid").classList.add("msg");
        document.getElementById("msg-contentid").classList.add("msg-content");
        document.getElementsByClassName("msg-content")[0].textContent = "Servidor out: " + err
        */
      /*  if (timee===true) { 
        setTimeout(() => {
          Setimee(true)
          document.getElementsByClassName("msg-content")[0].textContent = ""
          document.getElementById("msgid").classList.remove("msg");
          document.getElementById("msg-contentid").classList.remove("msg-content"); 
        }, 15000) } else { 
          Setimee(false)
        }
*/
         }
      

       //onChange={(e) => getasd(e.target.value) 
  
  console.log(getasd)
  return (
    <React.Fragment>
      {//<div id="multiple_select">
}
        <select id="drawfs" onChange={(e) => getasd(e.target.value) }>
          <option value="Español" selected={siono("Español") || false}>
            Lengua y Literatura
          </option>
          <option value="Historia" selected={siono("Historia") || false}>
            Historia
          </option>
          <option value="Matemáticas" selected={siono("Matemáticas") || false}>
            Matemáticas
          </option>
          <option value="Biología" selected={siono("Biología") || false}>
            Biología
          </option>
          <option value="Química" selected={siono("Química") || false}>
            Química
          </option>
          <option value="Física" selected={siono("Física") || false}>
            Física
          </option>
          <option value="Inglés" selected={siono("Inglés") || false}>
            Inglés
          </option>
          <option value="ToK" selected={siono("ToK") || false}>
            Teoria del Conocimiento
          </option>
          <option
            value="Emprendimiento"
            selected={siono("Emprendimiento") || false}
          >Emprendimiento</option>
          <option
          value="Investigación"
          selected={siono("Investigación") || false}
          >Investigación
          </option>
        </select> 
      {//</div>
}
    {//} <GetMateriasWords materia={val} archivo={archivo} />
}
    </React.Fragment>
  );
}
