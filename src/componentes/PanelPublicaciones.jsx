import React, {useState} from 'react';
import styled from 'styled-components'
import Menu from './Menu'
import {Helmet} from "react-helmet";
import { v4 as uuidv4 } from 'uuid';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare,faEye,faTrashCan} from '@fortawesome/free-solid-svg-icons'
import PublicacionBox from './PublicacionBox'



const ContenedorPublicaciones = styled.div`
     width: 94%;
     padding: 20px;
     cursor: pointer;
`;

const Contenedor = styled.div`
     width:900px;
     height:500px;
     margin-left: auto;
     margin-right: auto;
     background: #fff;
     padding:20px;
`;

const PanelPublicaciones = ({publicacion}) => {

    console.log(publicacion)
    return ( 
        <>

          <Helmet>
              <title>panel-publicaciones</title>
          </Helmet>

          <Menu/>

          <Contenedor>
              <h1>Panel publicaciones</h1>
                <ContenedorPublicaciones>
                            {publicacion.map((publi) => {
                                return  <ul>
                                          <PublicacionBox publi={publi}/>
                                        </ul>
                            })}
                    </ContenedorPublicaciones>
            </Contenedor>
        </>
     );
}
 
export default PanelPublicaciones;