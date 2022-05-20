import React from "react"
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'


const B = styled.button`
   width: 100%;
   padding-top: 15px;
   padding-bottom:15px;
   color: #ffffff;
   font-family: 'roboto', arial, sans-serif;
   font-size:14px;
   background: #818BFE;
   cursor:pointer;
   margin-top:-10px;
   border: none;
`;


const Btn = ({value,setModal}) => {
    
    return ( 
        <B onClick={() => setModal(true)}>
            {value}
            <FontAwesomeIcon icon={faPlus} style={{ marginLeft:'10px' }} />
        </B>
     );
}
 
export default Btn;

