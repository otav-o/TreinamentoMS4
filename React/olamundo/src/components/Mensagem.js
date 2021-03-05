import React from 'react'

const Mensagem = (props) => {
    return <div>Olá {props.nome}! {props.mensagem}!</div>;
    // return <div>{`Olá ${props.nome}! Seja bem vindo!`}</div>; // interpolação em JS (também é possível)
}

export default Mensagem;