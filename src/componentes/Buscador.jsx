import React from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'



const Form = styled.form`
   font-size: 14px;
   width:183px;
   margin-left: -5px;
`;

const Input = styled.input`
    padding: 7px;
    border-radius:3px;
    margin-left: -100px;
    border: 1px solid #ccc;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.03);
    font-size:0.875em;
    width: 250px;
`;


const Button = styled.button`
    width: 31px;
    margin-top: 0px;
    height:31px;
    padding:6px;
    text-align: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
    font-size: 1em;
    color: #444;
    line-height: 1.3;
    float: right;


  box-sizing: border-box;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0,0,0,.03);
  border-radius: .3em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  
  border: 1px solid #CDCACA;
  background: rgb(240,240,240);
background: linear-gradient(0deg, rgba(240,240,240,1) 0%, rgba(254,254,254,1) 100%);
    :focus {
        border-color: #fff;
        box-shadow: 0 0 1px 1px #7E7777;
        box-shadow: 0 0 0 1px -moz-mac-focusring;
        color: #222; 
        outline: none;
    }
`;



const Buscador = () => {
    return ( 
     
            <Form>
                <Input type="search" placeholder="Buscar lead por nombre"/>
                <Button type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                
                </Button>
            </Form>
     
     );
}
 
export default Buscador;