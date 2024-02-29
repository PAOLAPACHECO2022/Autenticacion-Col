import axios from "axios";
const urlBase = "http://localhost:3001/api/v1/prod";

export async function productosUsuario() {
  let token = localStorage.getItem("token");
  if (token){
    let res = await axios.get(urlBase + `/user`, {
      headers: {
        "x-access-token": token,
      },
    });
    return res.data;
  }
  
}
