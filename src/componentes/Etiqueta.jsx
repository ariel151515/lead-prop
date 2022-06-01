import React, {useState} from "react"
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare,faXmark,faTags} from '@fortawesome/free-solid-svg-icons'
import VentanaModal from './VentanaModal'

const LiC = styled.li`
    width: 97.5%;
    padding-top:10px;
    padding-bottom:10px;
    list-style: none;
    background: #F9F2F2;
    cursor: pointer;
    margin-top:3px;
    padding-left:20px;
    font-family: 'roboto', sans-serif;
    font-size:14px;
    border-radius:4px;
      :hover{
          background: #F3E8E8;
      }
`;



const Btn = styled.button`
   width: 20%;
  padding-top:14px;
  cursor: pointer;
  padding-bottom:13px;
  margin-left:5px;
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

const Input = styled.input`
   width: 73%;
   border:solid 1px #B8BAC0;
   padding:8px;
   border-style: solid 1 #756D6D;
   color: #756D6D;
   border-radius: 2px;
   padding-top: 14px;
   padding-bottom: 14px;
`;

const Formulario = styled.form`
   width: 100%;
`;

const Ppp = styled.p`
   margin-left: 30px;;
`;

const TituloEliminar = styled.p`
   font-family:'Roboto';
   font-size:1em;
   text-align: center;
`;

const Btneliminar = styled.button`
   width: 100%;
  padding-top:14px;
  cursor: pointer;
  padding-bottom:13px;
  margin-left:5px;
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

const BtnConfirmar = styled.button`
   font-family:'Roboto';
   font-size:1em;
   color: #000;
   border: none;
   cursor: pointer;
   width: 100%;
   margin-top: 15px;
   background: #fff;
   width: 100%;
`;



const Etiqueta = ({etiqueta, eliminarEtiqueta,editarEtiqueta}) => {
    const [editandoEtiqueta, setEditandoEtiqueta] = useState(false); // Muestra y oculta el  formulario de edicion
    const [nuevaEtiqueta,setNuevaEtiqueta] = useState(etiqueta.texto);
    const [modalConfirmar, setModalConfirmar] = useState(false); // Modal confirmar eliminacion de etiqueta

   
    const handleSubmit = (e) => {
        e.preventDefault();
        editarEtiqueta(etiqueta.id,nuevaEtiqueta);
        setEditandoEtiqueta(false);
    }

   
    const eliminaEtiquetaPop = (id) => {
        setModalConfirmar(true)
    }


    return ( 
      <>

         <VentanaModal modalConfirmar={modalConfirmar} setModalConfirmar={setModalConfirmar} >
             <TituloEliminar>¿Desea eliminar la etiqueta {etiqueta.texto}?</TituloEliminar>
             <Btneliminar onClick={() => eliminarEtiqueta(etiqueta.id)}>Si, eliminar</Btneliminar>
             <BtnConfirmar onClick={() => setModalConfirmar(!modalConfirmar)}>No, fue un error</BtnConfirmar>
         </VentanaModal>

        <LiC>

          { editandoEtiqueta ?

            <Formulario onSubmit={handleSubmit} >
                <Input 
                  type="text"
                  value={nuevaEtiqueta} 
                  onChange={(e) => setNuevaEtiqueta(e.target.value)}

                   />
                <Btn type="submit">Editar</Btn>
            </Formulario>
              :
           <>
               <FontAwesomeIcon icon={faTags} style={{ paddingRight:'10px', float: 'left',color:etiqueta.color, marginTop:'15px' }}/>
               
                <Ppp title={etiqueta.texto}>{etiqueta.texto}
                </Ppp>
               
 
                <FontAwesomeIcon 
                        icon={faPenToSquare} 
                        style={{ marginRight:'67px', color:'#E8CCCC', float: 'right', marginTop:'-30px' }}
                        onClick={() =>setEditandoEtiqueta(!editandoEtiqueta)}
                        />
                <FontAwesomeIcon 
                        icon={faXmark} 
                        style={{ marginRight:'25px', color:'#E8CCCC', float: 'right', marginTop:'-30px'}}
                        onClick={() => eliminaEtiquetaPop(etiqueta.id)}
                        />
             
           </>
         
          } 

        </LiC>
        </>
     );
}
 
export default Etiqueta