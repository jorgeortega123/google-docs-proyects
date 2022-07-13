import fs from 'fs'
import readline from 'readline'
import {google} from 'googleapis'
const TOKEN_PATH = 'token.json';
const oAuth2Client = new google.auth.OAuth2


  fs.readFile(TOKEN_PATH, (err, token) => {
     if (err) return getNewToken(oAuth2Client, callback);
     oAuth2Client.setCredentials(JSON.parse(token));
     name(oAuth2Client);
   });

   const name = async(oAuth2Client) => { 
     const ticket = await oAuth2Client.verifyIdToken({
          idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjMzZmY1YWYxMmQ3NjY2YzU4Zjk5NTZlNjVlNDZjOWMwMmVmOGU3NDIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI5NjcxMzkwMDU2OTItZGMxY282ZGo5MW1ybmtmbmFlZnJ2dThicXA3cTludm4uYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI5NjcxMzkwMDU2OTItZGMxY282ZGo5MW1ybmtmbmFlZnJ2dThicXA3cTludm4uYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTUyNTA1Mjk2NTc0MzY2NDExMDIiLCJlbWFpbCI6Im1hdGlhc2N1cmN1bWFuMjAwNEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6ImcxQmdpS1RvTkY0VVlOTTlYY3BSZ3ciLCJuYW1lIjoiTWF0aWFzIEN1cmN1bWFuIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnd3MzBKR0RGZmtVX0RlVW81VTlWLXVwTWNQbkZvQXJFWktkRENaPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6Ik1hdGlhcyIsImZhbWlseV9uYW1lIjoiQ3VyY3VtYW4iLCJsb2NhbGUiOiJlcyIsImlhdCI6MTY0MjA0MTA2NCwiZXhwIjoxNjQyMDQ0NjY0fQ.aI-leNSubEtKwUwF5mvBMWaWwE_y4YKVfi1FE6_V3cDe-iPlYEP8fcNd10UFRku3y6yUiRd8QU06zTZNBjO5vt1k5MtUQyDDED2aADLQKfZML0C8bhgx4Oa2I1ODaoqQVDULFldrLLTW7Yd75XVx9WXdansAtAXQAPCuwJmTpVGqmscVYc5wfm-HL_CJhc1Def0JcCdDy__qb5CBiBQybL6SbE8lAA79p8DkTZKf3m-qgX5ZlyM-QX3aZYQDfsG4CCR-mbROkckuxfvH2V2-eq6RY9zHJ2AHVnn2g2TOmYwNUKm9Vzqc0Wb0zMfxvalkoH4tW7QM_NBDiQdeE80W9w",
          audience: "967139005692-dc1co6dj91mrnkfnaefrvu8bqp7q9nvn.apps.googleusercontent.com"
        });
        console.log(ticket);
      
   }