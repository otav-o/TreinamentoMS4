import React from 'react';
import api from '../apis';

class ContatoAlterarIncluir extends React.Component {

    constructor (props) {
        super(props);

        if (props.incluindo) {
            this.state = {objeto: {}, carregando: false}; // para não fazer a requisição get a toa
        } else {
            this.state = {objeto: null, carregando: true};
        } // se estiver incluindo, começar com o objeto em branco
    }

    componentDidMount() {
        if (!this.props.incluindo) {
            api.get(`api/contato/${this.props.id}`)
            .then(result => {
                this.setState({objeto: result.data, carregando: false})
            });
        }
    }

    salvar = (e) => { 
        console.log(e);
        e.preventDefault();
        this.props.salvarAlteracao(this.state.objeto);
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