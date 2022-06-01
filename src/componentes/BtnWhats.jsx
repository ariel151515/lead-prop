import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import ReactWhatsapp from 'react-whatsapp';
import styled from 'styled-components'
/* React Whatsapp  npm - https://www.npmjs.com/package/react-whatsapp */



const BtnWhats = ({numeroWhatsapp,mensajeWhatsapp}) => {

    return ( 
  

              <ReactWhatsapp number={numeroWhatsapp}
                              message={mensajeWhatsapp}
                              style={
                                       {
                                          padding: '6px',
                                          textAlign: 'center',
                                          justifyContent: 'center',
                                          display: 'flex',
                                          cursor: 'pointer',
                                          fontSize: '16px',
                                          color: '#444',
                                          lineHeight: '1.3px',
                                          boxSizing: 'border-box',
                                          border: '1px solid #aaa',
                                          boxShadow: '0 1px 0 1px rgba(0,0,0,.03)',
                                          borderRadius: '.3em',
                                          appearance: 'none',
                                          border:'1px solid #CDCACA',
                                          background: 'rgb(240,240,240)',
                                          background: 'linear-gradient(0deg, rgba(240,240,240,1) 0%, rgba(254,254,254,1) 100%)',
                                          width: '31px',
                                          height: '31px'   
                                       }
                                    }
                              >
                  <FontAwesomeIcon icon={faPaperPlane}/>
               </ReactWhatsapp>
             
     );
}
 
export default BtnWhats;