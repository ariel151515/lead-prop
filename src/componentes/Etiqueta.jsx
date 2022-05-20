import React, {useState} from "react"
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTag,faPenToSquare,faXmark,faFolder} from '@fortawesome/free-solid-svg-icons'


const LiC = styled.li`
    width: 93%;
    padding-top:15px;
    padding-bottom:15px;
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
    color: #000;
    margin-left:5px;
    font-family: 'roboto', sans-serif;
    font-size:11px;
    font-weight: bold;
`;

const DDD = styled.div`
   display: flex;
   justify-content: right;
   padding-right: 15px;
   margin-top: -19px;
`;


const Btn = styled.button`
   border:none;
   color: #fff;
   background: #1976D2;
   cursor: pointer;
   float: right;
   width: 25%;
   padding-top: 9px;
   padding-bottom:9px;
   margin-right:28px;
      :hover{
          background: #2E8CE9;
      }
`;

const Input = styled.input`
   width: 60%;
   padding:7px;
   border-style: solid 1 #756D6D;
   color: #756D6D;
`;

const Formulario = styled.form`
   width: 100%;
`;


const Etiqueta = ({etiqueta, eliminarTarea,editarEtiqueta}) => {
    const [editandoEtiqueta, setEditandoEtiqueta] = useState(false); // Muestra y oculta el  formulario de edicion
    const [nuevaEtiqueta,setNuevaEtiqueta] = useState(etiqueta.texto);


    const handleSubmit = (e) => {
        e.preventDefault();
        editarEtiqueta(etiqueta.id,nuevaEtiqueta);
        setEditandoEtiqueta(false);
    }

    return ( 
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
               <FontAwesomeIcon icon={faFolder} style={{ paddingRight:'10px', float: 'left',color:'#D5D925' }}/>
                   {etiqueta.texto}
                <Span>{etiqueta.cantidad}</Span>
 
                <DDD>
                <FontAwesomeIcon 
                        icon={faPenToSquare} 
                        style={{ marginRight:'20px', color:'#E8CCCC' }}
                        onClick={() =>setEditandoEtiqueta(!editandoEtiqueta)}
                        />
                <FontAwesomeIcon 
                        icon={faXmark} 
                        style={{ color:'#E8CCCC' }}
                        onClick={() => eliminarTarea(etiqueta.id)}
                        />
                </DDD>
           </>
         
          } 

        </LiC>
     );
}
 
export default Etiqueta