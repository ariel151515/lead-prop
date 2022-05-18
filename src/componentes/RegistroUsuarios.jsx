import React from "react";
import Header from './Header'
import {Helmet} from "react-helmet";

const RegistroUsuarios = () => {
    return ( 
       <>
           <Helmet>
                <title>Registro de usuarios</title>
            </Helmet>

          <Header/>
          <h1>Registro Usuarios</h1>
       </>
     );
}
 
export default RegistroUsuarios;