// fazer os tratamentos, manter estado do componente ContatoLista

import React from 'react';
import ContatoLista from './ContatoLista';

class ContatoCrud extends React.Component {
    constructor(props) {
        super(props);
        this.state = { objetos: contatos }; // contatos no estado do objeto
    }
    
    render() {
        return (
            <div>
                <h1>Contatos</h1>
                <ContatoLista objetos={this.state.objetos}/>
            </div>
        );
    }
} // passar o vetor como propriedade

const contatos = [
    { ContatoId: 'a', Nome: 'Ana', Numero: '(11)1111-1111' },
    { ContatoId: 'b', Nome: 'Bruno', Numero: '(22)2222-2222' },
    { ContatoId: 'C', Nome: 'Carlos', Numero: '(33)3333-3333' },
];

export default ContatoCrud;