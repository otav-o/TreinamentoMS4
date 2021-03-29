import React from 'react';

class ContatoLista extends React.Component {

    constructor(props) {
        super(props);
    }
    renderItens() { // retornar um mapeamento do vetor de contatos
        return(
            this.props.objetos.map(x => { // para cado contato x, retornar o JSX abaixo
                return (
                    <tr key={x.contatoId}>
                        <td>{x.nome}</td>
                        <a href={`/contato/consultar/${x.contatoId}`} className='tiny ui gray button'>Consultar</a>
                        {/* <button onClick={()=>{this.props.alterar(x)}} className='tiny ui blue button'>Alterar</button> */}
                        <a href={`/contato/alterar/${x.contatoId}`} className='tiny ui blue button'>Alterar</a>
                        <a href={(`/contato/deletar/${x.contatoId}`)} className='tiny ui red button'>Excluir</a>
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