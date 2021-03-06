import React from 'react';

const Loader = (props) => {
    return <div className="ui active centered loader"><p>{props.mensagem}</p></div>
};

export default Loader;