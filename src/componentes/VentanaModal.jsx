import React from "react"
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'


const Overlay = styled.div`
   width:100vw;
   height: 100vh;
   position: fixed;
   top:0;
   left:0;
   background: rgba(0,0,0,.7);

   display: flex; /* No saques el flex */
   align-items: center; /* centra de vertical */
   justify-content: center; /* centra de forma horizontal */
`;


const ContenedorModal = styled.div`
   background: #fff;
   width: 20%;
   position: relative;
   border-radius: 5px;
   box-shadow:rgba(100,100,111,0.2) 0px 7px 29px 0px;
   margin-top: -15%;
   padding: 35px 50px 50px 50px;
`;

const BotonCerrar = styled.button`
     position: absolute; /* Se puede usar absolute porque el contenedor padre tiene position relative */

     background:none;
     cursor: pointer;
     top: -35px; /* se puede usar con pisition absolute!! */
     right:0px;
     border: none;
     font-size: 24px;
     color: #fff;
`;


const VentanaModal = ({children,ventanaModalAgregarEtiquetas,setVentanaModalAgregarEtiquetas,modalConfirmar,setMuestraVentanaConfirmar,muestraVentanaConfirmar}) => {
    // Muestra la ventana modal y el formulario
    
    return ( 
           <>
                { ventanaModalAgregarEtiquetas && 

                    <Overlay>
                        <ContenedorModal>
                            {children}

                            <BotonCerrar onClick={() => setVentanaModalAgregarEtiquetas(!ventanaModalAgregarEtiquetas)}>
                                <FontAwesomeIcon icon={faXmark} />
                            </BotonCerrar>
                            
                        </ContenedorModal>
                    </Overlay>    

                }

                { modalConfirmar && 

                    <Overlay>
                        <ContenedorModal>
                            {children}
                        </ContenedorModal>
                    </Overlay>    

                }

                { muestraVentanaConfirmar && 

                    <Overlay>
                        <ContenedorModal>
                            <BotonCerrar onClick={() => setMuestraVentanaConfirmar(!muestraVentanaConfirmar)}>
                                <FontAwesomeIcon icon={faXmark} />
                            </BotonCerrar>
                            {children}
                        </ContenedorModal>
                    </Overlay>    
                }
           </>
     );
}
 
export default VentanaModal;