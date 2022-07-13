import express from "express";
import morgan from "morgan";
import cors from "cors";
//import config from './config';
import fs from "fs";
import DocxCreate from "./src/docx.js";
import router from "./src/router.js";
import page from "./src/components/form.js";
import {giveLinks, verifyToken} from "./src/components/giveLink.js";
import { sendAllInfUser } from "./src/components/sendInfBeforeForm.js";
import docsX from "./src/components/generateDocs.js";
const filename = "./data.json";
const rawdata = fs.readFileSync(filename);
const student = JSON.parse(rawdata);
const app = express();
app.set("port", 4000);
app.use(cors())
app.use(morgan('dev'));
//app.get("/:user", page)
app.get("/mtr/mtr/:id", router)
app.get('/mtr/:id', router)
app.get('/:method/:mtr/:archivo',  router)
app.get('')
app.get('/start/:materia', router)
app.post('/pdf', router)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.post("/post", (req, res) => {
  // "n":"Ortega Jorge","c":" 3ro_FGI_A ","t":"","m":"Lengua y Literatura","f":".docx"
  /* console.log(req.body.n)
     console.log(req.body.c)
     console.log(req.body.t)
     console.log("sadd")
     res.json({ message: "Hello from server!"});*/
  var studentt = req.body;
  if (studentt.n === undefined) {
    res.json(req.body + "d");
  } else {
    DocxCreate(studentt, req, res)
  }
});
app.get(
  "/data.json",
  (req, res) => {
    //   var asd =""
    // for (let i in student.subjects) {
    //     asd += student.subjects[i];
    res.json(student);
  }
  //res.json(student)
);
app.get(
  "/page",
  (req, res) => {
    //   var asd =""
    // for (let i in student.subjects) {
    //     asd += student.subjects[i];
    res.json({ 
      data: "hola xd"
    });
  }
  //res.json(student)
);

app.get("/authgoogle", async(req, res) => {
   const respuesta = await giveLinks()
   console.log(respuesta)
   if(respuesta.error===true) { 
     res.json({ 
       error: true, 
       data: respuesta.data,
       web: respuesta.web || "null"
     })
   } else { 
    res.json({ 
      error: false,
      data: respuesta.data
    })}
  }
);

app.get('/loginid', async(req, res) => {
 var ress =  req.query.code
 console.log(ress + "RES") 
 const respuestaToken = await verifyToken(ress)  
 if(!respuestaToken) { 
   res.json({ 
     error: true, 
     data: "Falló la utentificación de google"
   })
 }
 if(respuestaToken.error === true) { 
  res.json({ 
    error: true, 
    data: respuestaToken.data
  })}else{ 
    //const res = await sendAllInfUser()
    res.json({error: false, 
    data: respuestaToken.data})
  }
 //res.send("SIUu")
})

app.post("/beforeform", async(req, res) => {
   var datos = req.body 
   //console.log(JSON.stringify(datos)) 
   if (!datos.data.data) res.json({error: true, data:"Estructura de datos incorrecta", extra: 184})
   console.log("ASDASDSAD")
   const resss = await sendAllInfUser((JSON.stringify(datos)))
   console.log(resss)
  res.json(resss)
   //
   
 })
 app.get("/home/:user", page)
 app.get("/form/:user", page)
 app.get("/edit/:user", page)
 app.post("/docs/v1/create", docsX) 
/*
app.post("/loginid", async(req, res) => {
  console.log(req)
 var inf = req.body
 console.log(inf)
  //var inf = req.body
  /*var inf = { 
    res: "data", 
    code: "4%2F0AX4XfWjJMWO1WSk8dbrN8ZmGMYIOrH6AxU6zXGLE27v1SWeqeSBOb-TmtwjC0ga14QwnLg"
  }*//*
   var token=inf.code
   console.log(token)
  const respuestaToken = await verifyToken(token)  
  console.log( respuestaToken )
  //console.log(respuestaToken.credentials)
  res.send(respuestaToken)*/
  /*
    if (!inf) {res.json({error: true, data: "No existen datos"});} 
  //var token=req.body.code
 
*/
  /*if (respuestaToken.error === true){ 
    res.json({ 
      error: true, 
      data: respuestaToken.error.data
    })
  } else { 
    res.json({ 
      error: false,
      data: "Se creo el perfil SIUUU",
      success: true
    })}*/
 
/*
app.get("/mtr/:id", (req, res) => {
  var mtr = req.params.id;
  for (let i in student.subjects) {
    if (student.subjects[i]===mtr) {
      res.send(student.subjects[i])
      matter()
    }
  }
});*/
app.listen(app.get("port"), () => {
  console.log("server on:", app.get("port"));
});

//app.use(videoRoutes)

export default app;


//se tiene que isntalar googleapis//