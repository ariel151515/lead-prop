import React, {useContext, useState} from 'react';

const NumeroDeWhatsApp = React.createContext();

// Hook para acceder al contexto
const useNumeroDeWhatsApp = () => {
    return useContext(NumeroDeWhatsApp)
}

const NumeroDeWhatsAppProvider = ({children}) => {
 const [numeroWhatsapp, setNumeroWhatsapp] = useState();

    return ( 
        <NumeroDeWhatsApp.Provider value={{numeroWhatsapp:numeroWhatsapp, setNumeroWhatsapp:setNumeroWhatsapp}}>
          {children}
        </NumeroDeWhatsApp.Provider>
     );

}
 
export {NumeroDeWhatsAppProvider, useNumeroDeWhatsApp};