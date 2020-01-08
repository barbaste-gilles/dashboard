import React from 'react';
import logo from '../../../assets/Logo.png'
import logomot from '../../../assets/Logo_Mot.png'
import logolokalero from '../../../assets/Lokalero_Sprint.png'
import ErrorLogin from "../error-login";
import { withRouter } from 'react-router-dom';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorLoggedIn : false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        fetch(`https://test-api-lokalero.herokuapp.com/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `email=${this.state.email}&password=${this.state.password}`
        })
            .then(response => response.json())
            .then(data => {
                console.table('Réponse API :', data);
                console.log('un email a été soumis: ' + this.state.email);
                console.log('Mot de passe correct: ' + this.state.password);

                if (data.login) {
                    this.props.history.push('/dashboard');
                } else {
                    this.setState({
                        errorLoggedIn : true
                    })
                }
            })

    }

    render() {

            return (
                <div className="formLog">
                    <div className="card">
                        <div className="container">

                            <img
                                className="logo"
                                src={logo}
                                alt="logo"
                            />
                            <img
                                className="logomot"
                                src={logomot}
                                alt="logo mot"
                            />

                            <h5 className="card-header text-center py-4">
                                <strong>Identifiez-vous</strong>
                            </h5>

                            {this.state.errorLoggedIn && <ErrorLogin/>}

                            <div className="card-body px-xl-5 pt-0">

                                <form
                                    className="form-login"
                                    action="#"
                                    onSubmit={this.handleSubmit}>

                                    <div>
                                        <label className="col">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="col form-control-lg"
                                            id="email"
                                            placeholder="Entrer votre email"
                                            value={this.state.email}
                                            onChange={(event) => {
                                                this.setState({email: event.target.value})
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label className="col">
                                            Mot de passe
                                        </label>
                                        <input
                                            type="password"
                                            className="col form-control-lg"
                                            id="password"
                                            placeholder="Entrer votre mot de passe"
                                            value={this.state.password}
                                            onChange={(event) => {
                                                this.setState({password: event.target.value})
                                            }}
                                        />
                                    </div>

                                    <div className="submit">
                                        <button
                                            className="btn btn-outline-warning btn-rounded btn-block btn-lg my-4 waves-effect z-depth-0 w-50"
                                            type="submit">
                                            <img className="logolokalero col-lg-6"
                                                 src={logolokalero}
                                                 alt="Logo Lokalero"/>Envoyez
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            );

    }
}

export default withRouter(Login)
