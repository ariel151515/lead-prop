import React, {useContext, useState} from 'react';

const PubliId = React.createContext();

// Hook para acceder al contexto
const usePubliId = () => {
    return useContext(PubliId)
}

const PubliIdProvider = ({children}) => {
 const [publiid, setPubliid] = useState('');

    return ( 
        <PubliId.Provider value={{publiid:publiid, setPubliid:setPubliid}}>
          {children}
        </PubliId.Provider>
     );

}
 
export {PubliIdProvider, usePubliId};