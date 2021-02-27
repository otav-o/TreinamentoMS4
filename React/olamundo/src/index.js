import ReactDOM from 'react-dom'; // permite renderizar no root do index.html
import App from './components/App';

ReactDOM.render(<App />, document.querySelector("#root"));
// ReactDOM.render(<div>Testando...</div>, document.querySelector("#root"));