const Model = require("./model");

function addChats(users) {
  const myChat = new Model(users);
  myChat.save();
}

module.exports = {
  add: addChats,
};
