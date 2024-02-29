import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { iniciarSesion } from "../servicios/servicioUsuario";
import "../estilos/inicioSesion.css";

export default class InicioSesion extends Component {
  state = {
    status: false,
    succes: false,
    usua: "",
    cont: "",
  };

  enInicioSesion = (e) => {
    e.preventDefault();
    iniciarSesion(this.state.usua, this.state.cont).then((res) => {
      if (res) {
        this.setState({
          ...this.state,
          status: true,
          succes: true,
        });
      } else {
        this.setState({
          ...this.state,
          status: true,
        });
      }
    });
  };

  onChangeUsua = (e) => {
    this.setState({ ...this.state, usua: e.target.value });
  };

  onChangeCont = (e) => {
    this.setState({ ...this.state, cont: e.target.value });
  };

  render() {
    if (this.state.succes === true) {
      return <Navigate to="tablero/inicio" />;
    }
    return (
      <div className="inicios">
      <div className="m-0 vh-100 row justify-content-center align-items-center">
        <div className="card text-center" id="card_sesion">
          <div className="card-body justify-content-center align-items-center">
            <h5 className="card-title text-center">Inicio sesión</h5>
            <form onSubmit={this.enInicioSesion}>
              <div className="col-auto m-2">
                <label htmlFor="inputUsuario" className="lbl_cmp">
                  Usuario:
                </label>
                <input
                  type="text"
                  placeholder="Usuario"
                  className={
                    "form-control " +
                    (this.state.status && this.state.usua === ""
                      ? "is-invalid"
                      : "")
                  }
                  id="inputUsuario"
                  aria-describedby="validacionUsua"
                  onChange={this.onChangeUsua}
                />
                <div id="validacionUsua" className="invalid-feedback">
                  El campo usuario es obligatorio
                </div>
              </div>
              <div className="col-auto m-2">
                <label className="lbl_cmp">Contraseña:</label>
                <input
                  type="password"
                  placeholder="Contraseña"
                  className={
                    "form-control " +
                    (this.state.status && this.state.cont === ""
                      ? "is-invalid"
                      : "")
                  }
                  aria-describedby="validacionCont"
                  onChange={this.onChangeCont}
                />
                <div id="validacionCont" className="invalid-feedback">
                  El campo contraseña es obligatorio
                </div>
              </div>
              <div className="col-12 m-2">
                <button className="btn btn-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
