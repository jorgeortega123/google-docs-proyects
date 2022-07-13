import fs from "fs";
import { google } from "googleapis";
import uniqid from "uniqid";
const folder = "./src/components/users/";
const json_pre = "./src/components/users/default.json";
const oAuth2Client = new google.auth.OAuth2();
function respuestaDeCrendencials() {
  return new Promise(function (res, rej) {
    fs.readFile("credentials.json", (err, content) => {
      if (err) return rej("Error loading client secret file:", err);
      res(JSON.parse(content));
    });
  });
}

function JsonParaForm() {
  return new Promise(function (res, rej) {
    fs.readFile(json_pre, (err, content) => {
      if (err) return rej("Error loading default.json", err);
      res(JSON.parse(content));
    });
  });
}
const defaultjson = await JsonParaForm();
const credentials = await respuestaDeCrendencials();
const { client_id } = credentials.web;

const sendAllInfUser = async (datoss) => {
  const datos = JSON.parse(datoss);
  if (!datos) return { error: true, data: "falta" };
  console.log(datos.data["data"])
  console.log(datos.data["data"].id_token);
  console.log(datos.data["data"].access_token);
  console.log(datos.data["data"].id_token);
  console.log("sadds" + datos);
  const tokenID = datos.data["data"].id_token;
  const tokenACCESS = datos.data["data"].access_token;
  const token = datos.data["data"]
  console.log(tokenID, tokenACCESS);
  const namee = async () => {
    try {
      const ticket = await oAuth2Client.verifyIdToken({
      idToken: tokenID,
      audience: client_id,
    });
    } catch (error) {
      return({error: true, data: "Google Auth0 error" + error, extra: 145})
    }
    const ticket = await oAuth2Client.verifyIdToken({
      idToken: tokenID,
      audience: client_id,
    });
    
    //console.log(ticket);
    //console.log(ticket.LoginTicket)
    console.log(ticket.payload);
    const nombre = ticket.payload["given_name"];
    const apellido = ticket.payload["family_name"];
    const email = ticket.payload["email"];
    const name = ticket.payload["name"];
    console.log(2);
    console.log(nombre, apellido, email, name);
    const nameid = email;
    const folderUser = folder + email;
    const iniquidd = uniqid();
    const iduserr = nombre + iniquidd.slice(1, 7);

    //

    if (fs.existsSync(folderUser)) {
     // rej({error: true, data: "Ya registrado", extra: 123 })
     fs.writeFile(folderUser + "/token.json", JSON.stringify(token), (err) => {
      if (err) return ({ error: true, data: "Does not create token.json" + err, extra: 143 });
    });
      return({error: true, data: iduserr + "Usuealreadyexist", extra: 123})
    }

    //
    if (!fs.existsSync(folderUser)) {
      fs.mkdirSync(folderUser);
    }
    console.log(folderUser + "/google.json");
    fs.writeFile(folderUser + "/google.json", JSON.stringify(ticket), (err) => {
      if (err)
        return ({ error: true, data: "Does not create google.json" + err, extra: 142 });
    });
    console.log(3);

    var IdUser = [
      {
        info: {
          iduser: iduserr,
          nombre: name,
          gmail: email,
        },
        defaultjson,
      },
    ];
    console.log(4);
    fs.writeFile(folderUser + "/token.json", JSON.stringify(token), (err) => {
      if (err) return ({ error: true, data: "Does not create token.json" + err, extra: 143 });
    });
    console.log(datos.data["data"])
    fs.writeFile(folderUser + "/user.json", JSON.stringify(IdUser), (err) => {
      if (err) return ({ error: true, data: "Does not create user.json" + err, extra: 143 });
      return ({ error: false, data: "Succes generating the folder user", extra: nameid });
    });
    return ({ error: false, data: "Succes generating the folder user", extra: nameid });
  };
  const data = await namee();
  return { data }; 

};

export { sendAllInfUser };
