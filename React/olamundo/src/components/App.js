import React from 'react';
import Cartao from './Cartao';
import Mensagem from './Mensagem';

const App = () => {
    return (
        <div>
            <Cartao 
                foto='https://avatars.githubusercontent.com/u/60331508?s=400&u=5e3e24f7a44c259c4ea48dfa040fd7e314f9bc6e&v=4' 
                nome='Otávio' 
                membroDesde='2021' 
                descricao='Frase qualquer' 
                numeroAmigos='10'
            />
            <Cartao 
                foto='https://upload.wikimedia.org/wikipedia/commons/8/82/Pronunciamento_do_Presidente_da_Rep%C3%BAblica%2C_Jair_Bolsonaro_%28cropped%29.jpg' 
                nome='Jair Messias' 
                membroDesde='2010' 
                descricao='Frase qualquer' 
                numeroAmigos='150'
            />
        </div>
    )
};

export default App;