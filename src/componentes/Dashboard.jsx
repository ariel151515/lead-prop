import React from "react";
import Header from './Header'
import Menu from './Menu'
import {useMuestraMenu} from '../contextos/contextoMenu'
import {Helmet} from "react-helmet";
import {ContenedorDashboards,ContenedorDoxMin,ContenedorDoxMax,ContenedorGeneral} from '../elementos/Elementos'
import ListaDeEtiquetas from './ListaDeEtiquetas'
import TituloGeneral from './../componentes/TituloGeneral'
import BtnEliminar from './BtnEliminar'
import Btn from './Btn'
import FormularioMostrarEtiquetas from './FormularioMostrarEtiquetas'
import {useMuestraModal} from './../contextos/contextoFormularioAgregarEtiqueta'
import TrioCR from './../componentes/TrioCR'

const Dashboard = ({etiquetas,setEtiquetas}) => {
  const {menu, setMenu} = useMuestraMenu();

  // Muestra la ventana modal y el formulario
  const {modal, setModal} = useMuestraModal()

    return ( 
        <>
           <Helmet>
                <title>Dashboard</title>
            </Helmet>
                 <FormularioMostrarEtiquetas modal={modal} etiquetas={etiquetas} setEtiquetas={setEtiquetas}/>
            <Header menu={menu} setMenu={setMenu}/> 
            <ContenedorGeneral menu={menu}>

                <Menu/>

                <TituloGeneral menu={menu}/>
                <BtnEliminar/>

              <ContenedorDashboards>

                        <ContenedorDoxMax>
                           <h1>dsffsd</h1>
                        </ContenedorDoxMax>
     
                        <ContenedorDoxMin>
                            <ListaDeEtiquetas etiquetas={etiquetas} setEtiquetas={setEtiquetas} />
                            <Btn value={'Crear nueva carpeta'} setModal={setModal} />

                            <TrioCR/>

                        </ContenedorDoxMin>

                       
              </ContenedorDashboards>

          </ContenedorGeneral>
        </>
     );
}
 
export default Dashboard;