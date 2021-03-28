import React from 'react';
import api from '../apis';

class ContatoConsulta extends React.Component {
    constructor (props) {
        super(props);
        this.state = {objeto: null, carregando: true }; // precisa de um construtor já que ele recebe o contatoId, e não o objeto contato
    }

    componentDidMount() {
        api.get(`api/contato/${this.props.id}`) //, { params: {id: this.props.id } })
        .then(result => {
            this.setState({objeto: result.data, carregando: false})
        });
    }
    
    render () {
        if (this.state.carregando) {
            return <div>Carregando...</div>
        }
        const obj = this.state.objeto;

        return (
          <div>
            <button onClick={()=>{this.props.voltar()}} className='tiny ui grey button'>Voltar</button>
            <form>
                <div className="ui form">
                    <div>
                        <div>
                            <label>Nome</label>
                            <input className='disabled field' value={obj.nome} placeholder="Read Only" type="text" disabled="" tabindex="-1"></input>
                        </div>
                    </div>
                </div>
            </form>
          </div>
        );
    }
}

export default ContatoConsulta;