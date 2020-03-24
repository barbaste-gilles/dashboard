import React from 'react';
import Sidebar from "../sidebar";

class TaxReceipts extends React.Component {
    render() {
        return (

            <div>

                {/* ----------------------------------------- Horizontal navigation bar ---------------------------------------------*/}

                {/*< Navigation />*/}


                {/* ----------------------------------------- Vertical navigation bar -----------------------------------------------*/}

                <div className="row">

                    <Sidebar/>
                    {/* ---------------------------------------- End Vertical navigation bar ------------------------------------------- */}

                    {/* -------------------------------- Displays the Dashboard to the right of the navigation bar --------------------- */}

                    <div className="col-md-9">

                        <div>
                            <div className="gauge-custom mx-auto">
                                <h1 className="text-center">
                                    Préparation de la Page
                                    <br/>
                                    Reçus Fiscaux
                                </h1>
                            </div>
                            <div className="row mx-auto mb-0 mt-0 justify-content-center text-center">
                                <button className="btn-return waves-effect z-depth-0"
                                        type="submit">
                                        <a href="/dashboard">Retour</a>
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
                
            </div>
        );
    }
}

export default TaxReceipts