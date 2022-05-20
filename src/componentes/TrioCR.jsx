import React from "react"
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChartColumn,faEye,faBullseye} from '@fortawesome/free-solid-svg-icons'


const Contenedor = styled.div`
    background: #FAFAFA;
    padding-top: 20px;
    padding-bottom:20px;
`;

const Texto = styled.p`
    background: #FAFAFA;
    padding: 5px;
    margin-top:-23px;
    font-family: 'roboto', arial, sans-serif;
    font-size:14px;
    margin-left: 30px;
`;


const Ulcontenedor = styled.div`
   margin-left:-12px;
`;


const TrioCR = () => {
    return ( 
        <Contenedor>
           <Ulcontenedor>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faChartColumn}  style={
                                                { 
                                                    color: '#000', 
                                                    fontSize: '20px', 
                                                    marginLeft: '0px',                   
                                                }
                                            }/>
                                            <Texto>15%</Texto>
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faEye}  style={
                                                { 
                                                    color: '#000', 
                                                    fontSize: '20px', 
                                                    marginLeft: '0px',                   
                                                }
                                            }/>
                                            <Texto>Visitas 1000</Texto>
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faBullseye}  style={
                                                { 
                                                    color: '#000', 
                                                    fontSize: '20px', 
                                                    marginLeft: '0px',                   
                                                }
                                            }/>
                                            <Texto>Leads 147</Texto>
                    </li>

                </ul>
           </Ulcontenedor>
        </Contenedor>
     );
}
 
export default TrioCR;