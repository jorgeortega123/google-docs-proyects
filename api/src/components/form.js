import pkg from 'express';
import fs from "fs";
const page = pkg.Router()
//import json from "./users/user.json"
const [userss, formAnswerss, msgg] = ["./src/components/users/user.json", "./src/components/userPremium.json", "./src/components/users/mensajes.json" ]
const [rawdata, rawdata1, rawdata2 ] = [fs.readFileSync(userss), fs.readFileSync(formAnswerss), fs.readFileSync(msgg) ]
const [userso, formAnswers, msg] = [JSON.parse(rawdata), JSON.parse(rawdata1), JSON.parse(rawdata2) ]
const users = userso.users
const premium = formAnswers.premium
const mensaje = msg.premiumUp

page.get('/:user', (req, res) => {
     var user = req.params.user 
     if (users[user]) { 
         res.json(users[user])
     } else { 
         res.json({ 
             "data": "No se econtro el usuario",
             "error":  "001"
         })
     }
     /*if(user.includes(users)) { 
              users.user
     } else { 

     }*/


 }) 


page.post('/formuser', (req, res) => {
     var user = req.body

 }) 



export default page


