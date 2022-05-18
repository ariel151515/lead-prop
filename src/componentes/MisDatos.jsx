import React from "react";
import Header from './Header'
import Menu from './Menu'
import styled from 'styled-components';
import {useMuestraMenu} from '../contextos/contextoMenu'
import {ContenedorGeneral} from '../elementos/Contenedores'
import {Helmet} from "react-helmet";


const MisDatos = () => {
  const {menu, setMenu} = useMuestraMenu();

    return ( 
        <>
            <Helmet>
                <title>Mis Datos</title>
            </Helmet>
            
          <ContenedorGeneral menu={menu}>
              <Menu/>
              <Header/>
              <h1>Mis Datos</h1>
          </ContenedorGeneral>
        </>
     );
}
 
export default MisDatos;