import React, {useState} from "react";
import WebFont from 'webfontloader';
import {Routes, Route} from 'react-router-dom'
import EditarLanding from './componentes/EditarLanding'
import Dashboard from './componentes/Dashboard'
import MisDatos from './componentes/MisDatos'
import Soporte from './componentes/Soporte'
import Landing from './componentes/Landing'
import RegistroUsuarios from './componentes/RegistroUsuarios'
import IniciarSesion from './componentes/IniciarSesion'
import { v4 as uuidv4 } from 'uuid';



WebFont.load({
  google: {
    //Roboto:wght@300;400;700;900&family=Work+Sans:wght@400;500;700
    families: ['Roboto:300,300,700,900', 'sans-serif']
  }
});


function App() {
  const [etiquetas, setEtiquetas] = useState(
      [
        /*
        {
          id:uuidv4(),
          texto: 'Comprado',
          cantidad: 143
        },
        {
          id:uuidv4(),
          texto: 'Contactado',
          cantidad: 27
        },
        {
          id:uuidv4(),
          texto: 'Contactado',
          cantidad: 7
        },
        {
          id:uuidv4(),
          texto: 'Contactado',
          cantidad: 27
        },
        {
          id:uuidv4(),
          texto: 'Contactado',
          cantidad: 0
        }
        */
      ]
    );

  /* Esto es un ternario: {error.email && <p> {error.email} </p>} -  si error.email es true retorna <p>*/

  return (
    <>
        <Routes>
           <Route path="/editar-landing" element={<EditarLanding/>} />
           <Route path="/" element={<Dashboard etiquetas={etiquetas} setEtiquetas={setEtiquetas} />} />
           <Route path="/mis-datos" element={<MisDatos/>} />
           <Route path="/soporte" element={<Soporte/>} />
           <Route path="/landing" element={<Landing/>} />
           <Route path="/registro-usuarios" element={<RegistroUsuarios/>} />
           <Route path="/iniciar-sesion" element={<IniciarSesion/>} />
        </Routes>
    </>
  );
}

export default App;
