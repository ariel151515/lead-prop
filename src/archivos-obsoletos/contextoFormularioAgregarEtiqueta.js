import React, {useContext, useState} from 'react';

const MuestraModal = React.createContext();

// Hook para acceder al contexto
const useMuestraModal = () => {
    return useContext(MuestraModal)
}

const MuestraModalProvider = ({children}) => {
 const [modal, setModal] = useState(false);
 

    return ( 
        <MuestraModal.Provider value={{modal: modal, setModal:setModal}}>
          {children}
        </MuestraModal.Provider>
     );

}
 
export {MuestraModalProvider, useMuestraModal};