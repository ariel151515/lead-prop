import React from "react";
import Header from './Header'
import Menu from './Menu'
import styled from 'styled-components';
import {useMuestraMenu} from '../contextos/contextoMenu'
import {ContenedorGeneral} from '../elementos/Elementos'
import {Helmet} from "react-helmet";


const EditarLanding = () => {
  const {menu, setMenu} = useMuestraMenu();

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