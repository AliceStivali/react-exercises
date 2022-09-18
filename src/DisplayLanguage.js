import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const strings = {
    en: {
        current_lang: 'Current language is English'
    },
    it: {
        current_lang: "La lingua selezionata è l'italiano"
    }
}

export function DisplayLanguage() {
    const language = useContext(LanguageContext)
    return <h3>{strings[language]['current_lang']}</h3>

}




// export class DisplayLanguage extends React.Component {
//     render() {
//         return <div>
//             <LanguageContext.Consumer>
//                 {(Language) => {
//                     return <h1>{strings[Language].current_lang}</h1>
//                 }}
//             </LanguageContext.Consumer>
//         </div>
//     }
// }