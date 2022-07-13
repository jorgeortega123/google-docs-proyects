import fs from "fs";
import { google } from "googleapis";
//const {OAuth2Client,OAuth2} = google.auth.OAuth2;
const SCOPES = [
  "https://www.googleapis.com/auth/documents",
  "https://www.googleapis.com/auth/drive",
  "https://www.googleapis.com/auth/drive.file",
  "https://www.googleapis.com/auth/drive.appdata",
  "https://www.googleapis.com/auth/userinfo.email",
  "https://www.googleapis.com/auth/userinfo.profile",
  "email",
];
function respuestaDeCrendencials() {
  return new Promise(function (res, rej) {
    fs.readFile("credentials.json", (err, content) => {
      if (err) return rej("Error loading client secret file:", err);
      res(JSON.parse(content));
    });
  });
}
const credentials = await respuestaDeCrendencials();
//console.log(resultadosJSON)
const { client_secret, client_id, redirect_uris } = credentials.web;
const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);
const authUrl = oAuth2Client.generateAuthUrl({
  access_type: "offline",
  scope: SCOPES,
});
const giveLinks = async () => {
  console.log(authUrl);
  if (!authUrl)
    return {
      error: true,
      data: "No se generó el enlace de Auth0",
    };
  return { error: false, data: authUrl, web: authUrl };
};

const verifyToken = async (codee) => {
     function TokenRes(){ 
  return new Promise(function (res, rej) {
    oAuth2Client.getToken(codee, (err, token) => {
      if (err) rej({error: true, 
         data: "Error retrieving access token"+  err});
      oAuth2Client.setCredentials(token);
      console.log(oAuth2Client)
      res(token)
    });})}
    const tokenUltimate = await TokenRes()
    return ({
     error: false, 
     data: tokenUltimate,
  }) 
 
};




export { giveLinks, verifyToken };
