// mock == falsear la base de datos

const list = [];

function addMessages(message) {
  list.push(message);
}

function getMessages() {
  return list;
}

module.exports = {
  add: addMessages,
  list: getMessages,
};
