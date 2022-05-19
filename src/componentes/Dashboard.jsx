import React from "react";
import Header from './Header'
import Menu from './Menu'
import styled from 'styled-components';
import {useMuestraMenu} from '../contextos/contextoMenu'
import {Helmet} from "react-helmet";
import {ContenedorDashboards,ContenedorDoxMin,ContenedorDoxMax,BtnMoxMin,ContenedorGeneral} from '../elementos/Elementos'
import ListaDeEtiquetas from './ListaDeEtiquetas'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import TituloGeneral from './../componentes/TituloGeneral'
import BtnEliminar from './BtnEliminar'


const Dashboard = ({etiquetas,setEtiquetas}) => {
  const {menu, setMenu} = useMuestraMenu();

  const mostrarFormularioAgregarEtiquetas = () => {
    return alert('Hola')
  }

    return ( 
        <>
           <Helmet>
                <title>Dashboard</title>
            </Helmet>

            <Header menu={menu} setMenu={setMenu}/> 
          <ContenedorGeneral menu={menu}>

                <Menu/>

                <TituloGeneral menu={menu}/>
                <BtnEliminar/>
              <ContenedorDashboards>
                  <ContenedorDoxMin>
                    
                      <ListaDeEtiquetas etiquetas={etiquetas} setEtiquetas={setEtiquetas} />

                        <BtnMoxMin onClick={() => mostrarFormularioAgregarEtiquetas() }>
                            Etiquetas
                            <FontAwesomeIcon icon={faPlus} style={{ marginLeft:'10px' }} />
                        </BtnMoxMin>
                        
                  </ContenedorDoxMin>

                  <ContenedorDoxMax>
                      <h2>dasdasd</h2>
                  </ContenedorDoxMax>
              </ContenedorDashboards>
          </ContenedorGeneral>
        </>
     );
}
 
export default Dashboard;