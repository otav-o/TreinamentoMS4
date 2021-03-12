import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Sobre from './components/Sobre';
import Erro404 from './components/Erro404';

import {BrowserRouter, Switch, Route} from 'react-router-dom' // npm install react-router-dom
// BrowserRouter faz o roteamento, Switch recebe vários componentes do tipo Route e renderiza de acordo com a url
// na hora de renderizar, não usar o próprio componente, e sim o BrowserRouter

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={App}/>
            {/* se o caminho for exatamente /, renderizar o App */}
            <Route path='/sobre' exact={true} component={Sobre}/>
            <Route path='/*' component={Erro404}/>
            {/* qualquer outro path */}
        </Switch>

    </BrowserRouter>
    
    ), document.querySelector('#root'))