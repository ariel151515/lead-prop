import React from 'react';
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTags} from '@fortawesome/free-solid-svg-icons'
import { useListaDeEtiquetas } from "../contextos/contextoEtiquetas";
import {useProspectosAppProvider} from '../contextos/contextoProspectos'
import {useIdSeleccionado} from './../contextos/contextoidSelecionado'
import {useMuestraMenu} from '../contextos/contextoMenu'


const ContenedorTabla = styled.div`
   /* overflow-y: scroll / overflow-auto: scroll solo cuando es necesario / 
     overflow-hidden: oculta el contenido sobrante se trabaja con textos e imagenes */
   padding-bottom: 1.25rem;
   background: #fff;
   font-size: 16px;

`;


const Table = styled.table`
    width:100%;
    border-collapse: collapse;
`;

const Thead = styled.thead`
   text-align:left;

   border-collapse: collapse;
     tr{
      text-align:left;

     }
     td{
      border: solid 1px #ccc;
      padding: 0.3125em;
      /*background: #F6F3F3; /*232222 */
      background: rgb(240,240,240);
      background: linear-gradient(0deg, rgba(240,240,240,1) 0%, rgba(254,254,254,1) 100%);
      box-shadow: 0 1px 0 1px rgba(0,0,0,.03);
      color: #000;
      font-family: 'roboto', arial, sans-serif;

     }

`;

const Texton = styled.p`
  font-family: roboto;
  color: #B6B0B0;
  margin-left:${(props) => props.menu ? '35%' : '40%'};
  margin-top:4.0625rem;
  position: absolute;
  display: ${(props) => props.muestraVentanaConfirmar ? 'none' : 'flex'};;

`;

const Tbody = styled.tbody`

    td{
      text-align:left;
      border-top: 0.0625em solid #ccc;
      border-bottom: 0.0625em solid #ccc;
      border-left: 0.0625em solid #ccc;
      border-right: 0.0625em solid #ccc;
      padding-left: 0.3125em;
      font-family: 'roboto', arial, sans-serif;
      font-size:0.875em;
      border:solid 1px #F6F2F2;
      font-size: 0.875em;


     }
     tr{
       width: 100%;
       
        :hover{
          background: #F8F2F2;
        }
     }
     
`;



const LeadsGenerados = ({muestraVentanaConfirmar, setLeadSelecionadoPuntoLength,setNumeroWhatsapp}) => {
    const {prospectos} = useProspectosAppProvider()
    const {etiquetas} = useListaDeEtiquetas();
    const {setSeleccionado} = useIdSeleccionado();
    const {menu} = useMuestraMenu();



   const tomaElId = (id,telefono) => {
      setSeleccionado(id)
      setLeadSelecionadoPuntoLength(true)
      setNumeroWhatsapp(telefono)
    }

    return ( 
    
      <>
      <ContenedorTabla>
      <Table>  {/* <tr> filas / <td> columnas */}
        <Thead>
             <tr>  
                <td><input type="checkbox"/></td>
                <td>Fecha</td>
                <td>Publicacion</td>
                <td>Nombre</td>
                <td>Telefono</td>
                <td>Email</td>
                <td>Mensaje</td>
                <td>Etiqueta</td>
             </tr>
        </Thead>
        
        
        <Tbody>
            {prospectos.length > 0 ?

            <>
                {prospectos.map((e) => {
                  return(
                  
                  <>
                        <tr>
                                <td>
                                  <input type="checkbox" 
                                          style={{cursor: 'pointer'}} 
                                          onClick={() => tomaElId(e.id,e.telefono)}/>
                                          
                                </td>
                                  <td>{e.tildado ? <p style={{fontWeight:''}}>{e.fecha}</p> : <p style={{fontWeight:'bold'}}>{e.fecha}</p>}</td>
                                  <td>{e.tildado ? <p style={{fontWeight:''}}>{e.nombrePublicacion}</p> : <p style={{fontWeight:'bold'}}>{e.nombrePublicacion}</p>}</td>      
                                  <td>{e.tildado ? <p style={{fontWeight:''}}>{e.nombre}</p> : <p style={{fontWeight:'bold'}}>{e.nombre}</p>}</td>
                                  <td>{e.tildado ? <p style={{fontWeight:''}}>{e.telefono}</p> : <p style={{fontWeight:'bold'}}>{e.telefono}</p>}</td>
                                  <td>{e.tildado ? <p style={{fontWeight:''}}>{e.email}</p> : <p style={{fontWeight:'bold'}}>{e.email}</p>}</td>
                                  <td>{e.tildado ? <p style={{fontWeight:''}}>{e.mensaje}</p> : <p style={{fontWeight:'bold'}}>{e.mensaje}</p>}</td>


                                <td>
                                    {etiquetas.map((et) => {
                                        if(et.texto === e.etiqueta) {
                                          return <span style={{color:'#000', padding:'5px', background:'#F4EEEE', borderRadius:'3px', fontSize:'13px'}}>
                                                                <FontAwesomeIcon icon={faTags} style={{color:et.color, marginRight:'5px'}}/>
                                                                {et.texto}
                                                            </span>
                                        }
                                    })}
                                </td>
                          </tr>
                     </>

                    ) 
              })}
            </>

            :
            
            <Texton menu={menu} muestraVentanaConfirmar={muestraVentanaConfirmar}>No hya nada para mostrar</Texton>
            
           }
        </Tbody>

      </Table>

      </ContenedorTabla>
     </>
     );
}
 
export default LeadsGenerados;