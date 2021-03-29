import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import App from './components/App';
import ContatoCrud from './components/contatos/ContatoCrud';
import ContatoAlterarIncluir from './components/contatos/ContatoAlterarIncluir';
import ContatoConsulta from './components/contatos/ContatoConsulta';

ReactDOM.render(
    (<Router history={history}>
        <Route path='/' exact={true} component={App}/>
        <Route path='/contato/' exact={true} component={ContatoCrud}/>
        <Route path='/contato/novo/' exact={true} component={ContatoAlterarIncluir}/>
        <Route path='/contato/alterar/:id' exact={true} component={ContatoAlterarIncluir}/>
        <Route path='/contato/consultar/:id' exact={true} component={ContatoConsulta}/>
    </Router>), document.querySelector('#root') // renderiza dentro da div root do index.html
    );