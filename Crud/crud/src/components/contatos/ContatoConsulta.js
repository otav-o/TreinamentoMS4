import React from 'react';

class ContatoConsulta extends React.Component {
    render () {
        const obj = this.props.objeto;

        return (
          <div>
            <button onClick={()=>{this.props.voltar()}} className='tiny ui grey button'>Voltar</button>
            <form>
                <div className="ui form">
                    <div>
                        <div>
                            <label>Nome</label>
                            <input className='disabled field' value={obj.Nome} placeholder="Read Only" type="text" disabled="" tabindex="-1"></input>
                        </div>
                        <div>
                            <label>Número</label>
                            <input className='disabled field' value={this.props.objeto.Numero} placeholder="Disabled" type="text" disabled="" tabindex="-1"></input>
                        </div>
                    </div>
                </div>
            </form>
          </div>
        );
    }
}

export default ContatoConsulta;