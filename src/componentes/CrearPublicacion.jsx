import React, {useState} from 'react';
import styled from 'styled-components'
import Menu from './Menu'
import {Helmet} from "react-helmet";
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns'

const Contenedor = styled.div`
     width:900px;
     height:500px;
     margin-left: auto;
     margin-right: auto;
     background: #fff;
     padding:20px;
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


const CrearPublicacion = ({publicacion,setPublicacion}) => {
    const [nombrePublicacion, setNombrePublicacion] = useState()
    const [tituloPublicacion, setTituloPublicacion] = useState()
    const [subTitulo, setSubTitulo] = useState()
    const [descripcion, setDescripcion] = useState()

   
   const handleSubmit = (e) => {
            e.preventDefault();
            setPublicacion([
                ...publicacion,
                {
                    id:uuidv4(),
                    fecha:format(new Date(), 'yyyy-MM-dd'),
                    nombrePublicacion:nombrePublicacion,
                    tituloPublicacion:tituloPublicacion,
                    subTitulo:subTitulo,
                    descripcion:descripcion,
                    leads:25,
                    conversion:15
                }
            ])

            setNombrePublicacion('')
            setTituloPublicacion('')
            setSubTitulo('')
            setDescripcion('')

          }
    

    return ( 

        <>
          <Helmet>
              <title>Crear publicacion</title>
          </Helmet>

           <Menu/>

        <Contenedor>
            <h1>Crear publicaciones</h1>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Input type="text"
                       placeholder="Nombre"
                       value={nombrePublicacion}
                       onChange={(e) => setNombrePublicacion(e.target.value)}
                       />
                <Input type="text" 
                       placeholder="Tiuto"
                       value={tituloPublicacion}
                       onChange={(e) => setTituloPublicacion(e.target.value)}
                       />
                <Input type="text" 
                       placeholder="Subtitulo"
                       value={subTitulo}
                       onChange={(e) => setSubTitulo(e.target.value)}
                       />
                <Textarea type="textarea"
                        placeholder="Descripcion"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        />
                <Button type="submit">Crear</Button>
            </Form>

        </Contenedor>

        </>

     );
}
 
export default CrearPublicacion;