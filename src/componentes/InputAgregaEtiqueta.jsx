import React, { useState } from "react"
import styled from 'styled-components'
import { useListaDeEtiquetas } from "../contextos/contextoEtiquetas";
import { useProspectosAppProvider } from '../contextos/contextoProspectos'
import { useIdSeleccionado } from './../contextos/contextoidSelecionado'


const ContenedorAgrega = styled.div`
    padding: 6px;
    font-size: 16px;
    margin-right: 100px;
`;


const Button = styled.button`
    padding: 7px;
    float: right;
    cursor: pointer;
    margin-top:-31px;
    margin-right: 1px;
    font-size: 0.75em;
    color: #444;
    line-height: 1.3;

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


const Select = styled.select`
  cursor: pointer;
  display: block;
  font-size: 0.75em;
  font-family: 'Verdana', sans-serif;
  font-weight: 400;
  color: #444;
  line-height: 1.3;
  margin-right: 111px;
  margin-top:-4px;
  margin-left: -9px;
 
  padding:6px;
  width: 300px;
  max-width: 100%; 
  box-sizing: border-box;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0,0,0,.03);
  border-radius: .3em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
    linear-gradient(to bottom, #ffffff 0%,#f7f7f7 100%);
  background-repeat: no-repeat, repeat;
  background-position: right .7em top 50%, 0 0;
  background-size: .65em auto, 100%;
    :focus {
        border-color: #fff;
        box-shadow: 0 0 1px 1px #7E7777;
        box-shadow: 0 0 0 1px -moz-mac-focusring;
        color: #222; 
        outline: none;
    }
`;



const InputAgregaEtiqueta = () => {
  const { seleccionado } = useIdSeleccionado();
  const { prospectos, setProspectos } = useProspectosAppProvider()
  const { etiquetas } = useListaDeEtiquetas();

  const [asignaEtiquetaValor, setAsignaEtiquetaValor] = useState()


  const handlerCargarEtiquetas = (e) => {
    e.preventDefault()
    const opcion = e.target.value;
    setAsignaEtiquetaValor(opcion)

  }


  const asignaEtiqueta = () => {
    setProspectos(
      prospectos.map((pro) => {
        if (pro.id === seleccionado) {
          return {
            ...pro,
            etiqueta: asignaEtiquetaValor
          }
        } else {
          return {
            ...pro
          }
        }
      })
    )

    alert('Etiqueta asignaxa exitosamente!')

  }


  return (

    <>
      <ContenedorAgrega>
        <Select onClick={handlerCargarEtiquetas}>
          {etiquetas.map((etiqueta, i) => {
            return <option
              key={etiqueta.id}
              value={etiqueta.texto}
            >
              {etiqueta.texto}
            </option>
          })}
        </Select>

        <Button
          onClick={() => asignaEtiqueta()}
          agregarEtiqueta="Agregar etiqueta"
        >
          Agregar etiqueta
        </Button>

      </ContenedorAgrega>

    </>
  );
}

export default InputAgregaEtiqueta;