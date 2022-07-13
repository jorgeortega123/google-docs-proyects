import fs from "fs"

//ADVERTENCIA 
// LA CREACIÖN DEL ARCHIVO PARA EL BACKEND DEBE SER OTRA QUE LA MODIFICACIÖN 

//NO VALDRá AGREGAR LA INFORMACIóN SI ANTES DEL OBJETO NO EXISTE UN ARRAY 
// PARA AGREGAR UN OBJETO DEBES PONER [ { objeto: "modificar"}]
//ES DECIR SI QUIERO AGREAGAR INFORMACIÓN {data: {}}
// DEBO PONER LLAVE [{data: {[]}}]
// ADEVERTENCIA SI ESTA EN UN ARRAY [ ]
// SE PODRA AGREGAR INFORMACIÖN, CON EL PUSH()



var obj =  JSON.parse(fs.readFileSync("eliminar.json").toString())
let newData = [
  { 
  
}
]
console.log(obj)
obj.matters.m.push( {  
  "materia": "Matematicas",
  "create": [
    { "t": ""title"s", "l": "links" },
    { "t": ""title"s", "l": "links" }
  ]

} 

  );
  var obje = JSON.stringify(obj);
fs.writeFileSync("eliminar.json",obje,"utf-8");



// CREANDO OBJETO PLANTILLA CUANDO EL USUARIO DESIGNE LAS MATERIAS
obj = { 
  //NOTA: se debe crear un "m" por cada ASIGNATURA
 "docs": [],
 // LA INFORMA EN EL DOCS, debe ser: 
 //  { "id": "link", "topic": "tema", "sub": "materia", d:"fecha" }
 subs: [{ 
   m: { 
     materia:  { 
       name: "nomre de materia", 
       create: [ ]
     }

   }
 }]
}
//Manipulando y agregando el contenido 
var obj =  JSON.parse(fs.readFileSync("docx.json").toString())
//Para agregar a docs: 
obj.docs.push( {  
   id: "link", 
   topic:"tema", 
   sub:"materia", 
   d:"fecha" 
});
// Para agregar al archivo de la materia: 


var newJson= JSON.stringify(obj);
fs.writeFileSync("docx.json", newJson,"utf-8");


/*
//    PUT 
obj.matters.push( {  
  m: { 
    materia: "Matematicas", 
    create: [{ 
      t: ""title"", 
      l: "link"
    }]
  }
 } 
 



/*

var obj =  JSON.parse(fs.readFileSync("eliminar.json").toString())
let newData = [
  { 
  
}
]
console.log(obj.docs)
obj.docs.push( {  
  id: "ASDAD", 
  topic: "ASDASD", 
  sub: "SADASDASD", 
  sad: "ASD"
} 

  );
  var obje = JSON.stringify(obj);
fs.writeFileSync("eliminar.json",obje,"utf-8");




/*
fs.writeFileSync(
  "eliminar.json",
  JSON.stringify({
    docs: [
      {
        id: "asd",
        topic: "t",
        sub: "materia",
      },
    ],
  }),(err) => {
    if (err) console.log("SAd") 
    console.log("asd")
    });

*/










/*


    CODIGO QUE REMPLAZA CODIGO 
 

var m = await JSON.parse(fs.readFileSync("docs.json").toString());
// Nombre titulo de la materia "MATEMATICAS"
var s  = m.body.content[1].paragraph.elements[0].textRun.content 
// NOmbre "JORGE ORTEGA"
var a  = m.body.content[2].paragraph.elements[1].textRun.content 
// curso "3ro FGI A"
var b  = m.body.content[2].paragraph.elements[3].textRun.content 
// FECHA "21/01/2022"
var z  = m.body.content[2].paragraph.elements[5].textRun.content 
//TEMA "Influecnia de: "
var y  = m.body.content[3].paragraph.elements[1].textRun.content 
//titutlo del docuemt "Jorge ortega 3ro fgi  A Matematicas , etc..."
var t = m."title" 
//id del docuemto 
var i = m.documentId




console.log("1" + s )
console.log("2" + a )
console.log("3" + b )
console.log("4" + z )
console.log("5" + y )

console.log("7 " + t )
console.log("8 " + i ) */
