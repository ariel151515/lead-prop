import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import Menu from './Menu'
import { v4 as uuidv4 } from 'uuid';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare,faEye,faTrashCan} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'



const Contenedor = styled.div`
     color: #000;
     font-size:14px;
     font-family: 'roboto', arial, sans-serif;
     list-style: none;
     padding: 0;
     margin: 0; 
`;


const Div = styled.div`
    width: 100%;
    margin-left: -40px;
    padding: 20px;
    background: #fff;
    border: 1px solid;
     li{
         display: inline-block;
         margin-right:20px;
     }
`;

const PublicacionBox = ({publi}) => {

    return ( 
        <>
          <Contenedor>  
    
             <Div>
                <li><b>Id:</b>{publi.id}</li>
                <li><b>Creado:</b> {publi.fecha}</li>
                <li><b>Nombre:</b> {publi.nombrePublicacion}</li>
                <li><b>Leads generados:</b> {publi.leads}</li>
                <li><b>Conversion Rate:</b> {publi.conversion}%</li>

                <Link to={`/editar-publicacion/${publi.id}`}>
                   <li><FontAwesomeIcon icon={faPenToSquare} style={{marginLeft:'30px'}} /></li>
                </Link>

                <li><FontAwesomeIcon icon={faTrashCan}/></li>

                <Link to={`/landing/${publi.id}`}>
                     <li><FontAwesomeIcon icon={faEye}/></li>
                </Link>

             </Div>
        </Contenedor>
        </>
     );
}
 
export default PublicacionBox;