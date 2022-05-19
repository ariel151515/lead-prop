import React from "react"
import styled from 'styled-components'
import logo from './../img/logo.png'

const HeaderContenedor = styled.div`
    width: 100%;
    min-height:30px;
    background: #fff;
`;

const ConHeader = styled.div`
    width: 80%;
    min-height:30px;
    padding-top:1%;
    padding-bottom:1%;
    background: #fff;
    margin-left:${(props) => props.menu ? '13%' : '4.5%'};
`;


const Logo = styled.img`
    
`;

const Header = ({menu,setMenu}) => {
    return ( 
        <HeaderContenedor>
           <ConHeader setMenu={setMenu} menu={menu}>
             <Logo src={logo}/>
           </ConHeader>
        </HeaderContenedor>
     );
}
 
export default Header;