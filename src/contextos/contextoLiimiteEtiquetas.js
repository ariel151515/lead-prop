import React, {useContext, useState} from 'react';

const LimiteEtiquetas = React.createContext();

// Hook para acceder al contexto
const useLimiteEtiquetas = () => {
    return useContext(LimiteEtiquetas)
}

const LimiteEtiquetasProvider = ({children}) => {
 const [cantidad, setCantidad] = useState(false);

    return ( 
        <LimiteEtiquetas.Provider value={{cantidad: cantidad, setCantidad:setCantidad}}>
          {children}
        </LimiteEtiquetas.Provider>
     );

}
 
export {LimiteEtiquetasProvider, useLimiteEtiquetas};