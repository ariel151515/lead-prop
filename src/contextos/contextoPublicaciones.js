import React, {useContext, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns'


const Publicaciones = React.createContext();

// Hook para acceder al contexto
const usePublicaciones = () => {
    return useContext(Publicaciones)
}

const PublicacionesProvider = ({children}) => {
    const [publicacion, setPublicacion] = useState(
        [
            /*
            {
                id:uuidv4(),
                fecha:format(new Date(), 'yyyy-MM-dd'),
                nombrePublicacion:'Residencial Purificacion',
                tituloPublicacion:'Alejandro Magariños Cervantes 4300',
                subTitulo:'Casa en venta en Floresta',
                descripcion:'-Piso de granito en living comedor, con ventana al exterior, cerámica en todo lo que queda de la planta baja, piso de madera en habitaciones del primer piso y cerámica en escritorio/jardín de invierno. Por último piso de cerámica en terraza y quincho.',
                leads:30,
                conversion:35
            }
            */
        ]
        )

    return ( 
        <Publicaciones.Provider value={{publicacion:publicacion, setPublicacion:setPublicacion}}>
          {children}
        </Publicaciones.Provider>
     );

}
 
export {PublicacionesProvider, usePublicaciones}