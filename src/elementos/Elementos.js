import styled from 'styled-components';

const ContenedorGeneral = styled.div`
    width:${(props) => props.menu ? '85vw' : '95vw'};
    margin-left: ${(props) => props.menu ? '13%' : '4%'};
    margin-top:1%;
    font-size: 14px;
    border-radius:5px;
`;


export {ContenedorGeneral}