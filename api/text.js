import fs from "fs"
var name = "./data.json";
var m = JSON.parse(fs.readFileSync(name).toString());
"curso": ["3ro FGI A"],
"plantel": ["Unidad Educativa Tumbaco"],

m.info.nombre
m.defaultjson.curso=
m.defaultjson.plantel=
m.defaultjson.sub=




["ASDASD", "ASDDs"]
console.log(m)
fs.writeFileSync(name, JSON.stringify(m));
