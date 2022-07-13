import React, {useState,useEffect} from 'react'
import axios from "axios"
//import vectorlogo from '../components/icons/vector.svg';
const base_url = 'http://localhost:4000/data.json'
 const Tryserver = () =>{

         
      useEffect(()=>{
          const getData=async()=>{
               try{
                    const {data}=await axios.get(base_url);
                    setServer(data);
                    console.log("get data suceesfull")
                    setError(true)
               }
               catch(e){
                    console.log("failed server",e)
                    console.log(server)
                    setError(false)
               }
           } 
           getData();
           //eslint-disable-next-line
           // eslint-disable-line react-hooks/exhaustive-deps
      },[])   // eslint-disable-line react-hooks/exhaustive-deps
      const [server,setServer]=useState("")
      const [error,setError]=useState(false)
      document.getElementsByTagName("body")[0].classList.remove("body2");
      document.getElementsByTagName("body")[0].classList.add("body2");
      // <img src={vectorlogo} alt="" class="img-alert" />
               if (!error) { 
                    return (
                         
                    <React.Fragment> 
                         <p  class="span_user"><span id="erroserr" >No se hallaron servidores en la red 💔</span></p>
                          {window.location.replace("/error")
                         
               </React.Fragment>)

               } else { 
                    return (<p>Servidor en linea</p>)
               }

  } 
export default Tryserver 