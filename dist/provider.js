const {
  createContext
} = require("react");
const TranslationProvider = /*#__PURE__*/createContext({});
function Translation({
  children,
  messages,
  locale
}) {
  return /*#__PURE__*/React.createElement(TranslationProvider.Provider, {
    value: {
      messages,
      locale
    }
  }, children);
}
module.exports = {
  Translation,
  TranslationProvider
};