import React from 'react'
import axios from "axios"
import { useState, useEffect  } from 'react';
import "../styles/error-screen.css"
import dotenv from "dotenv"
dotenv.config()
//const server = process.env.SERVER
function Error() {
  const [server, setserver] = useState(false)
useEffect(() => {
  Comrp()
})
 const onclickwhast = () => { 
  window.open('https://wa.me/593962716235?text=Hola%20estoy%20interesado%20en%20el%20funcionamiento%20de%20la%20pagina%20web','Data','height=550,width=350');
 }

 const Comrp = async() => {
  await axios.get(server  + '/page')
  .then(() => setserver(true))
  .catch(() => {
    setserver(false) 
  })
 }
 if(server===true) { 
  window.location.replace("/login")
 } else { 

 

     return (
        <div class="main-loading-screenn">
<div class="text-error">
  <div className='error-server-text1'>ERROR</div>
  <h1>404</h1>
  <br/>
  <div className='error-server-text'>El servidor no envió ninguna respuesta</div>


</div>

<div class="astronaut">
  <img src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png" alt="" class="src" />
</div>
<div className='sdsss'>Si desea contactar con el administrador de la pagina puede escribir al número personal:<mark onClick={onclickwhast} className='mark-error'>+593 962 716 235 </mark> 
  <p  id="paarafoerror" onClick={onclickwhast}>O puede dar click aquí</p>
</div>
        </div>
      
     )}
}

export default Error
