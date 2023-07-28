import { createContext } from "react";
export const TranslationProvider = /*#__PURE__*/createContext({});
export default function Translation({
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
