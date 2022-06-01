import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import {MuestraMenuProvider} from './contextos/contextoMenu'
import {ListaDeEtiquetasProvider} from './contextos/contextoEtiquetas'
import {ProspectosAppProvider} from './contextos/contextoProspectos'
import {IdSeleccionadoProvider} from './contextos/contextoidSelecionado'
import {PublicacionesProvider} from './contextos/contextoPublicaciones'
import {PubliIdProvider} from './contextos/contextoPubli'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MuestraMenuProvider>
        <ListaDeEtiquetasProvider>
          <ProspectosAppProvider>
            <IdSeleccionadoProvider>
                    <App />
            </IdSeleccionadoProvider>
          </ProspectosAppProvider>
        </ListaDeEtiquetasProvider>
      </MuestraMenuProvider>
    </BrowserRouter>
  </React.StrictMode>
);

