import React from "react";
import Header from './Header'
import Menu from './Menu'
import {useMuestraMenu} from '../contextos/contextoMenu'
import {ContenedorGeneral} from '../elementos/Elementos'
import {Helmet} from "react-helmet";


const MisDatos = () => {
  const {menu, setMenu} = useMuestraMenu();

    return ( 
        <>
            <Helmet>
                <title>Mis Datos</title>
            </Helmet>
            
            <Header menu={menu}/> 
          <ContenedorGeneral menu={menu}>
              <Menu/>
              <h1>Mis Datos</h1>
          </ContenedorGeneral>
        </>
     );
}
 
export default MisDatos;