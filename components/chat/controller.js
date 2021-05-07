const store = require("./store");

let addChat = (users) => {
  return new Promise((resolve, reject) => {
    if (!users) {
      return reject("Problema en los usuarios");
    }

    const chat = {
      users,
    };

    store.add(chat);
    resolve(chat);
  });
};

module.exports = {
  addChat,
};
