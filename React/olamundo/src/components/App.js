import React from 'react';
import Cartao from './Cartao';
import Mensagem from './Mensagem';

const App = () => {
    const nome = 'Otávio';
    return (
        <div>
            <Mensagem nome={nome} mensagem='bem vindo!'></Mensagem>
        </div>
    )
};

export default App;