import React from "react";
import Header from './Header'
import Menu from './Menu'
import styled from 'styled-components';
import {useMuestraMenu} from '../contextos/contextoMenu'
import {ContenedorGeneral} from '../elementos/Contenedores'
import {Helmet} from "react-helmet";


const EditarLanding = () => {
  const {menu, setMenu} = useMuestraMenu();

    return ( 
        <>
            <Helmet>
                <title>Editar Landing</title>
            </Helmet>

          <ContenedorGeneral menu={menu}>
              <Menu/>
              <Header/>
              <h1>Editar Landing</h1>
          </ContenedorGeneral>
        </>
     );
}
 
export default EditarLanding;