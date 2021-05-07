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

let getUser = (filterUser) => {
  return Promise.resolve(store.list(filterUser));
};
module.exports = {
  addUser,
  getUser,
};
