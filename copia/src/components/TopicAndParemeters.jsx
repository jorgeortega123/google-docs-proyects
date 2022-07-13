import React, { Component} from "react";
import Options from "./Options";
import MainPage from "./MainPage";
import Filesuser from "./Filesuser";
//import Buttons from "./Buttons";
export default class TopicAndParemeters extends Component {
     state={ 
          text: " ",
          textconsola: "Cargando...", 
          chec1: false,
          chec2: false,
          chec3: false,
          chec4: false,
          nombre: "",
          curso: "", 
          titleedit: "",
          materia: "",
          tema: null, 
          
          resultadotext: null,
     }
     componentDidMount(){ 
          this.charge()
     }
     charge =()=>{ 

      this.setState({nombre: "Jorge Ortega"})
      this.setState({curso: "3ro FGI A"})
      this.setState({materia: document.getElementById("drawfs").value})
      this.setState({titleedit: ""})
      this.box_check_one()

     }
    titlechange = (ev) => { 
      if (ev) { 
      var title = ev.taget.value
      this.setState({titleedit: title})
      this.setState({tema: title})
      this.checkbox("title")
      
      } else 
      return ; 
    }

    checkbox =(ev)=> { 
      if(ev==="title"){ev.taget.id="ck_box_4"}
      var idche = ev.target.id 
      if (document.getElementById(idche).checked === false) { 
        if (idche==="ck_box_1") {
          this.setState({nombre: ""})
        }
       if (idche==="ck_box_2") {
          this.setState({curso: ""})
        }
        if (idche==="ck_box_3") {
          this.setState({materia: ""})
        }
        if (idche==="ck_box_4") {
          this.setState({titleedit: ""})
        }
      } else if (document.getElementById(idche).checked === true){ 
        if (idche==="ck_box_1") {
          this.setState({nombre: "Jorge Ortega"})
        }
       if (idche==="ck_box_2") {
          this.setState({curso: "3ro FGI A"})
        }
        if (idche==="ck_box_3") {
          
          this.setState({materia: document.getElementById("drawfs").value})
        }
        if (idche==="ck_box_4") {
          this.setState({titleedit: this.state.tema})
        }
      } else { return; }
     this.box_check_one()
    }
     box_check_one = (ev) =>  {
       //if (ev) var da = ev.target.id || ""
          var name = this.state.nombre
          var curso = this.state.curso 
          var tema = this.state.titleedit || ""
          var materia =  this.state.materia || ""
          var extension = ".docx"
          const obj = {
               n: this.state.name, 
               c: this.state.curso, 
               t: this.state.tema,
               m: this.state.materia, 
               f: this.state.extension
             }
             var ultimate = "<mark class='red'>" + name +  "</mark><mark class='cas'>" + curso +  "</mark><mark class='red'>" + tema + "</mark><mark class='othr'>" + materia + "</mark><mark class='red'>" + extension + "</mark>"  
             this.setState({resultadotext: ultimate})
             console.log(ultimate)
             document.getElementById("finalresult").innerHTML=ultimate
             this.setState({resultadotext: {ultimate}})
             var docx_format_ = JSON.parse(JSON.stringify((obj)))
             //console.log(docx_format_)
             this.setState({textconsola: JSON.stringify(docx_format_)})}
             //document.getElementById("consola_text").value= JSON.stringify(docx_format_)}
  render() {
    return (
      <div className="main-body-tema-options-serverRes">

        <div id="Console_div">
          <input
          id="consola"
            placeholder="Tema:"
            onchange={this.titlechange()}
          >
            </input>
           <span role="img" aria-label="Panda"
           onClick={() =>{document.getElementById("consola").value = ""}}>
              🐼
            </span>
        </div>
        <div className="contain-uno-dos">
        <div className="st-window">
        <div id="all_text_and_checkbox">
          <div id="box_checks_div">
            <div>
              <label for="">nombre</label>
            </div>
            <div>
              <label for="">curso</label>
            </div>
            <div>
              <label for="">materia</label>
            </div>
            <div>
              <label for="">tema</label>
            </div>
          </div>
          <div id="only_checkbox">
            <input
              type="checkbox"
              onChange={(e) => this.checkbox(e)}
              id="ck_box_1"
              value={"sad"}
              
            />
            <input
              type="checkbox"
              onChange={(e) => this.checkbox(e)}
              id="ck_box_2"
              checked
            />
            <input
              type="checkbox"
              onChange={(e) => this.checkbox(e)}
              id="ck_box_3"
              
            />
            <input
              type="checkbox"
              onChange={(e) => this.checkbox(e)}
              id="ck_box_4"
              
            />
          </div>
        </div>
        <p id="contenido"></p>

        <textarea
          type="input"
          name="send_express"
          id="consola_text"
          value={this.state.textconsola}
          placeholder="Datos json"
          spellcheck="false"
        ></textarea>
        <div id="ponerFlex">
          <p className="text-show-result">El resultado se verá asi:</p>
          <p id="finalresult"></p>
          {//<div className="Option-MainPage-button">
          }
                  <Options />
          <MainPage />
         {//<Buttons />
         }     
         {// </div>
  }
            </div>
        
        </div>
        <div className="resFromServer">
        <Filesuser />
        </div>

        </div>
      </div>

    );
  }
}
