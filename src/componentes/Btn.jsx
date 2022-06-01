import React from "react"
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'


const B = styled.button`
    padding: 8.5px;
    float: right;
    cursor: pointer;
    margin-top:10px;
    margin-right: 43px;

    
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


const Btn = ({value, setVentanaModalAgregarEtiquetas}) => {
    
    return ( 
        <B onClick={() => setVentanaModalAgregarEtiquetas(true)}>
            {value}
            <FontAwesomeIcon icon={faPlus} style={{ marginLeft:'10px' }} />
        </B>
     );
}
 
export default Btn;

