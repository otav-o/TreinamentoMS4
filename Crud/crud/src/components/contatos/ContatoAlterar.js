import React from 'react';

class ContatoAlterar extends React.Component {

    constructor(props) {
        super(props);
        this.state={objeto: props.objeto}
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
        const obj = this.props.objeto;
        return (
            <div>
                <button onClick={()=>{this.props.voltar()}} className='tiny ui grey button'>Voltar</button>
                <form className="ui form">
                    <div>
                        <div>
                            <label>Nome</label>
                            <input onChange={(e) => this.alteraProp('Nome', e.target.value)} value={obj.Nome} type="text"></input>
                        </div>
                        <div>
                            <label>Número</label>
                            <input onChange={(e) => this.alteraProp('Número', e.target.value)} value={this.props.objeto.Numero} type="text"/>
                        </div>
                    </div>
                    <button onClick={this.salvar} className='tiny ui green button'>Salvar Alterações</button>
                </form>
            </div>
            );
    }
}

export default ContatoAlterar;