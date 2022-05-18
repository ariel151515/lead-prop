import React from "react"
import styled from 'styled-components'
import logo from './../img/logo.png'

const HeaderContenedor = styled.div`
    width: 100%;
    min-height:30px;
    background: #fff;
`;

const Logo = styled.img`
    
`;

const Header = () => {
    return ( 
        <HeaderContenedor>
           <Logo src={logo}/>
        </HeaderContenedor>
     );
}
 
export default Header;