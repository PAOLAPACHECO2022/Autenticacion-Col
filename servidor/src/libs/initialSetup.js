const user = require("../domain/models/Usuario");
const prod = require("../domain/models/Producto");

const initialDB = async () => {
  let ids = await createUsers();
  if (ids) {
    createProdcts(ids)
  }
};

const createUsers = async () => {
  try {
    let count = await user.estimatedDocumentCount();

    if (count > 0) return;

    const values = await Promise.all([

      new user({
        nombre: "Lauren Rodriguez",
        nombreUsuario: "lauRodri",
        contrasenia: await user.encryptPassword("LauRo"),
        admin: false
      }).save(),
      
      new user({
        nombre: "Paola Pacheco",
        nombreUsuario: "paoPacheco",
        contrasenia: await user.encryptPassword("PaoPa"),
        admin: true
      }).save(),
    ]);

    console.log("************* Usuarios añadidos *************");
    console.log(values);
    return [values[0]._id.toString(), values[1]._id.toString()];
  } catch (error) {
    console.log(error);
  }
};

const createProdcts = async (userIds) => {
  try {
    let count = await prod.estimatedDocumentCount();

    if (count > 0) return;

    const values = await Promise.all([
      new prod({
        nombre: "Padre: Juan Antonio Rodriguez",
        phone: 60138188,
        idUser: userIds[0]
      }).save(),
      new prod({
        nombre: "Madre: Lauren Daniela Moreno Diaz",
        phone: 60138795,
        idUser: userIds[0]
      }).save(),
      new prod({
        nombre: "Paola Pacheco Moreno",
        phone: 60138195,
        idUser: userIds[1]
      }).save(),
    ]);

    console.log("************* Productos añadidos *************");
    console.log(values);
  } catch (error) {
    console.log(error);
  }
};

module.exports = initialDB;
