import express from "express";
import morgan from "morgan";
import cors from "cors";
//import config from './config';
import fs from "fs";
import DocxCreate from "./src/docx.js";
import router from "./src/router.js";
import page from "./src/components/form.js";
const filename = "./data.json";
const rawdata = fs.readFileSync(filename);
const student = JSON.parse(rawdata);
const app = express();

app.set("port", 4000);
app.use(cors())
app.use(morgan('dev'));

app.get("/:user", page)
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
