const { OAuth2Client } = require('google-auth-library');
const http = require('http');
const url = require('url');
const querystring = require('querystring');
const opn = require('opn');
const destroyer = require('server-destroy');

/*import { OAuth2Client } from 'google-auth-library'
import http from 'http'
import url from 'url'
//import querystring from 'querystring'
const querystring = require('querystring')
const pn = require("opn")

import destroyer from 'server-destroy'
*/
// Download your OAuth2 configuration from the Google
const keys  = { 
  "web": {
       "client_secret": "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",
  "client_id": "967139005692-dc1co6dj91mrnkfnaefrvu8bqp7q9nvn.apps.googleusercontent.com",
  "redirect_uris": ["http://localhost:4000/loginid/"]
  }

}

async function main() {
  const oAuth2Client = await getAuthenticatedClient();

  // Verify the id_token, and access the claims.
  const ticket = await oAuth2Client.verifyIdToken({
    idToken: oAuth2Client.credentials.id_token,
    audience: keys.web.client_id
  });
  console.log(ticket);

  // You can use this info to get user information too.
  const url = `https://www.googleapis.com/plus/v1/people/me`;
  const res = await oAuth2Client.request({ url });
  console.log(res.data);
}

/**
 * Create a new OAuth2Client, and go through the OAuth2 content
 * workflow.  Return the full client to the callback.
 */
function getAuthenticatedClient() {
  return new Promise((resolve, reject) => {
    // create an oAuth client to authorize the API call.  Secrets are kept in a `keys.json` file,
    // which should be downloaded from the Google Developers Console.
    const oAuth2Client = new OAuth2Client(
      keys.web.client_id,
      keys.web.client_secret,
      keys.web.redirect_uris[0]
    );

    // Generate the url that will be used for the consent dialog.
    const authorizeUrl = oAuth2Client.generateAuthUrl({
       scope: [
        "https://www.googleapis.com/auth/documents",
        "https://www.googleapis.com/auth/drive",
         "https://www.googleapis.com/auth/drive.file", 
         "https://www.googleapis.com/auth/drive.appdata"
      ] /*
[
        'https://www.googleapis.com/auth/plus.login',
        'https://www.googleapis.com/auth/plus.me',
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile',
        'email'

      */
    });

    // Open an http server to accept the oauth callback. In this simple example, the
    // only request to our webserver is to /oauth2callback?code=<code>
    const server = http
      .createServer(async (req, res) => {
        if (req.url.indexOf('/googleID') > -1) {
          try {
            // acquire the code from the querystring, and close the web server.
            const qs = querystring.parse(url.parse(req.url).query);
            console.log(`Code is ${qs.code}`);
            res.end('Authentication successful! Please return to the console.');
            server.destroy();

            // Now that we have the code, use that to acquire tokens.
            const r = await oAuth2Client.getToken(qs.code);
            // Make sure to set the credentials on the OAuth2 client.
            oAuth2Client.setCredentials(r.tokens);
            console.info('Tokens acquired.');
            resolve(oAuth2Client);
          } catch (e) {
            reject(e);
          }
        }
      })
      .listen(4000, () => {
        console.log("puerto 400")
        // open the browser to the authorize url to start the workflow
        opn(authorizeUrl, {wait: false}).then(cp => cp.unref());
      });
      destroyer(server);
  });
}

main().catch(console.error);