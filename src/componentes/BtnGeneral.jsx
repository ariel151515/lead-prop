import React from "react"
import styled from 'styled-components';


const B = styled.button`
    padding: 6px;
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

const BtnGeneral = ({filtrarPorEtriqueta,agregarEtiqueta,crearNuevaEtiqueta}) => {
    return ( 
        <B>
            {filtrarPorEtriqueta && filtrarPorEtriqueta}
            {agregarEtiqueta && agregarEtiqueta}
            {crearNuevaEtiqueta && crearNuevaEtiqueta}
        </B>
     );
}
 
export default BtnGeneral;