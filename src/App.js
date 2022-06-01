/* ultimo 01/06/2022 */
import React, {useState} from "react";
import './App.css';
import WebFont from 'webfontloader';
import {Routes, Route} from 'react-router-dom'
import Dashboard from './componentes/Dashboard'
import MisDatos from './componentes/MisDatos'
import Soporte from './componentes/Soporte'
import Landing from './componentes/Landing'
import RegistroUsuarios from './componentes/RegistroUsuarios'
import IniciarSesion from './componentes/IniciarSesion'
import GestionarEtiquetas from './componentes/GestionarEtiquetas'
import MensajeWhatsApp from './componentes/MensajeWhatsApp'
import CrearPublicacion from './componentes/CrearPublicacion'
import PanelPublicaciones from "./componentes/PanelPublicaciones";
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns'
import EditarPublicacion from './componentes/EditarPublicacion'
import Error404 from './componentes/Error404'



WebFont.load({
  google: {
    //Roboto:wght@300;400;700;900&family=Work+Sans:wght@400;500;700
    families: ['Roboto:300,300,700,900', 'sans-serif']
  }
});


function App() {

  
  /* Esto es un ternario: {error.email && <p> {error.email} </p>} -  si error.email es true retorna <p>*/
  const [numeroWhatsapp, setNumeroWhatsapp] = useState('');
  const [mensajeWhatsapp, setMensajeWhatsapp] = useState('');

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
        },
        {
          id:uuidv4(),
          fecha:format(new Date(), 'yyyy-MM-dd'),
          nombrePublicacion:'Casa Pachuca',
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
    <>
        <Routes>
           <Route path="*" element={ <Error404 />} />
           <Route path="/" exact={true} element={<Dashboard 
                                        numeroWhatsapp={numeroWhatsapp}
                                        setNumeroWhatsapp={setNumeroWhatsapp}
                                        mensajeWhatsapp={mensajeWhatsapp}
          
                                        />}
                                      />
           <Route path="/mis-datos" element={<MisDatos/>}/>
           <Route path="/soporte" element={<Soporte/>}/>
           <Route path="/landing/:id" element={<Landing 
                                                    publicacion={publicacion} 
                                                    setPublicacion={setPublicacion}
                                                     />}
                                                  />
           <Route path="/registro-usuarios" element={<RegistroUsuarios/>}/>
           <Route path="/iniciar-sesion" element={<IniciarSesion/>}/>
           <Route path="/gestionar-etiquetas" element={<GestionarEtiquetas/>}/>
           <Route path="/mensajewhatsapp" element={<MensajeWhatsApp mensajeWhatsapp={mensajeWhatsapp} setMensajeWhatsapp={setMensajeWhatsapp}/>}/>
           
           <Route path="/crear-publicacion" element={<CrearPublicacion publicacion={publicacion} setPublicacion={setPublicacion}/>}/>
           <Route path="/panel-publicaciones" element={<PanelPublicaciones publicacion={publicacion} setPublicacion={setPublicacion}/>}/>
           <Route path="/editar-publicacion/:id" element={<EditarPublicacion publicacion={publicacion} setPublicacion={setPublicacion}/>}/>
           <Route element={ <Error404 />} />
        </Routes>
    </>
  );

  
}

export default App;
