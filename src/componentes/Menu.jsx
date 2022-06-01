import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,
         faUserPen,
         faHeadset,
         faWandMagicSparkles,
         faHouse,
         faEye,
         faRightToBracket,
         faGear,
         faPaperPlane,
         faAngleLeft,
         faAngleRight,
         faTags,
         faBullhorn,
         faListUl
        } from '@fortawesome/free-solid-svg-icons'
import {useMuestraMenu} from '../contextos/contextoMenu'



const MenuContenedor = styled.div`
    width:${(props) => props.menu ? '15em' : '4.5em'};
    font-size: 16px;
    height:100vh;
    position: absolute;
    background: #041C66; /* #00074d  #041C66 */
    border-right: 1px solid #E4E5EA;
    top: 0;
    left: 0;
 
     a{
         text-decoration: none;
     }
     ul li {
         list-style: none;
         font-size: 26px;
         margin-bottom: 30px;

     }
`;


const Text = styled.p`
   color: #B0BBDB;
   margin-top: -22px;
   margin-left:45px;
   font-family: 'Roboto', sans-serif;
   cursor: pointer;
   font-size:14px;
`;



const TextS = styled.p`
   color:#B0BBDB;
   bottom:0.625em;
   position: absolute;  
   margin-left:0.9375em;
   font-family: 'Roboto', sans-serif;
   cursor: pointer;
   font-size:14px;
`;


const Ul = styled.ul`
`;


const Menu = () => {
    /* const {menu} = useMenu(); */
    const {menu, setMenu} = useMuestraMenu();
 
    return ( 

<MenuContenedor menu={menu}>

        <Ul>

               {/* 
               
               
               <li>
                    <FontAwesomeIcon 
                           icon={faBars} 
                           style={
                                { 
                                 color: '#FFFFFF', 
                                 fontSize: '2.125em', 
                                 marginLeft: '-23px',
                                 cursor: 'pointer'

                                }
                              }
                        onClick={() => setMenu(!menu)}
                    />
                </li>
                
               
               */}
             

        <li title="Dashboard">
             <NavLink to="/" activeStyle={{fontWeight: "bold", color: "#fff"}}>
                   { !menu ?

                     <>
                        <FontAwesomeIcon 
                            icon={faHouse} 
                            style={
                                    { 
                                        color: '#FFFFFF', 
                                       
                                    }
                                }
                       />
                     </>

                     :
                     <>
                        <FontAwesomeIcon 
                            icon={faHouse} 
                            style={
                                    { 
                                        color: '#FFFFFF', 
                                       
                                    }
                                }
                       />

                       <Text>DASHBOARD</Text>
                     </>

                   }
          </NavLink>
       </li>






       <li title="Soporte">
             <NavLink to="/soporte">
                   { !menu ?

                     <>
                        <FontAwesomeIcon 
                            icon={faHeadset} 
                            style={
                                    { 
                                        color: '#FFFFFF', 
                                       
                                    }
                                }
                       />
                     </>

                     :
                     <>
                        <FontAwesomeIcon 
                            icon={faHeadset} 
                            style={
                                    { 
                                        color: '#FFFFFF', 
                                       
                                    }
                                }
                       />

                       <Text>SOPORTE</Text>
                     </>

                   }
          </NavLink>
       </li>






       <li title="Mi cuenta">
             <NavLink to="/mis-datos" >
                   { !menu ?

                     <>
                        <FontAwesomeIcon 
                            icon={faUserPen} 
                            style={
                                    { 
                                        color: '#FFFFFF', 
                                       
                                    }
                                }
                       />
                     </>

                     :
                     <>
                        <FontAwesomeIcon 
                            icon={faUserPen} 
                            style={
                                    { 
                                        color: '#FFFFFF', 
                                      
                                    }
                                }
                       />

                       <Text>MI CUENTA</Text>
                     </>

                   }
          </NavLink>
       </li>






       <li title="Gestionat etiquetas">
             <NavLink to="/gestionar-etiquetas" >
                   { !menu ?

                     <>
                        <FontAwesomeIcon 
                            icon={faTags} 
                            style={
                                    { 
                                        color: '#FFFFFF', 
                                       
                                    }
                                }
                       />
                     </>

                     :
                     <>
                        <FontAwesomeIcon 
                            icon={faTags} 
                            style={
                                    { 
                                        color: '#FFFFFF', 
                                       
                                    }
                                }
                       />

                       <Text>GESTIONAR ETIQUETAS</Text>
                     </>

                   }
          </NavLink>
       </li>






       <li title="Personalizar mensaje de WhatsApp">
             <NavLink to="/mensajewhatsapp" >
                   { !menu ?

                     <>
                        <FontAwesomeIcon 
                            icon={faPaperPlane} 
                            style={
                                    { 
                                        color: '#FFFFFF', 
                                      
                                    }
                                }
                       />
                     </>

                     :
                     <>
                        <FontAwesomeIcon 
                            icon={faPaperPlane} 
                            style={
                                    { 
                                        color: '#FFFFFF', 
                                        
                                    }
                                }
                       />

                       <Text>WHATSAPP</Text>
                     </>

                   }
          </NavLink>
       </li>



       <li title="Web">
             <NavLink to="/crear-publicacion">
                   { !menu ?

                     <>
                        <FontAwesomeIcon 
                            icon={faBullhorn} 
                            style={
                                    { 
                                        color: '#FFFFFF', 
                                       
                                    }
                                }
                       />
                     </>

                     :
                     <>
                        <FontAwesomeIcon 
                            icon={faBullhorn} 
                            style={
                                    { 
                                        color: '#FFFFFF', 
                                     
                                    }
                                }
                       />

                       <Text>PUBLICAR</Text>
                     </>

                   }
          </NavLink>
       </li>



       <li title="Web">
             <NavLink to="/panel-publicaciones">
                   { !menu ?

                     <>
                        <FontAwesomeIcon 
                            icon={faListUl} 
                            style={
                                    { 
                                        color: '#FFFFFF', 
                                       
                                    }
                                }
                       />
                     </>

                     :
                     <>
                        <FontAwesomeIcon 
                            icon={faListUl} 
                            style={
                                    { 
                                        color: '#FFFFFF', 
                                     
                                    }
                                }
                       />

                       <Text>PUBlICACIONES</Text>
                     </>

                   }
          </NavLink>
       </li>





       <li title="Cerra Sesion">
             <NavLink to="/" >
                   { !menu ?

                     <>
                        <FontAwesomeIcon 
                            icon={faRightToBracket} 
                            style={
                                    { 
                                        color: '#FFFFFF', 
                                       
                                    }
                                }
                       />
                     </>

                     :
                     <>
                        <FontAwesomeIcon 
                            icon={faRightToBracket} 
                            style={
                                    { 
                                        color: '#FFFFFF', 
                                       
                                    }
                                }
                       />

                       <Text>CERRAR SECION</Text>
                     </>

                   }
          </NavLink>
       </li>



       <li title="Dashboard">
             <NavLink to="/" onClick={() => setMenu(!menu)}>
                   { !menu ?

                     <>
                        <FontAwesomeIcon 
                            icon={faAngleRight} 
                            style={
                                    { 
                                        color: '#FFFFFF', 
                                       
                                    }
                                }
                       />
                     </>

                     :
                     <>
                        <FontAwesomeIcon 
                            icon={faAngleLeft} 
                            style={
                                    { 
                                        color: '#FFFFFF', 
                                       
                                    }
                                }
                       />

                       <Text>DASHBOARD</Text>
                     </>

                   }
          </NavLink>
       </li>





      </Ul>


    {/*

       color: '#FFFF',
                                    cursor: 'pointer', 
                                    fontSize: '1.25em', 
                                    marginLeft: '-1em',
                                    bottom: '1.2em',                              
                                    position: 'absolute'

    */}


        </MenuContenedor>
     );
}
 
export default Menu;