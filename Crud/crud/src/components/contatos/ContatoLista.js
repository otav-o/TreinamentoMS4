import React from 'react';

class ContatoLista extends React.Component {
    renderItens() { // retornar um mapeamento do vetor de contatos
        return(
            contatos.map(x => { // para cado contato x, retornar o JSX abaixo
                return (
                    <tr>
                        <td>{x.Nome}</td>
                        <td>{x.Numero}</td>
                    </tr>
                );
            })
        );
    }

    renderLista() { // subrotina para renderizar a lista
        return ( // copiado de semantic-ui.com
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Número</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderItens()}
                </tbody>
            </table>
        );
    } 

    render() {
        return (
            <div className='ui-container'>
                <h1>Contatos</h1>
                {this.renderLista()}
            </div>
        )
    }
}

export default ContatoLista;

const contatos = [
    { ContatoId: 'a', Nome: 'Ana', Numero: '(11)1111-1111' },
    { ContatoId: 'b', Nome: 'Bruno', Numero: '(22)2222-2222' },
    { ContatoId: 'C', Nome: 'Carlos', Numero: '(33)3333-3333' },
];

// representa uma lista de contatos