import React from 'react';
import { Link } from 'react-router-dom'; // para poder criar um link que abre sem dar refresh na página

class App extends React.Component {
    render () {
        return (
            <div>
                <h1>Testando...</h1>
                <Link to='/sobre'>Sobre</Link>
            </div>
        );
    }
}

export default App;