import React from 'react';
import ReactDOM from 'react-dom'; // permite renderizar no root do index.html

const App = () => {
    return <div>Olá mundo!</div>;
};


ReactDOM.render(<App />, document.querySelector("#root"));
// ReactDOM.render(<div>Testando...</div>, document.querySelector("#root"));