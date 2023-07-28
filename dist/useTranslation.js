const {
  useContext
} = require("react");
const {
  TranslationProvider
} = require("./provider");
module.exports = function (key) {
  const {
    messages = {}
  } = useContext(TranslationProvider);
  const t = sent => {
    if (messages[key]) {
      return messages[key][sent] || sent;
    }
    console.error('No key specified for ' + key);
    return sent;
  };
  return {
    t
  };
};