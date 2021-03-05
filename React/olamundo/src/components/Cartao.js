import React from 'react'; // todo componente do React precisa dar esse import
import faker from 'faker';

const Cartao = (props) => {
    return (
      <div className="ui card">
        <div className="image">
          <img src={props.foto}/>
        </div>
        <div className="content">
          <a className="header">{props.nome}</a>
          <div className="meta">
            <span className="date">Joined in {props.membroDesde}</span>
          </div>
          <div className="description">
          {props.descricao}
          </div>
        </div>
        <div className="extra content">
          <a>
            <i className="user icon"></i>
            {props.numeroAmigos} Amigos
          </a>
        </div>
      </div>
    );
};

export default Cartao;