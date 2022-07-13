import pkg from "express";
import fs from "fs";

//import json from "./users/user.json"
const [userss, formAnswerss, msgg] = [
  "./src/components/users/user.json",
  "./src/components/userPremium.json",
  "./src/components/users/mensajes.json",
];
const [rawdata, rawdata1, rawdata2] = [
  fs.readFileSync(userss),
  fs.readFileSync(formAnswerss),
  fs.readFileSync(msgg),
];
const [userso, formAnswers, msg] = [
  JSON.parse(rawdata),
  JSON.parse(rawdata1),
  JSON.parse(rawdata2),
];
const web = "./eneableThings.json";
const users = userso.users;
const premium = formAnswers.premium;
const mensaje = msg.premiumUp;
const folder = "./src/components/users/";
const page = pkg.Router();
/*
//   PARA EDITAR UN JSON FILE SIUUUUUUUUUUUUU  //////
fs = require('fs');
var name = 'fileName.json';
var m = JSON.parse(fs.readFileSync(name).toString());
m.forEach(function(p){
    p.name= m.name;
});
fs.writeFileSync(name, JSON.stringify(m));


////////////////////////////////////////////////////////
// AGREGAR A JSON 

var json = '{"hola":"ciao"}';

//Parse the JSON: convert it into an object
var parsedJson =JSON.parse(json);

//add whatever you want
parsedJson.hi = 'bye';

Object {hola: "ciao", hi: "bye"}

*/

page.get("/form/:user", (req, res) => {
  var user = req.params.user;
  console.log(user);
  var folderUser = folder + user;
  console.log(folderUser);
  console.log(1);
  var jsongoogle = folderUser + "/google.json";
  console.log(2);
  var jsonuser = folderUser + "/user.json";
  console.log(3);
  if (fs.existsSync(folderUser)) {
    console.log(4);
    var [namegoogle, userroot] = [
      fs.readFileSync(jsongoogle),
      fs.readFileSync(jsonuser),
    ];
    console.log(userroot);
    res.send({
      error:false, 
      data: JSON.parse(userroot)
    });
  } else {
    res.send({
      error: true,
      data: "No se econtro el usuario",
      code: 104,
    });
  }
});

page.get("/home/:user", (req, res) => {
  var user = req.body;

  res.json({
    web: web,
  });
});

page.post("/formuser", (req, res) => {
  var user = req.body;
});
page.post("/edit/:user", (req, res) => {
  var userEdit = req.params.user;
  var dataUser = req.body.data.data;
  if (!dataUser) {
    res.json({ error: true, data: "No hay datos" });
  }
  if (dataUser.id == !dataUser) {
    res.json({ error: true, data: "Datos no coinciden" });
  }
  if (!fs.existsSync(folder + userEdit)) {
    res.json({
      error: true,
      data: "No se encontro la carpeta del usuario",
      extra: 204,
    });
  }
  var name = folder + userEdit + "/user.json";
  var doc = folder + userEdit + "/docx.json";

  // obj.subs[0].m.create
 
  try {
    var m = JSON.parse(fs.readFileSync(name).toString());
    m.info.nombre = dataUser.Name + dataUser.SecondName;
    m.defaultjson.curso = dataUser.Curso;
    m.defaultjson.plantel = dataUser.plantel;
    m.defaultjson.sub = dataUser.sub;
    var l = dataUser.sub.length 
    var o = ""
    for (var i =0; i<l; i++  ) { 
          o.concat({ 
            "materia": { 
            "id": dataUser.sub[i], 
            "create": []
       }
       })
 }
     obj = { 
    "docs": [],
    "subs": { 
      m: [
        JSON.stringify(o)
        ]
    }
   }
    fs.writeFileSync(name, JSON.stringify(m));
    fs.writeFileSync(doc, JSON.stringify(obj));
    
    res.json({error: false, data:"Datos actualizados correctamente", extra: 100})
  } catch (error) {
    res.json({error: false, data:"No se escribieron de manera correcta los datos" + error, extra: 101})
  }
  // AL PRINCIPIO SE ENCUENTRA LA DOCUMENTAICON PARA EDITAR .JSON
});



export default page;
