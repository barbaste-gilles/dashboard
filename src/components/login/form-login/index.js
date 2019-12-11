import React from 'react';

class FormLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            // login: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        fetch(' https://test-api-lokalero.herokuapp.com/login', { method: "POST" })

            .then(response => response.json())
            .then(data => {
                // console.table('Réponse :', data.login)
                console.log('un email a été soumis: ' + this.state.email);
                console.log('Mot de passe correct: ' + this.state.password);
                // this.setState({login : data.login});
                this.setState({email: data.email})
                this.setState({password: data.password});
               // console.table('Réponse Bis :', data.login)
            })

    }

render()
{   // console.log('Lire login -----> ', this.state.value);

    return (

        <div className="card">

            <div className="container">

                <h5 className="card-header text-center py-4">
                    <strong>Identifiez-vous</strong>
                </h5>


                <div className="card-body px-xl-5 pt-0">

                    <form className="form-login" action="#" onSubmit={this.handleSubmit}>

                        <div>
                            <label className="col">
                                Email
                            </label>
                            <input type="email" className="col form-control-lg" id="email"
                                   placeholder="Entrer votre email"
                                   value={this.state.email} onChange={(event) => {
                                this.setState({email: event.target.value})
                            }}/>
                        </div>
                        <div>
                            <label className="col">
                                Mot de passe
                            </label>
                            <input type="password" className="col form-control-lg" id="password"
                                   placeholder="Entrer votre mot de passe" value={this.state.password}
                                   onChange={(event) => {
                                       this.setState({password: event.target.value})
                                   }}/>

                        </div>
                        <div className="submit">
                            <button
                                className="btn btn-outline-warning btn-rounded btn-block btn-lg my-4 waves-effect z-depth-0 w-50"
                                type="submit">Envoyez
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>



    );
}
}


export default FormLogin