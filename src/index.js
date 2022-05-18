import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import {MuestraMenuProvider} from './contextos/contextoMenu'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MuestraMenuProvider>
         <App />
      </MuestraMenuProvider>
    </BrowserRouter>
  </React.StrictMode>
);

