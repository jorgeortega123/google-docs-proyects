import pkg from 'docx';
import fs from "fs"
import { spawn } from 'child_process'
const { Document, Packer, Paragraph, TextRun, AlignmentType, HeadingLevel } = pkg;

   const name_docx = { 
        n: "Ortega Jorge", 
        c: "3ro FGI A", 
        t: "Sumas correlacionales",
        m: "Matemáticas",
        f: ".docx"
    }
     var name = name_docx.n
     var curso = name_docx.c
     var tema = name_docx.t
     var materia = name_docx.m
     var extension = name_docx.f
    //console.log(name_docx)
    var name_doc = name + '_' + curso + '_' + tema + '_' + materia + extension
    //console.log(name_doc)
    const name_docx__1 = name_doc.replace(/ /g,'_')
    const name_docx__ = name_docx__1.replace(/__/g, "_")
   // if (name_docx__ ==="") { res.render('index.ejs', {error: 'error'})} 
   const date = new Date();
    var [m, d, y] = [date.getMonth(), date.getDate(), date.getFullYear()];
    /*var tiempo = new Date()
    var y = tiempo.getFullYear()
    var m = tiempo.getMonth()
    var d = tiempo.getDay()*/
    if (m.length===undefined) {m = "0" + m}
    if (d.length===undefined) {d = "0" + d}
function Docx() { 
    const doc = new Document({
        creator: name,
        title: tema,
        lastModifiedBy: "Jorge", 
        keywords: materia,
        description: "Un archivo para la materia de:" + materia,
        sections: [
            {
                properties: {
                    page: {
                        margin: {
                            top: 2.5,
                            right: 2.5,
                            bottom: 2.5,
                            left: 2.5,
                        },
                    },
                },
            },
        ],
        styles: {
            paragraphStyles: [
                {
                    id: "Heading1",
                    name: "Heading 1",
                    basedOn: "Normal",
                    next: "Normal",
                    quickFormat: true,
                    run: {
                        
                        size: 32,
                        bold: true,
                        italics: false,
                        color: "#CC3300"
                    },
                    paragraph: {
                        spacing: {
                            after: 120,
                        },
                    },
                },
                {
                    id: "Heading2",
                    name: "Heading 2",
                    basedOn: "Normal",
                    next: "Normal",
                    quickFormat: true,
                    run: {
                        size: 26,
                        bold: true,
                        
                    },
                    paragraph: {
                        spacing: {
                            before: 240,
                            after: 120,
                        },
                    },
                },
                {
                    id: "aside",
                    name: "Aside",
                    //next: "Normal",
                    run: {
                        font: "Times New Roman",
                        size: 28,
                        
                    },
                    paragraph: {
                        //indent: {
                       //     left: 720,
                       // },
                        spacing: {
                            line: 400, before: 400, after: 200
                        },
                    },
                },
                {
                    id: "timesnewRoman",
                    name: "Well Spaced",
                    quickFormat: true,
                    paragraph: {
                        spacing: { line: 200, before: 200, after: 200   },
                            //
                    },
                    //run: { 
                    //    underline: {
                    //    type: UnderlineType.DOUBLE,
                    //}},
                },
                {
                    id: "ListParagraph",
                    name: "List Paragraph",
                    basedOn: "Normal",
                    quickFormat: true,
                },
            ],
        },
        numbering: {
            config: [
                {
                    reference: "my-crazy-numbering",
                    levels: [
                        {
                            level: 0,
                            format: "lowerLetter",
                            text: "%1)",
                            alignment: AlignmentType.LEFT,
                        },
                    ],
                },
            ],
        },
        sections: [{
            children: [
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    text:  "" + tema + "",
                    heading: HeadingLevel.HEADING_1,
                }),

                //new Paragraph({
                //    text: "An aside, in light gray italics and indented",
                //    style: "aside",
                //}),
                //new Paragraph({
                //    text: "Nombre: " + name + "                     " + "Curso: " + curso + " " ,
                //    style: "wellSpaced",
                //}),
                new Paragraph({
                    style: "aside",
                    alignment: AlignmentType.CENTER,
                    size: 28,
                    children: [
                        new TextRun({
                            text: "•Nombre: ",
                            // + name + "                     " + "Curso: " + curso + " " ,
                           // bold: true,
                           // style: "wellSpaced",
                        }),
                        new TextRun({
                            text: "" + name + "",
                        }),
                        new TextRun({
                            text: "                                      •Curso: ",
                        }),
                        new TextRun({
                            text: "" + curso + "",
                            
                        }),
                       new TextRun({
                            text: " •Fecha: ",
                             break: 1
                        }),
                        new TextRun({
                            text: ""+ y +"/" +m + "/" + d + "",

                        }),

                        new TextRun({
                            text: "                                       •Materia: ",
                           
                        }),
                        new TextRun({
                            text: "" + materia +"",
                        }),
 
                    ],
                }),
            ],
        }],
    });
      
    //const b64string = await Packer.toBase64String(doc);
//function a() { 
    //console.log(name_docx)
    //res.setHeader('Content-Disposition', 'attachment; filename='+ name_docx );
    //res.setHeader("Content-Disposition", "attachment; filename=\""+name_docx__+"\"")

   Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync(name_docx__, buffer);})

    //res.send(Buffer.from(b64string, 'base64')); 
    //}
    const dir = spawn('cmd', ['/c', 'start '+name_docx__+'' ]);
    dir.stdout.on('data', data => console.log(`Stdout: ${data}`));
    dir.stderr.on('data', data => console.log(`Stderr: ${data}`));
    dir.on('close', code => console.log(`Exit code: ${code}`));
    
 }
 Docx()