import React, {useState} from "react";
import Header from './Header'
import Menu from './Menu'
import {useMuestraMenu} from '../contextos/contextoMenu'
import {Helmet} from "react-helmet";
import {ContenedorGeneral} from '../elementos/Elementos'
import { useListaDeEtiquetas } from "../contextos/contextoEtiquetas";
import styled from 'styled-components'
import {useProspectosAppProvider} from '../contextos/contextoProspectos'
import LeadsGenerados from "./LeadsGenerado";
import BarraDeFiltros from './BarraDeFiltros'
import VentanaModal from './VentanaModal'
import {useIdSeleccionado} from './../contextos/contextoidSelecionado'


const Div = styled.div`
    width:100%;
    overflow:auto;
    background: #fff;
    max-height:720px;
    min-height:200px;
`;


const Tnombre = styled.p`
    font-family:roboto;
    color: #000;
    font-size: 15px;
    text-align:center;
`;


const Butto = styled.button`
   border: none;
   background: none;
   font-family:roboto;
   width: 100%;
   margin-top: 15px;
   cursor: pointer;
`;

const Butt = styled.button`
     width: 100%;
     cursor: pointer;
    padding: 8.5px;
    float: right;
    cursor: pointer;
    margin-top:10px;

    font-size: 12px;
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



const Dashboard = ({nombrePublicacion,fuenteDeTrafico,numeroWhatsapp,setNumeroWhatsapp,mensajeWhatsapp}) => {
  const {menu, setMenu} = useMuestraMenu();
  const [muestraVentanaConfirmar, setMuestraVentanaConfirmar] = useState(false)

  const {prospectos, setProspectos} = useProspectosAppProvider()
  const {seleccionado} = useIdSeleccionado();

  const [leadSelecionadoPuntoLength, setLeadSelecionadoPuntoLength] = useState(false)


  const eliminarProspecto = () => {
    setProspectos(
        prospectos.filter((pros) => {
           if(pros.id !== seleccionado) {
               return pros;
           }
           return;
        })
    )

    setMuestraVentanaConfirmar(!muestraVentanaConfirmar)
    setLeadSelecionadoPuntoLength(false)

    alert('Producto eliminado exitosamente!')
}


    return ( 
        <>
          <Helmet>
                <title>Dashboard</title>
          </Helmet>
        
           <Header menu={menu} setMenu={setMenu}/> 

            <ContenedorGeneral menu={menu}>
                <Menu/>

                       <VentanaModal 
                              setMuestraVentanaConfirmar={setMuestraVentanaConfirmar} 
                              muestraVentanaConfirmar={muestraVentanaConfirmar}
                              >
                                {prospectos.map((pro) => {
                                  if(pro.id === seleccionado) {
                                    return <Tnombre>¿Seguro que quieres eliminar definitivamente a <span style={{fontWeight:'bold'}}>{pro.nombre}</span> de la base de datos?</Tnombre>
                                  }
                                })}

                            <Butt onClick={() => eliminarProspecto()}>Si</Butt>
                            <Butto onClick={() => setMuestraVentanaConfirmar(!muestraVentanaConfirmar)}>No, fue un error</Butto>
                        </VentanaModal>



                        <BarraDeFiltros setMuestraVentanaConfirmar={setMuestraVentanaConfirmar}
                                        muestraVentanaConfirmar={muestraVentanaConfirmar}

                                        leadSelecionadoPuntoLength={leadSelecionadoPuntoLength}
                                        setLeadSelecionadoPuntoLength={setLeadSelecionadoPuntoLength}
                                        numeroWhatsapp={numeroWhatsapp}
                                        mensajeWhatsapp={mensajeWhatsapp}
                                       
                                        />
                        
                        <Div>
                              <LeadsGenerados
                                            nombrePublicacion={nombrePublicacion}
                                            fuenteDeTrafico={fuenteDeTrafico}

                                            muestraVentanaConfirmar={muestraVentanaConfirmar}
                                            setLeadSelecionadoPuntoLength={setLeadSelecionadoPuntoLength}
                                            setNumeroWhatsapp={setNumeroWhatsapp}
                                    />
                        </Div>
           
          </ContenedorGeneral>

        </>
     );
}

 
export default Dashboard;