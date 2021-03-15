import React from 'react';

class ContatoAlterar extends React.Component {

    salvar = (e) => { console.log(e); }

    render () {
        const obj = this.props.objeto;
        return (
            <div>
                <button onClick={()=>{this.props.voltar()}} className='tiny ui grey button'>Voltar</button>
                <form className="ui form">
                    <div>
                        <div>
                            <label>Nome</label>
                            <input defaultValue={obj.Nome} type="text"></input>
                        </div>
                        <div>
                            <label>Número</label>
                            <input defaultValue={this.props.objeto.Numero} type="text"/>
                        </div>
                    </div>
                    <button onClick={this.salvar} className='tiny ui green button'>Salvar Alterações</button>
                </form>
            </div>
            );
    }
}

export default ContatoAlterar;