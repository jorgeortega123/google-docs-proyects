import React, { useState, useEffect }  from 'react';



const Textareainput= () => {
  const [name, setName] = useState(() => {
    // getting stored value
    
    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);
 /////////////////

 
 //let backdrop = document.querySelector(".backdrop");

  
/*
 function changeColor(tex) { 
const colorMap = {"TOK": "red", "market": "green", "banana": "orange"};
 let textareas = document.getElementById("anotaciones");
 let customArea = document.querySelector(".custom-area");


  setName(tex)
    customArea.innerHTML = applyColors(textareas.value);
  
  function applyColors(text)
  {
      let re = new RegExp(Object.keys(colorMap).join("|"), "gi");
  
      return text.replace(re, function(m)
      {
          let c = colorMap[m.toLowerCase()];
          return `<spam style="color:${c}">${m}</spam>`;
      });
  }
}*/



  ////////////////

 return ( 
  <div class="containera">
    <div class="backdrop">
    <div class="custom-area"></div>
    <div id="anotacionesContenedor">
      </div>
      <textarea
        id="anotaciones"
        spellcheck="false"
        type="text"
        value={name}
        highlight={"TOK"}
        onChange={(e) => setName(e.target.value)}
        placeholder="Write"
        aria-label={"fullname"}
      />
      <div id="containerAllServerRes">
        <p id="TitleServerRes">Respuestas del servidor:</p>
        <p id="ServerRes" />
      </div>
    </div>
    </div>

  );
}
export default Textareainput;
