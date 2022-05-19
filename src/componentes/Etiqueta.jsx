import React from "react"
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTag,faPenToSquare,faXmark} from '@fortawesome/free-solid-svg-icons'


const LiC = styled.li`
    width: 93%;
    padding-top:15px;
    padding-bottom:15px;
    position: relative;
    list-style: none;
    background: #F9F2F2;
    cursor: pointer;
    margin-top:3px;
    padding-left:20px;
    font-family: 'roboto', sans-serif;
    font-size:14px;
    border-radius:2px;
      :hover{
          background: #F3E8E8;
      }
`;


const Span = styled.span`
    font-weight: bold;
    margin-left:5px;
    font-family: 'roboto', sans-serif;
`;

const DDD = styled.div`
   display: flex;
   justify-content: right;
   padding-right: 15px;
   margin-top: -19px;
`;


const Etiqueta = ({etiqueta}) => {
    return ( 
        <LiC>
            <FontAwesomeIcon icon={faTag} style={{ paddingRight:'10px', float: 'left' }}/>
            {etiqueta.texto}
            <Span>{etiqueta.cantidad}</Span>
 
            <DDD>
              <FontAwesomeIcon 
                    icon={faPenToSquare} 
                    style={{ marginRight:'20px', color:'#E8CCCC' }}
                    />
              <FontAwesomeIcon 
                    icon={faXmark} 
                    style={{ color:'#E8CCCC' }}
                    />
            </DDD>

        </LiC>
     );
}
 
export default Etiqueta