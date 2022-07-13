import fs from 'fs'

function reedDatajson(url='db.json') {
     const res=fs.readFileSync(url,{encoding:'ascii'})
     const resString=JSON.stringify(res)
     return resString
     
}
function createDatajson(url,data) {
     const res=fs.readFileSync(url,{encoding:'ascii'})
     const resString=JSON.parse(res);
     resString.push(data)
     const json=JSON.parse(resString)
     fs.writeFileSync(url,json,{encoding:'ascii'})
     return 'todo bien'
}
function updateDatajson(url,data,id) {
     const res=fs.readFileSync(url,{encoding:'ascii'})
     const resString=JSON.parse(res);
     const filter=resString.filter((x)=>{
          x.id==id
     })
     const {name,lastname,date,course,subjects} =data
     filter.name=name;
     filter.lastname=lastname;
     filter.date=new Date.now;
     filter.course=course;
     filter.subjects=subjects;
     resString.push(filter)
     const json=JSON.parse(resString)
     fs.writeFileSync(url,json,{encoding:'ascii'})
}
function deleteDataJson(id) {
     const res=fs.readFileSync(url,{encoding:'ascii'})
     const resString=JSON.parse(res);
     const filter=resString.filter((x)=>{
          x.id!=id
     })
     const json=JSON.parse(filter)
     fs.writeFileSync(url,json,{encoding:'ascii'})
}
export {}