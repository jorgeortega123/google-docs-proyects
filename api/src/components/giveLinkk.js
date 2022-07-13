
import fs from 'fs'
import { google } from 'googleapis';
//const {OAuth2Client,OAuth2} = google.auth.OAuth2;
const SCOPES = [
  "https://www.googleapis.com/auth/documents",
  "https://www.googleapis.com/auth/drive",
   "https://www.googleapis.com/auth/drive.file", 
   "https://www.googleapis.com/auth/drive.appdata",
   'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile',
        'email'
];

function respuestaDeCrendencials() { 
  return new Promise(function(res, rej) {
  fs.readFile('credentials.json',(err, content) => {
  if (err) return rej('Error loading client secret file:', err);
    res(JSON.parse(content))
  }) }) }
const asdd = await respuestaDeCrendencials()
console.log(asdd)
  //console.log(JSON.parse(e))
/*
const getcredenciales = obtenerCredenciales()
console.log(getcredenciales)
const credentials = JSON.parse(getcredenciales)
  const {client_secret, client_id, redirect_uris} = credentials.web;
  const oAuth2Client = new google.auth.OAuth2( client_id, client_secret, redirect_uris[0]);
 const authUrl = oAuth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: SCOPES,
});
console.log(authUrl)

/*
const {client_secret, client_id, redirect_uris} = { 
  "client_secret": "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",
  "client_id": "967139005692-dc1co6dj91mrnkfnaefrvu8bqp7q9nvn.apps.googleusercontent.com",
  "redirect_uris": ["http://localhost:4000/loginid/"]
}
*/



       /*
     fs.readFile('credentials.json', (err, content) => {
          if (err) return console.log('Error loading client secret file:', err);
          // Authorize a client with credentials, then call the Google Docs API.
          authorize(JSON.parse(content));
        });*/
        //const authorize = (jsonfile) => { const {client_secret, client_id, redirect_uris} = jsonfile.web;

//const giveLinks = async() => { 
  /*
     const giveLinks = async() => { 

            //const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
            /*const authUrl = oAuth2Client.generateAuthUrl({
               access_type: 'offline',
               scope: SCOPES,
             });
             console.log(authUrl)
  if (!authUrl)  return ({
          error: true, 
          data: "No se generó el enlace de Auth0",
       }) 
       return ({error: false, data: authUrl, web: authUrl })
             }
          
          
      
//}/*
const verifyToken = async(codee)=> { 
fs.readFile(credentials, (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Docs API.
  authorize(JSON.parse(content), aprove);
});
/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */

/*
function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.web;
  const oAuth2Client = new google.auth.OAuth2(
  client_id, client_secret, redirect_uris[0]);
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    id_from: "EJEMPLOSXD"
  });
  aprove(oAuth2Client)
}
function aprove(oAuth2Client) {
oAuth2Client.getToken(codee, (err, token) => {
  if (err) return console.error('Error retrieving access token', err);
  oAuth2Client.setCredentials(token);
  // Store the token to disk for later program executions
  /*fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
    if (err) console.error(err);*//*
    console.log('Token stored to', token);
  console.log(oAuth2Client);
  return (oAuth2Client);
})}}


/*
const verifyToken = async(code)=> { 
oAuth2Client.getToken(code, async(err, token) => {
  if (err) return ({ 
    error: true, 
    data: err
  })
  oAuth2Client.setCredentials(token);
  console.log("credentials" + token )
    const ticket = oAuth2Client.verifyIdToken({
      idToken: oAuth2Client.credentials.id_token,
      audience: client_id
    });
    console.log(ticket);
     return ({ 
    error: false, 
    data: oAuth2Client
  })
  });

}*/

/*
const verifyToken = async(code)=> { 

      try {
        const a = oAuth2Client
        const s = oAuth2Client.getToken(code)
        const b = oAuth2Client.setCredentials(r.tokens);
      } catch (err) {
        return err
      } 
      var rs = oAuth2Client.getToken(code);
      console.log(r.tokens)
      oAuth2Client.setCredentials(r.tokens);
      console.log('Tokens acquired.');
    //resolve(oAuth2Client+"errorr");
    console.log(oAuth2Client+"erroor") 
   return rs
  }*/


/*
const verifyTokensss = (code, async(res, req) => { 
   const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
   oAuth2Client.getToken(code, (err, token) => {
    if (err) res.send ({error: true, data: err});
    oAuth2Client.setCredentials(token);
    res.json(token)
   })
   console.log(response)
  return (({error: err, data: data}))
})
const verifyTokens = async(code) => { 
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);*/
  //const {data, err} = await oAuth2Client.getToken(code)
 // return (({error: err, data: data}))
  /*return new Promise((resolve, reject) => {
    oAuth2Client.getToken(code, (err, token) => {
     if (err) {
      console.log(err)
      return reject(err);
     }
     return resolve(token);
    });
   })

  /*
  console.log(code)
     
      console.log("AUTH")
      oAuth2Client.getToken(code, (err, token) => {
        console.log(code, err, token)
          if (err) return ({error: true, data: err});
          oAuth2Client.setCredentials(token);
          console.log(token)
          tokenN(oAuth2Client)
         }); */
  
    /*
export {giveLinks, verifyToken}*/