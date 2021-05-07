const Model = require("./model");

let addUser = (user) => {
  const myUser = new Model(user);
  return myUser.save();
};

let listUsers = () => {
  return Model.find();
};

module.exports = {
  add: addUser,
  list: listUsers,
};
