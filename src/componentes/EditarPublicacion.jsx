import React, {useState} from 'react';
import styled from 'styled-components'
import Menu from './Menu'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare,faEye,faTrashCan} from '@fortawesome/free-solid-svg-icons'
import {Helmet} from "react-helmet";
import { useParams } from 'react-router-dom';
import { format } from 'date-fns'
import { v4 as uuidv4 } from 'uuid';

const Contenedor = styled.div`
     width:900px;
     height:500px;
     margin-left: auto;
     margin-right: auto;
     background: #fff;
     padding:20px;
     margin-top: 100px;;
`;

const Form = styled.form`
     width: 100%;
`;

const Input = styled.input`
     width: 97%;
     margin-bottom: 10px;
     padding: 10px;
`;

const Textarea = styled.textarea`
    width: 97%;
    padding: 10px;
     
`;

const Button = styled.button`
     width: 100%;
     padding: 20px;
     cursor: pointer;
`;


const EditarPublicacion = ({publicacion, setPublicacion}) => {
    const {id} = useParams();

    const [nombreEditadoPublicacion, setNombreEditadoPublicacion] = useState()
    const [tituloEditadoPublicacion, setTituloEditadoPublicacion] = useState()
    const [subEditadoTitulo, setEditadoSubTitulo] = useState()
    const [descripcionEditado, setDescripcionEditado] = useState()



    const handleSubmit = (e) => {
        e.preventDefault();

        setPublicacion(
            publicacion.map((e) => {
                if(e.id === id) {
                 return  {
                          ...e,
                          nombrePublicacion:nombreEditadoPublicacion,
                          tituloPublicacion:tituloEditadoPublicacion,
                          subTitulo:subEditadoTitulo,
                          descripcion: descripcionEditado,
                          leads:30,
                          conversion:35
                         }
  
                }else {
                    return e;
                }
            })
        )

        console.log(publicacion)
       
    }



    return ( 
          <>
             <Helmet>
              <title>Editar publicacion</title>
             </Helmet>

           <Menu/>

            <Contenedor>
                <h1>Editar publicacion</h1>

                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Input type="text"
                        placeholder="Nombre"
                        value={nombreEditadoPublicacion}
                        onChange={(e) => setNombreEditadoPublicacion(e.target.value)}
                        />
                    <Input type="text" 
                        placeholder="Tiuto"
                        value={tituloEditadoPublicacion}
                        onChange={(e) => setTituloEditadoPublicacion(e.target.value)}
                        />
                    <Input type="text" 
                        placeholder="Subtitulo"
                        value={subEditadoTitulo}
                        onChange={(e) => setEditadoSubTitulo(e.target.value)}
                        />
                    <Textarea type="textarea"
                            placeholder="Descripcion"
                            value={descripcionEditado}
                            onChange={(e) => setDescripcionEditado(e.target.value)}
                            />
                    <Button type="submit">Crear</Button>
                </Form>
            </Contenedor>
        </>
       
     );

}
 
export default EditarPublicacion;