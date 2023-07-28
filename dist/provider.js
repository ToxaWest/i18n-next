"use strict";

const {
  createContext
} = require("react");
const TranslationProvider = /*#__PURE__*/createContext({});
function Translation(_ref) {
  let {
    children,
    messages,
    locale
  } = _ref;
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