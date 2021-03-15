// fazer os tratamentos, manter estado do componente ContatoLista

import React from 'react';
import ContatoLista from './ContatoLista';
import ContatoConsulta from './ContatoConsulta';

class ContatoCrud extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            objetos: contatos, 
            objetoSelecionado: null,
            status: ETipoAcao.listando
        };
    }

    consultar = (objeto) => {
        console.log("objeto selecionado:");
        console.log(objeto);
        this.setState({objetoSelecionado: objeto, status: ETipoAcao.consultando})
        // mudar estado da propriedade somente com o setState
    };

    renderComponente() { // renderiza conforme o estado
        if (this.state.status === ETipoAcao.listando) {
            return (
                <div>
                    <button className='tiny ui green button'>Incluir</button>;
                    <ContatoLista objetos={this.state.objetos} consultar={this.consultar}/>;
                </div> // consultar: método passado como props para o ContatoLista que muda o objeto selecionado
            )
        } 
        else if (this.state.status === ETipoAcao.consultando) {
            return <ContatoConsulta objeto={this.state.objetoSelecionado}/>;
        } 
        else {
            return <div></div>;
        }
    }

    render() {
        return (
            <div>
                <h1>Contatos</h1>
                {/* <ContatoLista objetos={this.state.objetos} consultar={this.consultar}/> */}
                {this.renderComponente()}
            </div> // clique no ContatoLista tem efeito no ContatoCrud
        );
    }
} // passar o vetor como propriedade

const contatos = [
    { ContatoId: 'a', Nome: 'Ana', Numero: '(11)1111-1111' },
    { ContatoId: 'b', Nome: 'Bruno', Numero: '(22)2222-2222' },
    { ContatoId: 'C', Nome: 'Carlos', Numero: '(33)3333-3333' },
];

const ETipoAcao = Object.freeze({ // "Como se fosse um Enum"
	"carregando":1, 
	"listando":2, 
	"consultando":3, 
	"incluindo":4, 
	"alterando":5
});

export default ContatoCrud;