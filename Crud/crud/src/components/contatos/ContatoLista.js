import React from 'react';

class ContatoLista extends React.Component {

    constructor(props) {
        super(props);
    }
    renderItens() { // retornar um mapeamento do vetor de contatos
        return(
            this.props.objetos.map(x => { // para cado contato x, retornar o JSX abaixo
                return (
                    <tr key={x.ContatoId}>
                        <td>{x.Nome}</td>
                        <td>{x.Numero}</td>
                        <button onClick={()=>{this.props.consultar(x)}} className='tiny ui grey button'>Consultar</button>
                        <button className='tiny ui blue button'>Alterar</button>
                        <button className='tiny ui red button'>Excluir</button>
                    </tr>
                );
            })
        );
    }

    render() { 
        return (
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Número</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderItens()}
                </tbody>
            </table>
        );
    } 
}

export default ContatoLista;


// representa uma lista de contatos