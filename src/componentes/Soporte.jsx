import React  from "react";
import Header from './Header'
import Menu from './Menu'
import styled from 'styled-components';
import {useMuestraMenu} from '../contextos/contextoMenu'
import {ContenedorGeneral} from '../elementos/Elementos'
import {Helmet} from "react-helmet";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'


const BtnSoporte = styled.button`
    padding: 8.5px;
    float: right;
    cursor: pointer;
    font-size: 12px;
    color: #444;
    line-height: 1.3;
    box-sizing: border-box;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.03);
    border-radius: .3em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border: 1px solid #CDCACA;
    background: rgb(240,240,240);
    background: linear-gradient(0deg, rgba(240,240,240,1) 0%, rgba(254,254,254,1) 100%);
       :focus {
          border-color: #fff;
          box-shadow: 0 0 1px 1px #7E7777;
          box-shadow: 0 0 0 1px -moz-mac-focusring;
          color: #222; 
          outline: none;
    }
`;

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

        <BtnSoporte onClick={() => alert('Soporte')}>Alerta Soporte</ BtnSoporte>

          </ContenedorGeneral>
        </>
     );
}
 
export default Soporte;