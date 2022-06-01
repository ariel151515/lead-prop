import React,{useState} from "react"
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useListaDeEtiquetas } from "../contextos/contextoEtiquetas";


const In = styled.input`
   width: 80%;
   border: 1px solid #CEC1C1;
   border-radius:3px;
   height: 30px;
   margin-top:5px;
   padding-left: 20px;
   padding-top: 7px;
   padding-bottom:7px;
      :focus {
         border-color: #aaa;
         box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
         box-shadow: 0 0 0 3px -moz-mac-focusring;
         color: #222; 
         outline: none;
      }
`;

const B = styled.button`
  width: 100%;
  margin-top:10px;
  padding-top:15px;
  cursor: pointer;
  padding-bottom:15px;
  font-size: 12px;
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

const Texto = styled.p`
   color: #000;
   text-align: center;
   font-family: 'roboto', arial, sans-serif;
   font-size:24px;
   font-weight: bold;
`;

const TextoColor = styled.p`
   font-family:'Roboto', arial, sans-serif;
   margin-top:20px;
`;

const InputColor = styled.input`
   float: right;
   margin-top:6px;
   width:45px;
   height: 45px;
`;


const Test = () => {

    // Tomar el valor de los inpiut del mercado del
    const [value, setValue] = useState();
    const [colorEtiqueta, setColorEtiqueta] = useState();
    const {etiquetas, setEtiquetas} = useListaDeEtiquetas();


    const handleSubmit = async (e) => {
       e.preventDefault();

       setValue('');


         setEtiquetas(
            [
               ...etiquetas,
               {
                  id:uuidv4(),
                  texto:value,
                  color:colorEtiqueta,

               }
            ]
          )
          
          alert('Etiqueta creada exitosamente!')
      }
      

    return ( 
       <>
         <Texto>Crear nueva etiqueta</Texto>
            <form onSubmit={(e) => handleSubmit(e)}>
                <In type="text"
                    placeholder="Nombre de la etiqueta"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    required
                    />
                    <InputColor type="color" 
                           value={colorEtiqueta}
                           onChange={(e) => setColorEtiqueta(e.target.value)}
                           />

                  <B type="submit">Agregar Etiqueta</B>
         </form>
       </>
     );
}
 
export default Test;