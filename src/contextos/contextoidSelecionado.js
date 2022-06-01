import React, {useContext, useState} from 'react';

const IdSeleccionado = React.createContext();

// Hook para acceder al contexto
const useIdSeleccionado = () => {
    return useContext(IdSeleccionado)
}

const IdSeleccionadoProvider = ({children}) => {
 const [seleccionado, setSeleccionado] = useState([]);

    return ( 
        <IdSeleccionado.Provider value={{seleccionado:seleccionado, setSeleccionado:setSeleccionado}}>
          {children}
        </IdSeleccionado.Provider>
     );

}
 
export {IdSeleccionadoProvider, useIdSeleccionado};