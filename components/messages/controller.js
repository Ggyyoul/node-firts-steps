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

    console.log(fullMessage);
    resolve(fullMessage);
  });
}

module.exports = {
  addMessage,
};
