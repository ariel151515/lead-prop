import React from "react";
import Header from './Header'
import Menu from './Menu'
import {useMuestraMenu} from '../contextos/contextoMenu'
import {ContenedorGeneral} from '../elementos/Elementos'
import {Helmet} from "react-helmet";


const Soporte = () => {
  const {menu} = useMuestraMenu();

    return ( 
        <>
            <Helmet>
                <title>Soporte</title>
            </Helmet>
              
             <Header menu={menu}/> 
          <ContenedorGeneral menu={menu}>
              <Menu/>
              <h1>Soporte</h1>
          </ContenedorGeneral>
        </>
     );
}
 
export default Soporte;