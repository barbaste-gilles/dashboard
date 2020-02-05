import React from 'react';

class ErrorLogin extends React.Component {
    render() {
        return (
            <div className="classLogin">
                <button
                    className="btn btn-danger btn-rounded btn-block btn-lg my-4 waves-effect z-depth-0 w-100">
                    Votre identifiant n'est pas reconnu.
                </button>
            </div>
        );
    }
}

export default ErrorLogin
