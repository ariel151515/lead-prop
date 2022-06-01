import React from "react"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import {useProspectosAppProvider} from '../contextos/contextoProspectos'

const ContenedorTituloGeneral = styled.div`
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    margin-left:15px;
    height: 50px;;
`;

const TituloGeneral = () => {
    const {prospectos, setProspectos} = useProspectosAppProvider()

    return ( 
      <ContenedorTituloGeneral>
          <p>Hola Ariel, total de leads guardados {prospectos.length}</p>
          <Link to="/landing" target="_blank">
             <FontAwesomeIcon icon={faEye} style={{ float: 'left', marginTop: '-37px', marginLeft: '300px', color: '#BCBFCF'}}/>
          </Link>
      </ContenedorTituloGeneral>
     );
}
 
export default TituloGeneral;