import dotenv from "dotenv"
dotenv.config()
const server = process.env.SERVER
function GetMehod () {
fetch(server + '/data.json').then(response => {
  return response.json();
}).then(data => {
  // Work with JSON data here
  console.log(data);
}).catch(err => {
  document.getElementById("ServerRes").innerHTML = "No se pudo obtener datos"
});

}
export default GetMehod