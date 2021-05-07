const store = require("./store");

let addUser = (name) => {
  if (!name) {
    return Promise.reject("Invalid Name");
  }
  const user = {
    name,
  };
  return store.add(user);
};

let listUsers = () => {
  return store.list();
};
module.exports = {
  addUser,
  listUsers,
};
