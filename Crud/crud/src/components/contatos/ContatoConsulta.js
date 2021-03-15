import React from 'react';

class ContatoConsulta extends React.Component {
    render () {
        return (
            <form>
                <div className="ui form">
                    <div>
                        <div>
                            <label>Nome</label>
                            <input className='disabled field' value="Bob Esponja" placeholder="Read Only" type="text" disabled="" tabindex="-1"></input>
                        </div>
                        <div>
                            <label>Número</label>
                            <input className='disabled field' value='55 99999-9999' placeholder="Disabled" type="text" disabled="" tabindex="-1"></input>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default ContatoConsulta;