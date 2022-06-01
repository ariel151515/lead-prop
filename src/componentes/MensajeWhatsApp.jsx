import React from "react"
import styled from "styled-components"
import {Helmet} from "react-helmet";
import Menu from "./Menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'



const Div = styled.div`
  width: 38.5em;
  padding:1.25em;
  background: #fff;
  margin-left: auto;
  margin-right: auto;
  margin-top:5em;
  font-size: 16px;
`;


const Contenedor = styled.div`
   font-size:1em;
   padding:1.25em;
   background: #ffff;
   color: #000000;
   margin-left: auto;
   margin-right: auto;
   margin-top:4.375em;
`;


const Input = styled.textarea`
  width:42em;
  height:6.25em;
  padding:0.625em;
  border: 0.0625em solid #ccc;
`;

const Texto = styled.p`
  font-family: roboto, serif;
  text-align: center;
  margin-bottom: -3.125em;
  font-size: 1em;
`;

const Btn = styled.button`
  width:36.2rem;
  padding-top:14px;
  cursor: pointer;
  padding-bottom:13px;
  font-size: 1em;
  color: #444;
  line-height: 1.3;
  box-sizing: border-box;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0,0,0,.03);
  border-radius: .3em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: 1px solid #CDCACA;
  background: rgb(240,240,240);
  background: linear-gradient(0deg, rgba(240,240,240,1) 0%, rgba(254,254,254,1) 100%);
    :focus {
        border-color: #fff;
        box-shadow: 0 0 1px 1px #7E7777;
        box-shadow: 0 0 0 1px -moz-mac-focusring;
        color: #222; 
        outline: none;
    }
`;



const MensajeWhatsApp = ({mensajeWhatsapp,setMensajeWhatsapp}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Mensaje enviado con exito')
    }

    return ( 

        <>
          <Helmet>
               <title>WhatsApp</title>
          </Helmet>

          <Menu/>


                <Div>
                    <Texto>Aqui puedes personalizar el mensaje que envias por WhatsApp  tus leads</Texto>
                   <Contenedor>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <Input
                                placeholder="Escriba un mensaje personalizado"
                                value={mensajeWhatsapp}
                                onChange={(e) => setMensajeWhatsapp(e.target.value)}
                                />
                            <Btn type="submit">
                                <FontAwesomeIcon icon={faCheck} style={{marginRight:'10px'}}/>
                                Actualizar
                           </Btn>
                        </form>
                   
                    </Contenedor>
                </Div>
          
        </>
     );
}
 
export default MensajeWhatsApp;