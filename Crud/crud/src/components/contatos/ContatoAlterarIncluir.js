import React from 'react';
import api from '../apis';
import history from '../../history';

class ContatoAlterarIncluir extends React.Component {

    constructor (props) {
        super(props);

        if (props.match.params.id) {
            this.state = {objeto: null, incluindo: false, carregando: true};
            console.log('alterando');
        } else {
            this.state = {objeto: {nome: ''}, incluindo: true, carregando: false};
            console.log('incluindo');
        } // se estiver incluindo, começar com o objeto em branco
    }

    componentDidMount() {
        if (!this.state.incluindo) {
            api.get(`api/contato/${this.props.match.params.id}`)
            .then(result => {
                this.setState({objeto: result.data, carregando: false})
            });
        }
    }

    incluir = () => {
        const obj = this.state.objeto;
        api.post('/api/contato', obj) // salvarAlteracao é put
        .then(result => {
            console.log(result.status)
            if (result.status === 201) {// sucesso
                history.push('/contato/'); // ou history.goBack()
            }
        });
    }

    alterar = () => {
        const objeto = this.state.objeto;
        api.put(`/api/contato/${objeto.contatoId}`, objeto)
        .then(result => {
            console.log(result.status)
            if (result.status === 204) {
                history.push('/contato/');
            }
        });
    }

    salvar = (e) => { 
        console.log(e);
        e.preventDefault();

        if (this.state.incluindo) {
            this.incluir();
        } else {
            this.alterar();
        }

    }

    alteraProp = (nomePropriedade, valorPropriedade) => {
        let obj = this.state.objeto;
        obj[nomePropriedade] = valorPropriedade; // em um objeto em JS é possível alterar a propriedade assim, com o nome dela (string) entre colchetes.
        this.setState({objeto: obj});
    }

    render () {
        if (this.state.carregando) {
            return <div>Carregando...</div>
        }

        const obj = this.state.objeto;

        return (
            <div>
                <button onClick={()=>{this.props.voltar()}} className='tiny ui grey button'>Voltar</button>
                <form className="ui form">
                    <div>
                        <div>
                            <label>Nome</label>
                            <input onChange={(e) => this.alteraProp('nome', e.target.value)} value={obj.nome} type="text"></input>
                        </div>
                    </div>
                    <button onClick={this.salvar} className='tiny ui green button'>Salvar Alterações</button>
                </form>
            </div>
            );
    }
}

export default ContatoAlterarIncluir;