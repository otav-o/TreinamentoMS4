import React from 'react'; // todo componente do React precisa dar esse import
import faker from 'faker';

const Cartao = () => {
    return (
      <div className="ui card">
        <div className="image">
          <img src={faker.image.people()}/>
        </div>
        <div className="content">
          <a className="header">{faker.name.firstName()}</a>
          <div className="meta">
            <span className="date">Joined in {faker.date.past().toDateString()}</span>
          </div>
          <div className="description">
          {faker.lorem.sentence()}
          </div>
        </div>
        <div className="extra content">
          <a>
            <i className="user icon"></i>
            {faker.random.number()}
          </a>
        </div>
      </div>
    );
};

export default Cartao;