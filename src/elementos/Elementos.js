import styled from 'styled-components';

const ContenedorGeneral = styled.div`
    width:${(props) => props.menu ? '77%' : '90%'};
    padding-left: ${(props) => props.menu ? '13%' : '4%'};
    margin-top:2%;
`;

const ContenedorDashboards = styled.div`
    width: 100%;
    padding-bottom: 10%;
    background: #F2F3F8;
    border-top: 4px solid #C8CCFE;
`;

const ContenedorDoxMin = styled.div`
    width: 20%;
    /*border:solid 1px;*/
    margin-top: -15px;
    background: #ffff;
    padding-bottom:60px;
    padding-left:5px;
    padding-right:5px;
    
      ul li {
          list-style: none;
      }
`;

const ContenedorDoxMax = styled.div`
    width: 78%;
    height: 100%;
    /*border:solid 1px;*/
    background: #ffff;
    margin-top: 0px;
    float: right;
`;


export {ContenedorGeneral, ContenedorDashboards, ContenedorDoxMin, ContenedorDoxMax}