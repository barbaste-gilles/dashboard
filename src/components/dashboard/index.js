import React from 'react';
import logo from '../../assets/Logo.png'
import logomot from '../../assets/Logo_Mot.png'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
        <div>
            <nav class="navbar navbar-light bg-light border-bottom justify-content-between">
                <a class="navbar-brand" href="Login">
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
                </a>
                <form className="form-inline">
                    <button
                        className="btn btn-outline-warning my-2 my-sm-0"
                        type="submit">
                        Déconnexion
                    </button>
                </form>
            </nav>

            < div className = "card-deck" >

                < div className = "card" >
                    < div className = "card-body" >
                        < h5 className = "card-title" > Special title treatment < /h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>

            </div>

            < div className = "card-deck " >

                < div className = "card" >
                    < div className = "card-body" >
                        < h5 className = "card-title" > Special title treatment < /h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>

            </div>

        </div>

        );

    }
}

export default Home
