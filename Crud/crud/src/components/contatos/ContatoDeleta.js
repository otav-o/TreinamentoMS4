import React from 'react';
import api from '../apis';
import history from '../../history';

class ContatoDeleta extends React.Component {
    constructor (props) {
        super(props);
        this.state = {objeto: null, carregando: true };
    }

    componentDidMount() {
        api.get(`api/contato/${this.props.match.params.id}`)
        .then(result => {
            this.setState({objeto: result.data, carregando: false})
        });
    }

    excluir = () => {
        api.delete(`/api/contato/${this.state.objeto.contatoId}`)
        .then(result => {
            if (result.status === 204) {
                history.push('/contato/');
            }
        });
    }
    
    render () {
        if (this.state.carregando) {
            return <div>Carregando...</div>
        }
        const obj = this.state.objeto;

        return (
          <div className='ui container'>
              <h1>Excluindo contato</h1>
            <button onClick={()=>{history.push('/contato/')}} className='tiny ui grey button'>Voltar</button>
            <form>
                <div className="ui form">
                    <div>
                        <div>
                            <label>Nome</label>
                            <input className='disabled field' value={obj.nome} placeholder="Read Only" type="text" disabled="" tabindex="-1"></input>
                        </div>
                    </div>
                    <div>Deseja excluir o contato acima?</div>
                    <button onClick={this.excluir} className='tiny ui red button'>Sim</button>
                </div>
            </form>
          </div>
        );
    }
}

export default ContatoDeleta;