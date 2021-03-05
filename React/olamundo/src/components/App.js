import React from 'react';
import Cartao from './Cartao';
import Mensagem from './Mensagem';

const App = () => {
    const nome = 'Otávio';
    return (
        <div>
            <Mensagem nome={nome}></Mensagem>
        </div>
    )
};

export default App;