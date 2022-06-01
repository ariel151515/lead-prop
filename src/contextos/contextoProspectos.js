import React, {useContext, useState} from 'react';

const ProspectosApp = React.createContext();

// Hook para acceder al contexto
const useProspectosAppProvider = () => {
    return useContext(ProspectosApp)
}

const ProspectosAppProvider = ({children}) => {
 const [prospectos, setProspectos] = useState([

      /*
        {
         id: 1,
         fecha: '20/05/2022',
         nombrePublicacion: 'Casa pachuca',
         fuenteDeTrafico: 'Facebook',
         nombre: 'Ariel',
         telefono: '1524232425',
         email: 'arielgentile89@gmail.com',
         mensaje: 'Hola, estoy interesado en la casa por favor comuniquense con migo gracias',
         etiqueta: 'No contactado'
     },
     {
        id: 2,
        fecha: '30/05/2022',
        nombrePublicacion: 'Residencial purificacion',
        fuenteDeTrafico: 'Facebook',
        nombre: 'Pedro Gonzales',
        telefono: '1524232425',
        email: 'arielgentile89@gmail.com',
        mensaje: 'Hola, estoy interesado.Gracias',
        etiqueta: 'No contactado'
    }
    
    */
 ]);

    return ( 
        <ProspectosApp.Provider value={{prospectos: prospectos, setProspectos:setProspectos}}>
          {children}
        </ProspectosApp.Provider>
     );

}
 
export {ProspectosAppProvider, useProspectosAppProvider};

