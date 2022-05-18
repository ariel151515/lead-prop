import React, {useContext, useState} from 'react';

const MuestraMenu = React.createContext();

// Hook para acceder al contexto
const useMuestraMenu = () => {
    return useContext(MuestraMenu)
}

const MuestraMenuProvider = ({children}) => {
 const [menu, setMenu] = useState([]);

    return ( 
        <MuestraMenu.Provider value={{menu: menu, setMenu:setMenu}}>
          {children}
        </MuestraMenu.Provider>
     );

}
 
export {MuestraMenuProvider, useMuestraMenu};