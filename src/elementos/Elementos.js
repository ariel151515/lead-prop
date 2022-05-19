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
    background: #ffff;
    padding-top: 5px;
    padding-bottom:60px;
    padding-left:5px;
    padding-right:5px;
    position: relative;
      ul li {
          list-style: none;
      }
`;

const ContenedorDoxMax = styled.div`
    width: 78%;
    height: 200px;
    position: relative;
    float:right;
    margin-top:-359px;
    /*border:solid 1px;*/
    background: #ffff;
`;

const BtnMoxMin = styled.button`
   width: 100%;
   padding-top: 15px;
   padding-bottom:15px;
   color: #ffffff;
   font-family: 'roboto', arial, sans-serif;
   font-size:14px;
   background: #000;
   cursor:pointer;
   margin-top:-10px;
`;


export {ContenedorGeneral, ContenedorDashboards, ContenedorDoxMin, ContenedorDoxMax,BtnMoxMin}