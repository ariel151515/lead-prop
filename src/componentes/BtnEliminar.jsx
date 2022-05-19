import React from "react"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

const Btn = styled.button`
   padding-top: 15px;
   padding-bottom:15px;
   padding-left: 25PX;
   padding-right: 25PX;
   color: #656363;
   font-family: 'roboto', arial, sans-serif;
   font-size:14px;
   background: #ffff;
   cursor:pointer;
   margin-top:-10px;
   border:none;
   border-radius:3px;
   float:right;
   margin-top:-55px;
    :hover{
        background: #FBF9F9;
    }
`;

const BtnEliminar = () => {
    return ( 
        <Btn>
             <FontAwesomeIcon icon={faTrash} style={{ marginRight:'10px' }} />
            Eliminar
        </Btn>
     );
}
 
export default BtnEliminar;