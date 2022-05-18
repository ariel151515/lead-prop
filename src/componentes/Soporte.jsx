import React from "react";
import Header from './Header'
import Menu from './Menu'
import {useMuestraMenu} from '../contextos/contextoMenu'
import {ContenedorGeneral} from '../elementos/Contenedores'
import {Helmet} from "react-helmet";


const Soporte = () => {
  const {menu, setMenu} = useMuestraMenu();

    return ( 
        <>
            <Helmet>
                <title>Soporte</title>
            </Helmet>

          <ContenedorGeneral menu={menu}>
              <Menu/>
              <Header/>
              <h1>Soporte</h1>
          </ContenedorGeneral>
        </>
     );
}
 
export default Soporte;