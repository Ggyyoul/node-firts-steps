const store = require("./store");

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error("[messageController]: No hay usuario o mensage");
      return reject("inconsistencia en los datos");
    }
    const fullMessage = {
      user,
      message,
      date: new Date(),
    };
    // console.log(fullMessage);
    store.add(fullMessage);
    resolve(fullMessage);
  });
}

function getMessages() {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject("Invalid data");
    }
    const result = await store.updateMessage(id, message);

    resolve(result);
  });
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
};
