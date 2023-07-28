const { createContext } = require("react");
export const TranslationProvider = /*#__PURE__*/createContext({});
module.exports = function ({
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
