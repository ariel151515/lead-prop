import React from "react";
import Header from '../componentes/Header'
import Menu from '../componentes/Menu'
import {useMuestraMenu} from '../contextos/contextoMenu'
import {ContenedorGeneral} from '../elementos/Elementos'
import {Helmet} from "react-helmet";


const EditarLanding = () => {
  const {menu} = useMuestraMenu();

    return ( 
        <>
            <Helmet>
                <title>Editar Landing</title>
            </Helmet>

            <Header menu={menu}/> 
          <ContenedorGeneral menu={menu}>
              <Menu/>
              <h1>Editar Landing</h1>
          </ContenedorGeneral>

        </>
     );
}
 
export default EditarLanding;