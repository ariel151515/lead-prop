import React from "react";
import Etiqueta from './Etiqueta'
import styled from 'styled-components';

const Uu = styled.ul`
    padding:0;
`;

const ListaDeEtiquetas = ({etiquetas, setEtiquetas}) => {
    return ( 
        <Uu>
            { etiquetas.length > 0 ?          
                 etiquetas.map((etiqueta) => {
                     return <Etiqueta etiqueta={etiqueta}/>
                })
                :
                <h1>No hay tareas para mostrar</h1>
            }
        </Uu>
     );
}
 
export default ListaDeEtiquetas;