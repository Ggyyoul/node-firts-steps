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

async function getMessages(filterUser) {
  let filter = {};
  if (filterUser != null) {
    filter = { user: filterUser };
  }
  const messages = await Model.find(filter);
  return messages;
}

async function updateMessage(id, message) {
  const foundMessage = await Model.findOne({
    _id: id,
  });
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

function deleteMessage(id) {
  return Model.deleteOne({
    _id: id,
  });
}
module.exports = {
  add: addMessages,
  list: getMessages,
  updateMessage: updateMessage,
  remove: deleteMessage,
};
