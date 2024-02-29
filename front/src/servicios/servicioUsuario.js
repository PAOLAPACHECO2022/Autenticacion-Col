import axios from "axios";
const urlBase = "http://localhost:3001/api/v1/auth";

export async function iniciarSesion(nombreUsuario, contrasenia) {
  try {
    let res = await axios.post(urlBase + "/signin", {
      username: nombreUsuario,
      password: contrasenia,
    });
    if (res.data || res.data.accessToken) {
      localStorage.setItem("token", res.data.accessToken);
      localStorage.setItem("nombre", res.data.nombre);
      return true;
    }
    return false;
  } catch (error) {
    console.log(error)
    console.log(error.response.data)
    return false;
  }
}
