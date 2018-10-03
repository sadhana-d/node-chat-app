var generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt : new Date().getTime()
  };
console.log("Coming to generate msg definition");
};

module.exports = {generateMessage};
