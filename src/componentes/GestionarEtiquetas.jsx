import React, {useState} from 'react';
import Menu from './Menu'
import {useMuestraMenu} from '../contextos/contextoMenu'
import {Helmet} from "react-helmet";
import styled from 'styled-components'
import Etiqueta from './Etiqueta'
import VentanaModal from './VentanaModal'
import  Test from './Test'
import { useListaDeEtiquetas } from "../contextos/contextoEtiquetas";



const DivDos = styled.div`
    padding-bottom: 20px;
    background: #fff;
    width: 45vw;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    margin-top: -20px;
    font-size: 14px;
`;


const BtnAgregaEtiqueta = styled.button`
padding: 8.5px;
float: right;
margin-top:7px;
margin-right: 35px;
cursor: pointer;
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


const Contenedor = styled.div`
           width:45vw;
           border-radius:10px;
           margin-top:1%;
           max-height:400px;
           background: #fff;
           overflow-y: auto;
  
    `;

    const Uu = styled.ul`
           padding: 0px;
           padding-top:0px;
           width:42vw;
           margin-left: auto;
           margin-right: auto;
    `;

    const Texto = styled.p`
           font-family:'roboto';
           font-size: 1em;  
           float:left;
           margin-top: 20px;
    `;


const Box = styled.div`
        width:100%;
        margin-top: 50px;
        padding: 20px;
    `;


const No = styled.p`
    font-family:roboto;
    font-size: 1em;
    color: #8C8E98;
    text-align: center;
    padding-top:6.25em;
    padding-bottom:6.25em;
`;


const Div = styled.div`
    margin-left: auto;
    margin-right: auto;
 
`;



const GetionarEtiquetas = () => {
    const {etiquetas, setEtiquetas} = useListaDeEtiquetas();
    const {menu} = useMuestraMenu();
    const [ventanaModalAgregarEtiquetas, setVentanaModalAgregarEtiquetas] = useState(false)


   
    const eliminarEtiqueta = (id) => {
        setEtiquetas(etiquetas.filter((eti)=> {
           if(eti.id !== id) {
               return eti;
           }
           return;
        }))

        alert('Etiqueta eliminada exitosamente!')
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

        alert('Etiqueta editada exitosamente!')
    }
  

   
    return ( 
        <>
          <Helmet>
           <title>Gestionar Etiquetas</title>
          </Helmet>

          <VentanaModal 
                 ventanaModalAgregarEtiquetas={ventanaModalAgregarEtiquetas}
                 setVentanaModalAgregarEtiquetas={setVentanaModalAgregarEtiquetas}
                  >

               <Test />
          </VentanaModal>


          {/* <Header menu={menu} setMenu={setMenu}/> */}
                <Menu/>

  <DivDos>
     <Div>
          <Box menu={menu}> 
              <Texto>Etiquetas creadas {etiquetas.length}</Texto>

               <BtnAgregaEtiqueta onClick={() => setVentanaModalAgregarEtiquetas(true)}>Crear nueva etiqueta</BtnAgregaEtiqueta>

            </Box>


            <Contenedor menu={menu}>
                        <Uu>
                            { etiquetas.length > 0 ?          
                                    etiquetas.map((etiqueta) => {
                                        return <Etiqueta key={etiqueta.id} 
                                                         etiqueta={etiqueta} 
                                                         eliminarEtiqueta={eliminarEtiqueta} 
                                                         editarEtiqueta={editarEtiqueta}
                                                         />
                                    })
                                    :
                                    <No>No hay Etiquetas para mostrar</No>
                                }
                        </Uu>
                </Contenedor>
          </Div>
     </DivDos>
        </>
     );
}
 
export default GetionarEtiquetas;