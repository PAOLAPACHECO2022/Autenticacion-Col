import React, { Component } from "react";
import { Outlet } from "react-router-dom";

import Navegacion from "./Navegacion";

export default class Tablero extends Component {
  render() {
    return (
      <div>
        <Navegacion></Navegacion>
        <br></br>
        <div className="container">
          <Outlet></Outlet>
        </div>
      </div>
    );
  }
}
