import React, {useContext, useState} from 'react';

const ListaDeEtiquetas = React.createContext();

// Hook para acceder al contexto
const useListaDeEtiquetas = () => {
    return useContext(ListaDeEtiquetas)
}

const ListaDeEtiquetasProvider = ({children}) => {
 const [etiquetas, setEtiquetas] = useState([]);

 
    return ( 
        <ListaDeEtiquetas.Provider value={{ etiquetas:etiquetas, setEtiquetas:setEtiquetas,}}>
          {children}
        </ListaDeEtiquetas.Provider>
     );

}
 
export {ListaDeEtiquetasProvider, useListaDeEtiquetas};