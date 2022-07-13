import fs from "fs"
var obj =  JSON.parse(fs.readFileSync("eliminar.json").toString())
var m = "Matematicas"
var l = obj.s.length
var e = obj.s[0].materia.create
console.log(l)
for (var i =0; i<l; i++  ) { 
     console.log(obj.s[i].materia.id)
     if(m===obj.s[i].materia.id){ 
               data = i 
     } 
      console.log(i, l)
}
if (data===null){ console.log("ERRRO")}



/*
e.push( {  
     id: "link", 
     topic:"tema", 
     sub:"materia", 
     d:"fecha" 
  });
  var newJson= JSON.stringify(obj);
  fs.writeFileSync("eliminar.json", newJson,"utf-8");

console.log(m + e)
if (m===e) { 
     console.log("Si")
} else { 
     console.log("No")
}
*/