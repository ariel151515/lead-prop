import styled from 'styled-components';

const ContenedorGeneral = styled.div`
    width:${(props) => props.menu ? '77%' : '90%'};
    padding-left: ${(props) => props.menu ? '13%' : '4%'};
`;


export {ContenedorGeneral}