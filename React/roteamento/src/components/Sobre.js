import React from 'react';
import { Link } from 'react-router-dom';

class Sobre extends React.Component {
    render () {
        return (
            <div>
                <h1>Sobre</h1>
                <p>1, 2, 3, testando...</p>
                <Link to='/'>Página principal</Link>
            </div>
        );
    }
}

export default Sobre;