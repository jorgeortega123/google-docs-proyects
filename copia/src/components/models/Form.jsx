import React, { Component } from "react";
import axios from "axios";
import { SpinnerInfinity } from "spinners-react";
import "../styles/form-datos.css";
import dotenv from "dotenv";
dotenv.config();
const server = process.env.SERVER;
var e = "";
//hola XD
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //constructor(props) {
  //super(props);
  //this.state = { items: [], text: '' };
  /*this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);/*/

  state = {
    interface: false,
    sub: false,
    items: [],
    text: "",
    newmatter: null,
    prev: [{}],
    editEny: false,
    hola: ["hola"],
    idedit: "",
    textt: null,
    title: null,
    textp: "",
    editbtn: false,
    msgTRUE: false,
    isExcededSubjec: false,
    name: "",
    secondname: "",
    curso: "",
    school: "",
  };

  componentDidMount() {
    document.getElementsByTagName("body")[0].classList.add("form-body-color");
    const { namee, token } = [
      localStorage.getItem("idname"),
      localStorage.getItem("tokenid"),
    ];
    // if(name===undefined&&token===undefined) window.location.replace("/")
    console.log(e);
    const sd = async () => {
      await axios.get(server + "/form/" + namee)
        .then((data) => {
          console.log(data.data.defaultjson.more.sub);
          e = data.data.defaultjson.more.sub
          if( data.data.extra===123) {alert("SADA")}
          this.setState({ sub: e });
          const [a, b, c, d] = [
            data.info.nombre,
            data.info.nombre,
            data.defaultjson.more.curso,
            data.defaultjson.more.plantel,
          ];
          var aa = a.split("")
          if (aa.length > 3) {a=aa[0] + aa[1]; b=aa[2] + aa[3]} else { 
            a = aa[0]; b=aa[1]
          }
          document.getElementById("form-nombre-id").value = a || "";
          document.getElementById("form-apellido-id").value = b || "";
          document.getElementById("form-curso-id").value = c || "";
          document.getElementById("form-colegio-id").value = d || "";
          this.setState({ interface: true });
          this.setState({ next: true });
        })
        .catch((e) => {
          this.setState({ title: "Error" });
          this.setState({
            textt: "No se pudo usar la herramienta de autcompletar ",
          });
          this.setState({ msgTRUE: true });
          this.errorshow("Error", e);
          this.setState({ interface: true });
          this.setState({ error: true });
          //this.setState({ textt: e || "Error" });
        });
      setTimeout(() => {
        if (this.state.error === false) {
          this.setState({ title: "Error" });
          this.setState({ textt: "El tiempo de respuesta excedió el limite" });
          this.setState({ msgTRUE: true });
          this.setState({ error: true });
        }
      }, 6000);
    };
    sd();
  }

  deleteCLAS = (e, t) => {
    this.setState({ title: "Accion de usuario" });
    this.setState({
      textt: "Haz elimando" + " " + t + " de la tabla de asignaturas",
    });
    this.setState({ msgTRUE: true });

    document.getElementById(e).remove();
  };

  submitForm = () => {
    var [name, secondname, curso,  school ] = [this.state.name, this.state.secondname, this.state.curso, this.state.school]
    if (name===""){var error0e = true }
    else if (secondname===""){var error0e = true }
    else if (curso===""){var error0e = true}
    else if (school==="") {var error0e = true}
    if (error0e) {
      this.setState({ textt: "Debes rellenar todos los datos" });
    this.setState({ msgTRUE: true }); 
    } else {
      var s = document.getElementsByClassName("materoas-y-botones")[0].childNodes;
      if (s.length > 14) {
        this.setState({ isExcededSubjec: true });
        this.setState({
          textt: "Se admiten hasta un maximo de 14 asignaturas",
        });
        this.setState({ msgTRUE: true });
      }
      if (s.length < 4){
        this.setState({ textt: "Debes insertar minimo 4 materias" });
        this.setState({ msgTRUE: true });
      } 
    var mat = []
      for (let r=0; r<s.length ; r++)
      {console.log(document.getElementsByClassName("materoas-y-botones")[0].childNodes[r])} 
      console.log(mat + "ASDDASD")
     
        const iduser =  localStorage.getItem("idname")
        var ToSend = [{
          data: { 
            id: iduser,
            Name: name, 
            SecondName:  secondname, 
            Curso: curso, 
            plantel: school,
            sub: mat 
          }
        }]
        console.log(ToSend)



      
      console.log(s.length);
      //for (let r=0; r<s; r++){console.log(document.getElementsByClassName("materoas-y-botones")[0].childNodes[r])} 
  //document.getElementsByClassName("materoas-y-botones")[0].childNodes[1].textContent
    }

    //alert(s)
  };

  mensaje = (title, body) => {
    return (
      <div className="error-msg">
        <p>{title}</p>

        <p>{body}</p>
      </div>
    );
  };

  handleChange(e) {
    this.setState({ text: e.target.value });
    console.log("this.handleChange");
    if (this.state.editEny) {
      console.log("SD");
      document.getElementById(this.state.idedit).innerHTML = this.state.textp;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (
      document.getElementsByClassName("materoas-y-botones")[0].childNodes
        .length > 14
    ) {
      this.setState({ isExcededSubjec: true });
      this.setState({ textt: "El limite de asignaturas es de 14" });
      this.setState({ msgTRUE: true });
      return;
    }
    if (this.state.isExcededSubjec === true) {
      this.setState({ textt: "El limite de asignaturas es de 14" });
      this.setState({ msgTRUE: true });
      if (
        document.getElementsByClassName("materoas-y-botones")[0].childNodes
          .length < 14
      ) {
        this.setState({ isExcededSubjec: false });
      }
      return;
    }
    console.log("handleSubmit");

    if (this.state.text.length === 0) {
      return;
    }
    if (document.getElementById(this.state.idedit)) {
      document.getElementById(this.state.idedit).innerHTML = "";
    }
    if (this.state.editEny) {
      document.getElementById(this.state.idedit).innerHTML = this.state.textp;
      this.setState({ editEny: false });
    }

    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: "",
    }));
  }
  edittt(iid) {
    console.log("edit");
    if (!document.getElementById("parrafo" + iid)) {
      return;
    }
    var divElement = "parrafo" + iid;
    var ButElement = "edit" + iid;
    document
      .getElementById(ButElement)
      .style.setProperty("background", "rgba(20, 85, 129, 0.37)", "important");
    document.getElementById(divElement).contentEditable = "true";
    document
      .getElementById(divElement)
      .style.setProperty("background", "rgba(20, 85, 129, 0.37)", "important");
    this.setState({ idedit: "edit" + iid });
    //this.state.text
    //var sa = document.getElementById(iid).textContent
    //document.getElementById("input-add-materias-id").value= sa
    //this.setState({editEny: true})

    //this.setState({textp: sa})
    //document.getElementById(iid).innerHTML = sa
    //contenteditable="true"
    // console.log(document.getElementById(iid).contentEditable = 'true')

    //document.getElementById(iid).style.setProperty("background", "rgba(20, 85, 129, 0.37)", "important")
  }
  errorshow = (title, body) => {
    if (!title && !body && title === "" && body === "") {
      title = this.state.title;
      body = this.state.textt;
    }
    title = this.state.title;
    body = this.state.textt;
    setTimeout(() => {
      this.setState({ msgTRUE: false });
      this.setState({ title: "" });
      this.setState({ textt: "" });
    }, 12000);
    return <>{this.mensaje(title, body)}</>;
  };

  interfacActive = () => {
    return (
      <section className="p-6 bg-gray-800 text-gray-50 aall-coverr">
      <form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm gray-900">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Información personal</p>
            <p className="text-xs">Rellena la información que se socilicita</p>
            <p className="text-xs">Para que pueda disfrutar todo el funcionamiento de la página web necesitamos tus datos</p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label for="firstname" className="text-sm">Nombre</label>
              <input id="firstname" type="text" placeholder="Nombre" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-400 border-gray-700 text-gray-900"/>
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="lastname" className="text-sm">Apellido</label>
              <input id="lastname" type="text" placeholder="Apellido" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-400 border-gray-700 text-gray-900"/>
            </div>
      
            <div className="col-span-full">
              <label for="address" className="text-sm">Colegio, universidad o plantel educativo:</label>
              <input id="address" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-400 border-gray-700 text-gray-900"/>
            </div>
          </div>
        </fieldset>
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Asignaturas</p>
            <p className="text-xs">Escribe todos los nombres de tus asignaturas</p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label for="username" className="text-sm">Username</label>
              <input id="username" type="text" placeholder="Username" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-400 border-gray-700 text-gray-900" />
            </div>
          </div>
        </fieldset>
      </form>
    </section>
      )
  }


  render() {
    return this.interfacActive();
  }
}
