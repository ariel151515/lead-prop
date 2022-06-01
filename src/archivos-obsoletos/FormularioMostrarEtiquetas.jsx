import React,{useState} from "react"
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import {useMuestraModal} from './../contextos/contextoFormularioAgregarEtiqueta'
import { v4 as uuidv4 } from 'uuid';


const VentanaModal = styled.div`
   width: 100%;
   height:100%;
   background: #000;
   opacity:80%;
   position:absolute;
   display: ${(props) => props.modal ? 'flex' : 'none'};
   transition: all 0.2s ease;
`;

const Contenedor = styled.div`
   width: 20%;
   height:180px;
   background: #fff;
   margin-left: auto;
   margin-right: auto;
   padding: 30px;
   margin-top: 12%;
`;

const In = styled.input`
   width: 97%;
   height: 30px;
   margin-top:5px;
   padding-left: 10px;
`;

const B = styled.button`
   width: 100%;
   margin-top:5px;
   padding-top: 10px;
   padding-bottom: 10px;
   cursor: pointer;
   background:#1976D2;
   border:none;
   color: #fff;
   font-family: 'roboto', arial, sans-serif;
   font-size:14px;
`;

const Texto = styled.p`
   color: #000;
   text-align: center;
   font-family: 'roboto', arial, sans-serif;
   font-size:18px;
`;



const FormularioMostrarEtiquetas = ({etiquetas,setEtiquetas}) => {
    // Muestra la ventana modal y el formulario
    const {modal, setModal} = useMuestraModal();

    // Tomar el valor de los inpiut del mercado del
    const [value, setValue] = useState();



    const handleSubmit = (e) => {
       e.preventDefault();

         setEtiquetas(
            [
               ...etiquetas,
               {
                  id:uuidv4(),
                  texto:value,
                  cantidad: ['sdfsdfsd','dfsdfd','dfsfsdf']
               }
            ]
          )

          setValue('');
      }

    return (
       <>
           <VentanaModal modal={modal}>
                  <Contenedor>
                     <FontAwesomeIcon icon={faCircleXmark} onClick={() => setModal(!modal)} style={{float: 'right', marginRight: '-35px', marginTop: '-35px', color: 'red', cursor: 'pointer'}}/>

                        <Texto>Escribe el nombre de la etiqueta</Texto>
                        <form onSubmit={(e) => handleSubmit(e)}>
                        <In type="text"
                           placeholder="Nombre de la etiqueta"
                           value={value}
                           onChange={(e) => setValue(e.target.value)}
                           required
                           />
                        <B type="submit">Agregar Etiqueta</B>
                        </form>
                  </Contenedor>
        </VentanaModal>
       </>
    )
}
 
export default FormularioMostrarEtiquetas;