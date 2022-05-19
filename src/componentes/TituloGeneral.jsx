import React from "react"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const ContenedorTituloGeneral = styled.div`
    margin-top:2%;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    margin-left:15px;
`;

const TituloGeneral = () => {
    return ( 
      <ContenedorTituloGeneral>
          <p>Hola Ariel, Felicitaciones 127 Leads!</p>
          <Link to="/landing" target="_blank">
             <FontAwesomeIcon icon={faEye} style={{ float: 'left', marginTop: '-37px', marginLeft: '300px', color: '#BCBFCF'}}/>
          </Link>
      </ContenedorTituloGeneral>
     );
}
 
export default TituloGeneral;