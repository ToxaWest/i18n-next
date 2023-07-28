import {useContext} from "react";
import {TranslationProvider} from "./provider";

export default function useTranslation(key) {
    const {messages = {}} = useContext(TranslationProvider);

    const t = (sent) => {
        if(messages[key]){
            return messages[key][sent] || sent
        }
        console.error('No key specified for ' + key);

        return sent
    }

    return {t};
}
