import React from 'react';
import ContatoLista from './ContatoLista';
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

    renderComponente() { // renderiza conforme o estado
        if (this.state.status === ETipoAcao.listando) {
            return (
                <div>
                    <Link to='/contato/novo' className='tiny ui green button'>Incluir</Link>;
                    <ContatoLista objetos={this.state.objetos}/>;
                </div>
            )
        } 
        else {
            return <div>Carregando...</div>;
        }
    }

    render() {
        return (
            <div>
                <h1>Contatos</h1>
                {this.renderComponente()}
            </div>
        );
    }
}

const ETipoAcao = Object.freeze({ // "Como se fosse um Enum"
	"carregando":1, 
	"listando":2, 
});

export default ContatoCrud;