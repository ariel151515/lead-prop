import React from "react";
import Etiqueta from './Etiqueta'
import styled from 'styled-components';
import {useLimiteEtiquetas} from './../contextos/contextoLiimiteEtiquetas'

const Uu = styled.ul`
    padding: 0px;
    padding-top:-10px;
    width:101%;
    max-height:350px;
  /*  overflow-y: scroll; */
`;

const HH = styled.p`
    font-size:14px;
    font-family: 'roboto', arial, sans-serif;
    text-align:center;
    padding-bottom: 10%;
    padding-top: 10%;
`;


const ListaDeEtiquetas = ({etiquetas,setEtiquetas}) => {
  // Cantidad de etiquetas superadas
  const {setCantidad} = useLimiteEtiquetas();

    const eliminarTarea = (id) => {
        setEtiquetas(etiquetas.filter((eti)=> {
           if(eti.id !== id) {
            setCantidad(false)
               return eti;
           }
           return;
        }))
    }
    

    const editarEtiqueta = (id, nuevoTexto) => {
        setEtiquetas(etiquetas.map((etic) => {
              if(etic.id === id) {
                   return{
                       ...etic,
                       texto: nuevoTexto
                   }
              }
              return etic;
        }))
    }

    
    return ( 
        <Uu>
            { etiquetas.length > 0 ?          
                 etiquetas.map((etiqueta) => {
                     return <Etiqueta key={etiqueta.id} etiqueta={etiqueta} eliminarTarea={eliminarTarea} editarEtiqueta={editarEtiqueta}/>
                })
                :
                <HH>No hay tareas para mostrar</HH>
            }
        </Uu>
     );
}
 
export default ListaDeEtiquetas;