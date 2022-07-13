import React, { Component } from "react";

export default class Settings extends Component {
  render() {
    return (
      <div className="span-body" id="span-bodyy">
        <div className="span-body-menu">
          <p className="titleP settings-setting">Configuración</p>
          <div className="avatar">
               <img src="" alt="" />
               <p className="normalP settings-setting"> Nombre de la persona</p>
          </div>
          <button> Cambiar</button>
        </div>
      </div>
    );
  }
}
