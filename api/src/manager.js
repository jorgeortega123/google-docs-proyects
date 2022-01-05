import {moveFile} from 'move-file';
import fs from 'fs'
const filename = "./data.json";
const rawdata = fs.readFileSync(filename);
const file_json = JSON.parse(rawdata);


export default function move_file(nombre, materia, archivo_final) { 
     const verify_file = archivo_final
     if (fs.existsSync(verify_file)) {
          const ad = async() => {
          console.log("exist");
          await moveFile(archivo_final, "src/"+"DocxSure/" + materia + "/Words"+"/"+archivo_final)
          
     }} else { 
               console.log("No exist")
          }    
     

     }
