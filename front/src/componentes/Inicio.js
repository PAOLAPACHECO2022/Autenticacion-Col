import React, { Component } from "react";
import "../estilos/inicioSesion.css";
import '../App.css'; 
export default class Inicio extends Component {
  render() {
    return (
      <div className='fondo'>
      
       <div className="vh-100 my-5 rounded-4">
        <div className="card text-center" id="card_sesion">
          <div className="card-body justify-content-center ">
            <h5 className="card-title justify-content-between">La meta final de la verdadera educación es no sólo hacer que la gente haga lo que es correcto, sino que disfrute haciéndolo; no sólo formar personas trabajadoras, sino personas que amen el trabajo; no sólo individuos con conocimientos, sino con amor al conocimiento; no sólo seres puros, 
            sino con amor a la pureza; no sólo personas justas, sino con hambre y sed de justicia (John Ruskin)</h5>
           
          </div>
        </div>
      </div>

      </div>
    )
  }
}
