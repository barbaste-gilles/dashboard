import React from 'react';
import Login from "../form-login";

class ErrorLogin extends React.Component {
    render() {
        return (
            <div className="classLogin">
                <Login/>
                <div className="card-footer">
                    <div className="container">
                        <div className="card-body px-xl-5 pt-0">

                            <button
                                className="btn btn-danger btn-rounded btn-block btn-lg my-4 waves-effect z-depth-0 w-100">
                                Votre identifiant n'est pas reconnu.
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ErrorLogin