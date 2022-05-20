import React from 'react';
import styled from 'styled-components';
import {NavLink, Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faUserPen,faHeadset,faWandMagicSparkles,faHouse,faEye,faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import {useMuestraMenu} from '../contextos/contextoMenu'

const MenuContenedor = styled.div`
    width:${(props) => props.menu ? '12%' : '3.5%'};
    height:100%;
    position: absolute;
    background: #1D2335;
    top: 0;
    left: 0;
     a{
         text-decoration: none;
     }
     ul li {
         list-style: none;

     }
`;

const Text = styled.p`
   color: #fff;
   margin-top: -20px;
   margin-left:15px;
   font-family: 'Roboto', sans-serif;
   font-size: 14px;
   cursor: pointer;
`;

const TextS = styled.p`
   color:#fff;
   bottom:1.7%;
   position: absolute;  
   margin-left:15px;
   font-family: 'Roboto', sans-serif;
   font-size: 14px;
   cursor: pointer;
`;


const Menu = () => {
    /* const {menu} = useMenu(); */
    const {menu, setMenu} = useMuestraMenu();
 
    return ( 
        <MenuContenedor menu={menu}>
            <ul>
              <li>
                    <FontAwesomeIcon 
                                icon={faBars} 
                                style={
                                        { 
                                            color: '#fff', 
                                            fontSize: '34px', 
                                            marginLeft: '-26px',
                                            cursor: 'pointer'

                                        }
                                    }
                                    onClick={() => setMenu(!menu)}
                            />
             </li>






         <NavLink to="/">
             <li>
                   { !menu ?

                     <>
                        <FontAwesomeIcon 
                            icon={faHouse} 
                            style={
                                    { 
                                        color: '#fff', 
                                        fontSize: '20px', 
                                        cursor: 'pointer',
                                        marginTop:'50px',
                                        marginLeft:'-20px'
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
                                        color: '#fff', 
                                        fontSize: '20px', 
                                        cursor: 'pointer',
                                        marginTop:'50px',
                                        marginLeft:'-20px'
                                    }
                                }
                       />

                       <Text>Dashboard</Text>
                     </>

                   }

             </li>
       </NavLink>







       <Link to="/editar-landing">
             <li>
                    { !menu ?

                            <>
                            <FontAwesomeIcon 
                                icon={faWandMagicSparkles} 
                                style={
                                        { 
                                            color: '#fff', 
                                            fontSize: '20px', 
                                            cursor: 'pointer',
                                            marginTop:'30',
                                            marginLeft:'-20px'
                                        }
                                    }
                            />
                            </>

                            :
                            <>
                            <FontAwesomeIcon 
                                icon={faWandMagicSparkles} 
                                style={
                                        { 
                                            color: '#fff', 
                                            fontSize: '20px', 
                                            cursor: 'pointer',
                                            marginTop:'19px',
                                            marginLeft:'-20px'
                                        }
                                    }
                            />

                            <Text>Editar Landing</Text>
                            </>

                        }
             </li>
        </Link>






        <Link to="/soporte">
             <li>
                    { !menu ?

                            <>
                            <FontAwesomeIcon 
                                icon={faHeadset} 
                                style={
                                        { 
                                            color: '#fff', 
                                            fontSize: '20px', 
                                            cursor: 'pointer',
                                            marginTop:'30',
                                            marginLeft:'-20px'
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
                                            color: '#fff', 
                                            fontSize: '20px', 
                                            cursor: 'pointer',
                                            marginTop:'19px',
                                            marginLeft:'-20px'
                                        }
                                    }
                            />

                            <Text>Soporte</Text>
                            </>

                        }
                </li>
            </Link>






       <Link to="/mis-datos">
                <li>
                    { !menu ?

                        <>
                        <FontAwesomeIcon 
                            icon={faUserPen} 
                            style={
                                    { 
                                        color: '#fff', 
                                        fontSize: '20px', 
                                        cursor: 'pointer',
                                        marginTop:'30',
                                        marginLeft:'-20px'
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
                                        color: '#fff', 
                                        fontSize: '20px', 
                                        cursor: 'pointer',
                                        marginTop:'19px',
                                        marginLeft:'-20px'
                                    }
                                }
                        />

                        <Text>Mi cuenta</Text>
                        </>

                    }
               </li>
        </Link>





    <Link to="/landing" target="_blank">
        <li>
            { !menu ?

                <>
                <FontAwesomeIcon 
                    icon={faEye} 
                    style={
                            { 
                                color: '#fff', 
                                fontSize: '20px', 
                                cursor: 'pointer',
                                marginTop:'30',
                                marginLeft:'-20px'
                            }
                        }
                />
                
                </>
                :
                <>
                <FontAwesomeIcon 
                    icon={faEye} 
                    style={
                            { 
                                color: '#fff', 
                                fontSize: '20px', 
                                cursor: 'pointer',
                                marginTop:'19px',
                                marginLeft:'-20px'
                            }
                        }
                />

                <Text>Web</Text>
                </>
          } 
       </li>
    </Link>






    <Link to="/">
             <li>
                { !menu ?
                 <>
                   <FontAwesomeIcon 
                        icon={faRightToBracket} 
                        style={
                                { 
                                  color: '#fff',
                                  cursor: 'pointer', 
                                  fontSize: '20px', 
                                  marginLeft: '-20px',
                                  bottom: '3%',                              
                                  position: 'absolute'
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
                                    color: '#fff',
                                    cursor: 'pointer', 
                                    fontSize: '20px', 
                                    marginLeft: '-20px',
                                    bottom: '3%',                              
                                    position: 'absolute'
                                }
                            }
                    />
                    <TextS>Cerrar Sesion</TextS>
               </> 
                }
            </li>
        </Link>



    </ul>
        </MenuContenedor>
     );
}
 
export default Menu;