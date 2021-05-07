// Toda la info para gestionar la coneccion
const db = require("mongoose");
db.Promise = global.Promise; //utilice las promesas nativas de node (clase nativa de node)

async function connect(url) {
  await db.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("[db] conectada con exito");
}

module.exports = connect;
