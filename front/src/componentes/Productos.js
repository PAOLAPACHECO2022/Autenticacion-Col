import React, { Component } from "react";
import { productosUsuario } from "../servicios/servicioProducto";

export default class Productos extends Component {
  state = {
    status: false,
    productos: [],
  };

  componentDidMount = () => {
    this.cargarProductos();
  };

  cargarProductos = () => {
    productosUsuario().then((res) => {
      this.setState({
        status: true,
        productos: res,
      });
    });
  };

  render() {
    return (
      <div>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Nombre Completo</th>
              <th>Telefono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.status === true &&
              this.state.productos.map((prod) => {
                return (
                  <tr key={prod._id}>
                    <td>{prod.nombre}</td>
                    <td>{prod.phone}</td>
                    <td>
                      <button className="btn btn-primary">Actualizar</button>
                      <button className="btn btn-danger">Borrar</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
