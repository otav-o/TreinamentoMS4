import React from 'react';
import Cartao from './Cartao';
import Loader from './Loader';
import api from '../apis/api';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {objetos: [], status: STATUS_CARREGANDO};
    }

    componentDidMount() { // método executado assim que o componente é montado
        api.get("dados") // get é para trazer algo de um serviço
            .then(x => {
                this.setState({objetos: x.data, status: STATUS_PRONTO})
            }); 
    }

    render() {
        if(this.state.status == STATUS_CARREGANDO) {
            return <Loader mensagem="Aguarde"></Loader>; // lembrar que o setState() chama o render() novamente
        }
        return (
            <div>
                {
                    this.state.objetos.map(x => { // tudo depois do arrow e entre chaves é retornado. Map para percorrer o vetor
                        return <Cartao 
                            key={x.id} // elimina o warning da lista de cartões sem key
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
    }
};

const STATUS_CARREGANDO = 0;
const STATUS_PRONTO = 1;

export default App;

/*
class App extends React.Component { // copmponente pode ser uma classe ou função

    constructor(props) {
        super(props);
        this.state = {ultimoClicado: 'nenhum', qtdeCliques: 0} // state é um objeto
    }

    onClick = (e) => { // usar arrow function!
        console.log(e);
        this.setState({
            ultimoClicado: e.target.innerText, 
            qtdeCliques: this.state.qtdeCliques + 1
        });
    }

    render (){
        return(
            <div>
                <strong>Último botão clicado: {this.state.ultimoClicado}</strong>
                <br></br>
                <strong>Quantidade de cliques: {this.state.qtdeCliques}</strong>
                <div>
                    <button onClick={this.onClick}>Botão 1</button> 
                    <button onClick={this.onClick}>Botão 2</button>
                    <button onClick={this.onClick}>Botão 3</button>
                </div>
                
            </div>
        );
    } // se for uma classe, o retorno deve estar dentro do método render
    // ao executar o setState, o método render() é chamado, é criado um DOM virtual e o componente em questão é atualizado.
    // passa-se um objeto para setState() com as propriedades que se quer alterar
}

*/
