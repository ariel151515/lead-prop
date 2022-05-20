import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import {MuestraMenuProvider} from './contextos/contextoMenu'
import {MuestraModalProvider} from './contextos/contextoFormularioAgregarEtiqueta'
import {LimiteEtiquetasProvider} from './contextos/contextoLiimiteEtiquetas'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MuestraMenuProvider>
        <MuestraModalProvider>
          <LimiteEtiquetasProvider>
             <App />
          </LimiteEtiquetasProvider>
        </MuestraModalProvider>
      </MuestraMenuProvider>
    </BrowserRouter>
  </React.StrictMode>
);

