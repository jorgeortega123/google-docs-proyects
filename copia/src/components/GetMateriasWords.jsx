import React from "react";
//import axios from "axios";
//const base_url = "http://localhost:4000";

const GetMateriasWords = ({ archivo, materia}) => {
  /*
 function renders() { 
  var array = archivo.toString().replace(/;/g, " ");
  var ConveJson = array.split(" ");
  var st1=""
  var st2=""
  var st3=""
  var st4=""
  var st5=""

  if (ConveJson[0]!=="") {
    st1 = (
  <p onClick={() => StartCsm(ConveJson[0])}>
  {ConveJson[0].substring(23, 58)}</p>)}


  else if (ConveJson[1]!=="") {
    {st2 = (
      <p onClick={() => StartCsm(ConveJson[1])}>
      {ConveJson[1].substring(23, 58)}</p>)}
   }
  else if (ConveJson[2]!=="") {  st3 = (
    <p onClick={() => StartCsm(ConveJson[2])}>
    {ConveJson[2].substring(23, 58)}</p>) }
  else if (ConveJson[3]!=="") {
    {st4 = (
      <p onClick={() => StartCsm(ConveJson[3])}>
      {ConveJson[3].substring(23, 58)}</p>)}
   }
  else if (ConveJson[4]!=="") {
    {st5 =  (
      <p onClick={() => StartCsm(ConveJson[4])}>
      {ConveJson[4].substring(23, 58)}</p>)}
   }else { 
     return ( 
    <p> ERROR </p>) 

   }
    return ( 
      st1 + st2 + st3 + st4 + st5 
    )
  } 
/*
  <p onClick={() => StartCsm(json_res.a)}>
          {json_res.a.substring(23, 58)}
        </p>
        <p onClick={() => StartCsm(json_res.b)}>
          {json_res.b.substring(23, 58)}
        </p>
        <p onClick={() => StartCsm(json_res.c)}>
          {json_res.c.substring(23, 58)}
        </p>
        <p onClick={() => StartCsm(json_res.d)}>
          {json_res.d.substring(23, 58)}
        </p>
        <p onClick={() => StartCsm(json_res.e)}>
          {json_res.e.substring(23, 58)}
        </p>
 /* const [fi1, Setuno] = useState([null])
  const [dos, Setdos] = useState([null])
  const [tre, Settre] = useState([null])
  const [cua, Setcua] = useState([null])
  const [cin, Setcin] = useState([null])
  //const [material, Setmaterial] = useState([])
  var element = document.getElementById("Wordlist");
  if (typeof element !== "undefined" && element !== null) {
    document.getElementById("Wordlist").value = "";
  }
  
 /* function Start() { 
     var totalL = ConveJson.length 
     var total = totalL -1 
     for (let i= 0; ConveJson[0] < total; i++) { 
       
     }  

  
  function StartCsm(ma) {
    //app.get('/:method/:mtr/:archivo',  router)
    axios
      .get(base_url + "/open/" + materia + "/" + ma)
      .then((res) => {
        document.getElementById("ServerRes").innerHTML = res.data;
      })
      .catch((err) => {
        document.getElementById("ServerRes").innerHTML = "Servidor out: " + err;
      });
  }

  /* function getmaterials(m)  { 
          axios.get(base_url + '/mtr/mtr' +m).then((res => { Setmaterial(res.data) })).catch((err) => {
           document.getElementById("ServerRes").innerHTML = "Servidor out: " + err
            })}

      var jsona1 = ConveJson[0]
      var jsona = jsona1.substring(10, 15) 
      console.log(jsona)
      var jsonb1 = ConveJson[1]
      var jsonb = jsonb1.substring(10, 15)
    var jsonc1 = ConveJson[2].substring(10, 15) 
     var jsond1 = ConveJson[3].substring(10, 15)
    var jsone1 = ConveJson[4].substring(10, 15)
  if (
    json_res.a === false &&
    json_res.b === false &&
    json_res.c === false &&
    json_res.d === false &&
    json_res.e === false
  ) {
    return false;
  } else {*/
    return (
      <div id="Wordlist">
        <div id="materiallist"></div>
      </div>
    );
  
};

export default GetMateriasWords;
