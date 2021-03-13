import React from 'react';

class ContatoLista extends React.Component {
    renderLista() { // subrotina para renderizar a lista
        return ( // copiado de semantic-ui.com
            <table className="ui celled table">
                <thead>
                    <tr><th>Name</th>
                    <th>Age</th>
                    <th>Job</th>
                </tr></thead>
                <tbody>
                    <tr>
                    <td data-label="Name">James</td>
                    <td data-label="Age">24</td>
                    <td data-label="Job">Engineer</td>
                    </tr>
                    <tr>
                    <td data-label="Name">Jill</td>
                    <td data-label="Age">26</td>
                    <td data-label="Job">Engineer</td>
                    </tr>
                    <tr>
                    <td data-label="Name">Elyse</td>
                    <td data-label="Age">24</td>
                    <td data-label="Job">Designer</td>
                    </tr>
                </tbody>
            </table>
        );
    } 

    render() {
        return (
            <div>
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