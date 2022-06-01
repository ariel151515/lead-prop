import React, {useState, useEffect} from "react";
import {Helmet} from "react-helmet";
import FormularioAgregarleads from "./FormularioAgregarLeads"
import styled from 'styled-components'
import { useParams } from 'react-router-dom';

const Contenedor = styled.div`
     color: #000;
     padding:20px;
     font-size:14px;
     background: #fff;
     width:700px;
     font-family: 'roboto', arial, sans-serif;
     list-style: none;
     margin-left: auto;
     margin-right: auto;
     width: 600px;
`;


const Landing = ({publicacion}) => {
     const {id} = useParams();

     const [fecha,setFecha] = useState()
     const [nombrePublicacion,setNombrePublicacion] = useState()
     const [tituloPublicacion,setTituloPublicacion] = useState()
     const [subTitulo,setSubTitulo] = useState()
     const [descripcion,setDescripcion] = useState()
     const [leads,setLeads] = useState()
     const [conversion,setConversion] = useState()


    useEffect(() => {
        publicacion.map((e) => {
           if(e.id === id) {
              setFecha(e.fecha)
              setNombrePublicacion(e.nombrePublicacion)
              setTituloPublicacion(e.tituloPublicacion)
              setSubTitulo(e.subTitulo)
              setDescripcion(e.descripcion)
              setLeads(e.leads)
              setConversion(e.conversion)
           }
        })
    })
  

    return ( 
        <>
            <Helmet>
                <title>Landing</title>
            </Helmet>

            <Contenedor>
            <h1>Landing page</h1>

            <ul>
               <li><b>Fecha:</b>{fecha}</li>
               <li><b>Nombre:</b>{nombrePublicacion}</li>
               <li><b>Titulo:</b>{tituloPublicacion}</li>
               <li><b>Sub titulo:</b>{subTitulo}</li>
               <li><b>Descripcion:</b>{descripcion}</li>
               <li><b>Leads:</b>{leads}</li>
               <li><b>Conversion:</b>{conversion}</li>
            </ul>
               
                <FormularioAgregarleads id={id} setNombrePublicacion={setNombrePublicacion} nombrePublicacion={nombrePublicacion}/>
            </Contenedor>

        </>
     );
}
 
export default Landing; 