import React from "react";
import axios from "axios"
import "../components/styles/home-into-elements.css"
//import axios from 'axios'

class Upzone extends React.Component {
  /*componentDidMount() { 
    document.getElementById("msgid").classList.remove("msg");
    document.getElementById("msg-contentid").classList.remove("msg-content");
  }*/
  state = {
    selectedFile: null,
    buttonclick: null,
    btnhover: false,
    btn_prev: null,
    btn_prev_prev: null,
  };
  onDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  onDragEnter = (event) => {
    event.preventDefault();
    event.stopPropagation();
    document.getElementById("upzone").classList.add("highlight");
  };
  onFileDrop(event) {
    event.stopPropagation();
    event.preventDefault();
    console.log("qwerty");
  }
  onDragLeave = (e) => {
    e.preventDefault();
    document.getElementById("upzone").classList.remove("highlight");
  }

  onDropp = (e) => {
    e.preventDefault();
    document.getElementById("upzone").classList.remove("highlight");
    console.log(e.dataTransfer.files.length);
    console.log(e.dataTransfer.files[0]);
    console.log(e);
    this.setState({ selectedFile: e.dataTransfer.files[0] });
   /* return (
      <div>
        <p>{this.state.selectedFile.name}</p>{" "}
      </div>
    );*/
  };
  To_server = async (e) => {
    console.log(this.state.btnhover);
    console.log(this.state.buttonclick);
    // 0 NEW IF, si no funciona elimanolo xd
    if (e===this.state.buttonclick) { 
      document
      .getElementById(this.state.buttonclick)
      .style.setProperty("background-color", "transparent", "important");
    }
    // 1 TODO ESTO PILAS MI LLAVE, esto desmarca el boton en caso de que este seleccionado
    await this.setState({ buttonclick: e });
    if (this.state.btnhover === true && this.state.buttonclick) {
      document
        .getElementById(this.state.btn_prev)
        .style.setProperty("background-color", "transparent", "important");
      document
        .getElementById(this.state.buttonclick)
        .style.setProperty("background-color", "rgb(4 4 14 / 48%)", "important");
      this.setState({ btn_prev_prev: e });
      this.setState({ btnhover: false });
    } else if (this.state.btnhover === false) {
      var d = document.getElementById(this.state.buttonclick);
      if (this.state.btn_prev_prev) {
        document
          .getElementById(this.state.btn_prev_prev)
          .style.setProperty("background-color", "transparent", "important");
      }
      d.style.setProperty("background-color", "rgb(4,4,14)", "important");
      this.setState({ btnhover: true });
      this.setState({ btn_prev: e });
      return <div>{this.state.buttonclick}</div>;
    } else {
      alert("ERROR");
      return false;
    }
  };
  onFileUpload = () => {
    if (this.state.selectedFile && this.state.buttonclick ) {
      /*formData.append(
        "myFile",
        this.state.selectedFile,
        this.state.selectedFile.name
      )*/
        const file = this.state.selectedFile
        axios.post('http://localhost:4000/pdf', file, {
            headers: {
              'Content-Type': file.type
            }})
            console.log("sad")
         return (
        <div>
          <p>{this.state.selectedFile.name}</p>
          <p>{this.state.buttonclick }</p>
        </div>
      )

    }
     
     else if (this.state.selectedFile && !this.state.buttonclick) {
      return (
        <div>
          <p>"Selecciona una especialidad"</p>
        </div>
      );} else {
      return (
        <div>
          <p>Arrastra un archivo</p>{" "}
        </div>
      )}
    
    // axios.post("api/uploadfile", formData);
  };
  render() {
    return (
      <React.Fragment>
        <div
          id="upzone"
          onChange={this.onFileChange}
          onDragEnter={this.onDragEnter}
          onDragOver={this.onDragOver}
          onDragLeave={this.onDragLeave}
          onDrop={(event) => this.onDropp(event)}
        >
          <button onClick={this.onFileUpload}>Upload!</button>
          {this.onFileUpload()}
        </div>
        <div class="conteiner">
          <button
            class="a1_btn"
            id="a1_btnd"
            onClick={(e) => this.To_server(e.target.id)}
          >
            PDF CONVERT
          </button>
          <button
            class="a2_btn"
            id="a2_btnd"
            onClick={(e) => this.To_server(e.target.id)}
          >
            DEBER
          </button>
          <button
            class="a3_btn"
            id="a3_btnd"
            onClick={(e) => this.To_server(e.target.id)}
          >
            MATERIAL
          </button>
          {this.onDropp}
        </div>
      </React.Fragment>
    );
  }
}
export default Upzone;
