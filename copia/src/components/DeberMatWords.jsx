import React,{useState} from 'react'
 
 function DeberMatWords(m) {
 var data=[]  


fetch('http://localhost:4000/mtr/' + m ).then(response => {
  return response.json();
}).then(dataa => { data = dataa 
}).catch(err => {
  document.getElementById("ServerRes").innerHTML = "No se pudo obtener datos"
});
 var array= data.replace(/;/g, " ") 
 var ConveJson = array.split(" ")
 let fisrt = ConveJson[0]
 let twooo = ConveJson[1]
 let three = ConveJson[2]
 let Fouur = ConveJson[3]
 let Fivee = ConveJson[4]
 console.log(data);

function StartCsm(ma) { 
          fetch('http://localhost:4000/open/'+ m + '/' + ma ).then(response => {
            return response.json();
          }).then(data => {
               document.getElementById("ServerRes").innerHTML = "Siuuuuuuuuuu" + data
          }).catch(err => {
            document.getElementById("ServerRes").innerHTML = "No se pudo obtener datos" +err
          }); } 
          

     return (
          <div>
             <p onlick={()=> StartCsm(fisrt)}>{fisrt}</p> 
             <p onlick={()=> StartCsm(twooo)}>{twooo}</p> 
             <p onlick={()=> StartCsm(three)}>{three}</p> 
             <p onlick={()=> StartCsm(Fouur)}>{Fouur}</p> 
             <p onlick={()=>StartCsm(Fivee)}>{Fivee}</p> 
          </div>
     )
}
export default DeberMatWords