import React from 'react';
import Cartao from './Cartao';
import Mensagem from './Mensagem';

class App extends React.Component { // copmponente pode ser uma classe ou função
        render (){
            return(
                <div>
                    <strong>Último botão clicado:</strong>
                    <br></br>
                    <strong>Quantidade de cliques:</strong>
                    <div>
                        <button>Botão 1</button>
                        <button>Botão 2</button>
                        <button>Botão 3</button>
                    </div>
                    
                </div>
            );
        } // se for uma classe, o retorno deve estar dentro do método render
}


{/*
const App = () => {
    return (
        <div>
            { // chaves para digitar código js
                dados.map(x => { // tudo depois do arrow e entre chaves é retornado. Map para percorrer o vetor
                    return <Cartao 
                        foto={x.foto}
                        nome={x.nome}
                        membroDesde={x.membroDesde}
                        descricao={x.descricao}
                        numeroAmigos={x.numeroAmigos}
                    />
                })
            }
           
        </div>
    )
};

*/}
const dados = [
    {
        foto:'https://avatars.githubusercontent.com/u/60331508?s=400&u=5e3e24f7a44c259c4ea48dfa040fd7e314f9bc6e&v=4', 
        nome:'Otávio' ,
        membroDesde:'2021' ,
        descricao:'Frase qualquer', 
        numeroAmigos:'10'
    },
    {
        foto:'https://upload.wikimedia.org/wikipedia/commons/8/82/Pronunciamento_do_Presidente_da_Rep%C3%BAblica%2C_Jair_Bolsonaro_%28cropped%29.jpg', 
        nome:'Jair Messias' ,
        membroDesde:'2010' ,
        descricao:'Frase qualquer' ,
        numeroAmigos:'150'
    },
    {
        foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoywzbgRHSNs9E9i_UCNWE6HMAFm_g7pL0ZA&usqp=CAU', 
        nome:'Dilma Rousseff' ,
        membroDesde:'2007' ,
        descricao:'Frase qualquer' ,
        numeroAmigos:'0'
    }
]

export default App;