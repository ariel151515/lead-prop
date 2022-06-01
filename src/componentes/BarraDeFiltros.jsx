import React from "react";
import styled from 'styled-components'
import InputAgregaEtiqueta from './InputAgregaEtiqueta'
import InputFiltraPorEtiqueta from './InputFiltraPorEtiqueta'
import Btn from './BtnEliminar'
import {useProspectosAppProvider} from '../contextos/contextoProspectos'
import MarcarComoLeido from './BtnMarcaComoLeido'
import Buscador from './Buscador'
import BtnWhatsApp from './BtnWhats'
import {useMuestraMenu} from '../contextos/contextoMenu'




const Contenedor = styled.div`
     font-size:16px;
     background:#fff;
     padding:0px;

     display: grid;
     grid-template-columns: repeat(12, 1fr); /* repetimos 12 veces el tamaño de una fraccion */
     grid-template-rows: 1fr;
     gap: 0 1em; /* el primero es la separacion vertical y el segundo la separacion horizontal */
`;

const Texto = styled.p`
    font-family: roboto;
    font-size: 16px;
    margin-left:${(props) => props.menu ? '20px' : '10px'};
    margin-top: 65px;
    font-size: 16px;
    width: 150px;
`;

const Uli = styled.ul`
     list-style-type: none;
     margin-left:${(props) => props.menu ? '-270px' : '-120px'};
     margin-top: ${(props) => props.menu ? '55px' : '55px'};
     margin-bottom: 5px;
     grid-column: 5/-1;
     display: flex;
        li{
          margin-left:5px;
        }
`;




const BarraDeFiltros = ({setMuestraVentanaConfirmar,muestraVentanaConfirmar,leadSelecionadoPuntoLength,setLeadSelecionadoPuntoLength,numeroWhatsapp,mensajeWhatsapp}) => {
   const {prospectos} = useProspectosAppProvider()
   const {menu, setMenu} = useMuestraMenu();
 

    return ( 
       <Contenedor>
         <Texto menu={menu}>Seleccionados:  {prospectos.length}</Texto>
            <Uli menu={menu}>
                <li>
                <InputFiltraPorEtiqueta />
                </li>
                <li>
                  <InputAgregaEtiqueta />
                </li>
                <li>
                  <Buscador/>
                </li>
                <li>
                    <Btn 
                      setMuestraVentanaConfirmar={setMuestraVentanaConfirmar}
                      muestraVentanaConfirmar={muestraVentanaConfirmar}

                      leadSelecionadoPuntoLength={leadSelecionadoPuntoLength}
                      setLeadSelecionadoPuntoLength={setLeadSelecionadoPuntoLength}
                    />
                </li>
                <li>
                    <MarcarComoLeido/>
                </li>
                <li>
                <BtnWhatsApp numeroWhatsapp={numeroWhatsapp} mensajeWhatsapp={mensajeWhatsapp}/>
                </li>
            </Uli>

       </Contenedor>
     );
}
 
export default BarraDeFiltros;



