import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadatro/Video';
import CadastroCategoria from './pages/cadatro/Categoria';

const Pagina404 = () => {
  return (
    <div>
      Você entrou em uma página que não existe :(
    </div>
  )
} 

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route path="/cadastro/categoria" component={CadastroCategoria} />
        <Route component={Pagina404} />
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);
