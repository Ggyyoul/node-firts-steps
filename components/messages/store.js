const db = require("mongoose");
const Model = require("./model");
db.Promise = global.Promise; //utilice las promesas nativas de node (clase nativa de node)
db.connect(
  "mongodb://db_user:123abc@cluster0-shard-00-00.hochh.mongodb.net:27017,cluster0-shard-00-01.hochh.mongodb.net:27017,cluster0-shard-00-02.hochh.mongodb.net:27017/telegram?ssl=true&replicaSet=atlas-lnnmdu-shard-0&authSource=admin&retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

console.log("[db] conectada con exito");

function addMessages(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages() {
  // return list;
  const messages = await Model.find();
  return messages;
}

module.exports = {
  add: addMessages,
  list: getMessages,
};
