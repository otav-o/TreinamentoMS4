import React from 'react';

class ContatoConsulta extends React.Component {
    render () {
        return (
            <form>
                <div className="ui form">
                    <div className="two fields">
                        <div className="disabled field">
                            <label>Nome</label>
                            <input value="Bob Esponja" placeholder="Read Only" type="text" disabled="" tabindex="-1"></input>
                        </div>
                        <div className="disabled field">
                            <label>Número</label>
                            <input value='55 99999-9999' placeholder="Disabled" type="text" disabled="" tabindex="-1"></input>
                        </div>
                    </div>
                </div>
            </form>
    );
    }
}

export default ContatoConsulta;