import InicioSesion from "./componentes/InicioSesion";
import Tablero from "./componentes/Tablero";
import Inicio from "./componentes/Inicio";
import Productos from "./componentes/Productos"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InicioSesion/>}></Route>
        <Route path="/tablero/" element={<Tablero/>}>
          <Route path="inicio" element={<Inicio/>}></Route>
          <Route path="productos" element={<Productos/>}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
