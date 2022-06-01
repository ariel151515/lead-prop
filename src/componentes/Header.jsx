import React from "react"
import styled from 'styled-components'

const HeaderContenedor = styled.div`
    width: 100%;
    background: #00074B;
`;

const ConHeader = styled.div`
    width: 100%;
    background: #00074B;
    {/*margin-left:${(props) => props.menu ? '13%' : '4.5%'};*/}
`;


const Logo = styled.img`
    width: 5%;
    padding-left: 1.5%;
`;

const Header = ({menu,setMenu}) => {
    return ( 
        <HeaderContenedor>
           <ConHeader setMenu={setMenu} menu={menu}>
             {/* <Logo src={logo}/> */}
           </ConHeader>
        </HeaderContenedor>
     );
}
 
export default Header;