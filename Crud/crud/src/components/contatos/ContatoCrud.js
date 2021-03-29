// fazer os tratamentos, manter estado do componente ContatoLista

import React from 'react';
import ContatoLista from './ContatoLista';
import ContatoConsulta from './ContatoConsulta';
import ContatoAlterarIncluir from './ContatoAlterarIncluir';
import api from '../apis'; // como é a exportação padrão, (export default) náo precisa de chaves em {api}, pois só há uma possibilidade
import {Link} from 'react-router-dom';

class ContatoCrud extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            objetos: [], 
            objetoSelecionado: null,
            status: ETipoAcao.carregando
        };
    }

    componentDidMount() { // api é o axios com aquela url (api\index.js)
        this.consultarDados();
    }

    consultarDados = () => {
        api.get('/api/contato')
        .then(result => {
            console.log(result.data); // testar só com result
            this.setState({objetos: result.data, status: ETipoAcao.listando});
            // mudar para listando
        });
    }

    consultar = (objeto) => {
        console.log("objeto selecionado:");
        console.log(objeto);
        this.setState({objetoSelecionado: objeto, status: ETipoAcao.consultando})
        // mudar estado da propriedade somente com o setState
    };

    alterar = (objeto) => { // mostra a tela
        this.setState({objetoSelecionado: objeto, status: ETipoAcao.alterando});
    };

    incluir = () => {
        this.setState({ status: ETipoAcao.incluindo })
    }

    // salvarAlteracao = (objeto) => {
    //     api.put(`/api/contato/${objeto.contatoId}`, objeto)
    //     .then(result => {
    //         console.log(result.status)
    //         if (result.status === 204) {
    //             this.setState({status: ETipoAcao.carregando});
    //             this.consultarDados()
    //         }
    //     });
    // };

    deletar = (id) => {
        api.delete(`/api/contato/${id}`)
        .then(result => {
            console.log(result.status)
            if (result.status === 204) {
                this.setState({status: ETipoAcao.carregando});
                this.consultarDados()
            }
        });
    };

    // salvarInclusao = (obj) => {
    //     api.post('/api/contato', obj) // salvarAlteracao é put
    //     .then(result => {
    //         console.log(result.status)
    //         if (result.status === 201) {// sucesso
    //             this.setState({status: ETipoAcao.carregando});
    //             this.consultarDados()
    //         }
    //     });
    // }

    voltar = () => {
        this.setState({status: ETipoAcao.listando});
    }

    renderComponente() { // renderiza conforme o estado
        if (this.state.status === ETipoAcao.listando) {
            return (
                <div>
                    <Link to='/contato/novo' className='tiny ui green button'>Incluir</Link>;
                    <ContatoLista objetos={this.state.objetos} consultar={this.consultar} alterar={this.alterar} deletar={this.deletar}/>;
                </div> // consultar: método passado como props para o ContatoLista que muda o objeto selecionado
            )
        } 
        else if (this.state.status === ETipoAcao.consultando) {
            return <ContatoConsulta voltar={this.voltar} id={this.state.objetoSelecionado.contatoId}/>; // passa o método voltar e um id
        }
        // else if (this.state.status === ETipoAcao.alterando) {
        //     return <ContatoAlterarIncluir salvarAlteracao={this.salvarAlteracao} incluindo={false} voltar={this.voltar} id={this.state.objetoSelecionado.contatoId}></ContatoAlterarIncluir>
        // }
        // else if (this.state.status === ETipoAcao.incluindo) {
        //     return <ContatoAlterarIncluir salvarAlteracao={this.salvarInclusao} incluindo={true} voltar={this.voltar}/>
        // }
        else {
            return <div>Carregando...</div>;
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
}

const ETipoAcao = Object.freeze({ // "Como se fosse um Enum"
	"carregando":1, 
	"listando":2, 
	"consultando":3, 
	"incluindo":4, 
	"alterando":5
});

export default ContatoCrud;