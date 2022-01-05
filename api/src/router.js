import pkg from 'express';
import fs from "fs"
import { spawn } from 'child_process'
import path from 'path'
const router = pkg.Router()
const filename = "./data.json";
const rawdata = fs.readFileSync(filename);
const student = JSON.parse(rawdata);



router.post('/pdf', (req, res) => {
  let lib_convert = promisify(libre.convert)
  async function convert(name="myresume.docx") {
    try {
      let arr = name.split('.')
      const enterPath = path.join(__dirname, `/public/Resume/${name}`);
      const outputPath = path.join(__dirname, `/public/Resume/${arr[0]}.pdf`);
      // Read file
      let data = await fs.readFile(enterPath)
      let done = await lib_convert(data, '.pdf', undefined)
      await fs.writeFile(outputPath, done)
      return { success: true, fileName: arr[0] };
    } catch (err) {
      console.log(err)
      return { success: false }
    }
  }



 } 
 )

router.get("/mtr/:id", (req, res) => {
     var mtr = req.params.id;
     for (let i in student.subjects) {
       if (student.subjects[i]===mtr) {
         console.log(student.subjects[i])
         matter(student.subjects[i])
       }
     }
     function matter(materia) {
       var filesS=[]
       const dir = "src/"+ "DocxSure/" + materia +"";
       const dirMaterials = "src/"+"DocxSure/" + materia + "/Materials"+"";
       const dirWord = "src/"+"DocxSure/" + materia + "/Words"+"";
       const dirDeberes = "src/"+"DocxSure/" + materia + "/Deberes"+"";
       fs.readdirSync(dirWord, {withFileTypes: true})
       .filter(item => !item.isDirectory())
       .map(item => { filesS = filesS + "" +item.name+ ";"})
       console.log(filesS)
       res.json(filesS)  
     }
   });

router.get("/mtr/:id", (req, res) => {
     var mtr = req.params.id;
     for (let i in student.subjects) {
       if (student.subjects[i]===mtr) {
         console.log(student.subjects[i])
         matter(student.subjects[i])
       }
     }
     function matter(materia) {
       var filesS=[]
       const dir = "src/"+ "DocxSure/" + materia +"";
       const dirMaterials = "src/"+"DocxSure/" + materia + "/Materials"+"";
       const dirWord = "src/"+"DocxSure/" + materia + "/Words"+"";
       const dirDeberes = "src/"+"DocxSure/" + materia + "/Deberes"+"";
       console.log(dir)
       console.log(dirMaterials)
       console.log(dirWord)
       console.log(dirDeberes)
       fs.readdirSync(dirWord, {withFileTypes: true})
       .filter(item => !item.isDirectory())
       .map(item => { filesS = filesS + "" +item.name+ ";"})
       console.log(filesS)
       res.json(filesS)  
     }
   });



   router.get("/mtr/mtr/:id", (req, res) => {
    var mtr = req.params.id;
    for (let i in student.subjects) {
      if (student.subjects[i]===mtr) {
        console.log(student.subjects[i])
        matterr(student.subjects[i])
      }
    }
    function matterr(materia) {
      var filesS=[]
      const dirMaterials = "src/"+"DocxSure/" + materia + "/Materials"+"";
      fs.readdirSync(dirMaterials , {withFileTypes: true})
      .filter(item => !item.isDirectory())
      .map(item => { filesS = filesS + "" +item.name+ ";"})
      console.log(filesS)
      res.json(filesS)  
    }
  });












 router.get("/:method/:mtr/:archivo", (req, res) => {
  var metodo = req.params.method
  if (metodo=== "open") {
  var materia= req.params.mtr
  var archivo= req.params.archivo;
  var FinalFile = "src/DocxSure/" + materia + "/Words/" + archivo 
  try {
    if (fs.existsSync(FinalFile)) {
  console.log(FinalFile)
  const dirWord = spawn('cmd', ['/c', 'start ' +  FinalFile ]);
  dirWord.on('close', code => console.log(`Exit code: ${code}`))
  dirWord.stdout.on('data', data => console.log(`Stdout: ${data}`));
  dirWord.stderr.on('data', data => console.log(`Stderr: ${data}`));
  res.send("Sucess open file!")
    }
  } catch(err) {
    res.send("File doesn´t exist" + err)
  }
   } else if (metodo=== "mat") {
    var materia1= req.params.mtr;
    var archivo1= req.params.archivo;
    var FinalFile1 = "src\\DocxSure\\" + materia1 + "\\Materials\\" + archivo1 
    process.chdir("src\\DocxSure\\" + materia1 + "\\Materials" );
    const dirWord1 = spawn('cmd', ['/c', 'start ', archivo1 ]);
    dirWord1.stdout.on('data', data => console.log(`Stdout: ${data}`));
    dirWord1.stderr.on('data', data => console.log(`Stderr: ${data}`));
    dirWord1.on('close', code => console.log(`Exit code: ${code}`))
   } else if (metodo=== "deb") {

    
   } else { 
     res.send("Metodo no reconoido")
   }


  })
router.get('/start/:materia', (req, res) => {
  var carpeta = req.params.materia
  console.log(carpeta)
  const dirWorda = spawn('cmd', ['/c', 'start ' +  "%cd%\\src\\DocxSure\\" + carpeta ]);
  dirWorda.on('close', code => console.log(`Exit code: ${code}`))
  dirWorda.stdout.on('data', data => console.log(`Stdout: ${data}`));
  dirWorda.stderr.on('data', data => console.log(`Stderr: ${data}`));
  res.send("Sucess")
  
  })
  

export default router