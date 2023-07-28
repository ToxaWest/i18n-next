import {createContext} from "react";

export const TranslationProvider = createContext({});

export default function Translation({children, messages, locale}) {
    return <TranslationProvider.Provider value={{messages, locale}}>{children}</TranslationProvider.Provider>
}
