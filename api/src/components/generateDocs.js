import pkg from "express";
import fs from "fs";
import { google } from "googleapis";
const docsX = pkg.Router();
const folder = "./src/components/users/";
const template = "./src/components/docs.json";
var credentials = JSON.parse(fs.readFileSync("./credentials.json").toString())
docsX.post("/docs/v1/create", async (req, res) => {
  var UserData = req.body.data.data;
  console.log(UserData)
  //var userJson = folder + "user.json";
  var User = folder + UserData.id;
  console.log(User)
  if (!fs.existsSync(User)) {
    res.json({ data: "", extra: 204 });
    return ({ data: "", extra: 204 });
  }
  // cargar datos desde el frontend
  var [materia, nombre, curso, fecha, tema, id] = [
    UserData.sub,
    UserData.name,
    UserData.curso,
    UserData.date,
    UserData.topic,
    UserData.id,
  ];
  var UserDocs = folder + id + "/docx.json";
  // comprobar token
  console.log(folder + id + "/token.json")
  var authh = folder + id + "/token.json";
  if (!fs.existsSync(authh)) {
    res.json({ data: "Token de usuario no encontrando", extra: 102 });
    return false 
  }
  if (!fs.existsSync(UserDocs)) {
    res.json({ data: "No se econtro información del usuario", extra: 102 });
    return false 

  }
  var tokenJson = JSON.parse(fs.readFileSync(authh).toString())
  var obj =  JSON.parse(fs.readFileSync(UserDocs).toString())
  var materiaComprobada = null 
  var l = obj.subs.m.length
        for (var i =0; i<l; i++  ) { 
          if(obj.subs.m[i].materia.id===UserData.sub) { 
            materiaComprobada = i
          }
     }; 
     if (materiaComprobada === null ){ res.json({ data: "Materia no encontranda", extra: 111 }); return false}
   const {client_secret, client_id, redirect_uris} = credentials.web;
   console.log(client_id)

   const oAuth2Client = new google.auth.OAuth2(
       client_id, client_secret, redirect_uris[0]);
        fs.readFile(authh, (err, token) => {
          if (err) return console.log("reres")
          oAuth2Client.setCredentials(JSON.parse(token));
         console.log(oAuth2Client)
          crea(oAuth2Client);
    
        });
       
 const crea = async(auth) => { 
     // abrir la plantilla del DOCS
  var m = await JSON.parse(fs.readFileSync(template).toString());
  // Nombre titulo de la materia "MATEMATICAS"
  m.body.content[1].paragraph.elements[0].textRun.content = materia;
  // NOmbre "JORGE ORTEGA"
  m.body.content[2].paragraph.elements[1].textRun.content = nombre;
  // curso "3ro FGI A"
  m.body.content[2].paragraph.elements[3].textRun.content = curso;
  // FECHA "21/01/2022"
  m.body.content[2].paragraph.elements[5].textRun.content = fecha;
  //TEMA "Influecnia de: "
  m.body.content[3].paragraph.elements[1].textRun.content = tema;
  //docs create document
  /*try {
    var docs = google.docs({ version: "v1", auth: tokenJson });
  } catch (error) {
    res.json({ data: "error de token" + error, extra: 111});
  }*/

  var docs = google.docs({ version: "v1", auth});
  console.log(docs)
  docs.documents.batchUpdate({
    documentId: "1-rbvCNKs8Hdn3dUAvvjYM2rZ24_U2xB4s9dRo9Bs9vo", 
    requestBody: { 
    }
  },
    (err, request) => {
      if (err) {res.json({ data:  err, extra: 111 }); console.log({ data:  err, extra: 111 });
       return false
    } 
      console.log(`The "title" of the document is: ${request.data."title"}`);
      console.log(request.data)
      var u,i, t = [User, request.data.documentId, request.data."title"];
      obj.docs.push({ 
        id: i, topic: t
      })
      obj.subs.m[materiaComprobada].materia.create.push({ 
        id: i, topic: t
      })
      fs.writeFileSync(UserDocs, JSON.stringify(obj)); 
      res.json({error: false, data: i, extra: t})
      //var s = await hiu(User,res.data.documentId,res.data."title")
    }
  );}
/* 
 fs.writeFileSync(
          UserDocs ,
          JSON.stringify({
            docs: [
              {
                id: i,
                topic: t,
                sub: materia,
              },
            ],
          }),
          (err) => {
            if (err) res.json({ error: true, data: "error" + err, extra: 143 });
            res.json({
              error: false,
              data: { id: i, topic: t, sub: materia },
              extra: 200,
            });
          }
        );
      } else { 
          fs.writeFileSync(
               UserDocs,
               JSON.stringify({

                   
                     id: i,
                     topic: t,
                     sub: materia,
                   

               }),
               (err) => {
                 if (err) res.json({ error: true, data: "error" + err, extra: 143 });
                 res.json({
                   error: false,
                   data: { id: i, topic: t, sub: materia },
                   extra: 200,
                 });
               }
             ) */
  /*
     Get { 
       data: { 
         id: 
         sub: 
         date: 
         topic: 
       }
     }
     */
});


export default docsX;
