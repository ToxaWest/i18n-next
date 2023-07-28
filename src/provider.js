const { createContext , createElement} = require("react");
const TranslationProvider = createContext({});
function Translation ({
              children,
              messages,
              locale
          }) {
    return createElement(TranslationProvider.Provider, {
        value: {
            messages,
            locale
        }
    }, children);
}

module.exports = {
    Translation,
    TranslationProvider
}
