import React, {useEffect, useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import {useProspectosAppProvider} from '../contextos/contextoProspectos'
import { format } from 'date-fns'
import styled from 'styled-components'


const Input = styled.input`
    width: 92.5%;
    padding: 20px;
    margin-bottom: 15px;
`;

const Textarea = styled.textarea`
   width: 93%;
   padding: 20px;
`;

const Button = styled.button`
   width: 100%;
   padding: 20px;
   cursor: pointer;
`;

const Form = styled.form`
 width: 100%;
`;



const FormularioAgregarleads = ({id,setNombrePublicacion, nombrePublicacion}) => {
    const {prospectos, setProspectos} = useProspectosAppProvider()
    const [valueNombre, setValueNombre] = useState()
    const [valueEmail, setValueEmail] = useState()
    const [valueTelefono, setValueTelefono] = useState()
    const [mensaje, setMensaje] = useState()

 


    useEffect(() => {
       prospectos.map((e) => {
              if(e.id === id) {
                setNombrePublicacion(e.nombrePublicacion)
              }else{
                  return;
              }
       })
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        
        setProspectos(
                [
                    ...prospectos,
                    {
                        id:uuidv4(),
                        fecha:format(new Date(), 'yyyy-MM-dd'),
                        nombrePublicacion:nombrePublicacion,
                        nombre: valueNombre,
                        telefono: valueTelefono,
                        email: valueEmail,
                        mensaje: mensaje,
                        etiqueta: '',
                        tildado:false,
                        leido:false,
                        elejido:true
                    }

                ]
            )
        /*
            setValueNombre('')
            setValueEmail('')
            setValueTelefono('')
            setMensaje('')
            */

    }

    return ( 

        <Form onSubmit={(e) => handleSubmit(e)}>
            <Input type="text"
                placeholder="Escriba su Nombre"
                value={valueNombre}
                onChange={(e) => setValueNombre(e.target.value)}
                required
                autocomplete="on"
                />
            <Input type="email" 
                placeholder="Escriba su Email"
                value={valueEmail}
                onChange={(e) => setValueEmail(e.target.value)}
                required
                autocomplete="on"
                />
            <Input type="number" 
                placeholder="Escriba su Telefono"
                value={valueTelefono}
                onChange={(e) => setValueTelefono(e.target.value)}
                required
                autocomplete="on"
                />
            <Textarea 
                placeholder="Escriba su mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                required
                autocomplete="on"
                />
            <Button type="submit">Enviar</Button>
        </Form>

     );
}
 
export default FormularioAgregarleads;