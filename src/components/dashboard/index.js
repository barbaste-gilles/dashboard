import React from 'react';
import repartitiondon from '../../assets/repartition_don.png';
import objectif from '../../assets/objectif.png';
import repartitionmois from '../../assets/repartition_mois.png';
import Barnav from "../barnav";


class Home extends React.Component {

    render() {

        return (
        <div>
            {/*<nav className="barnav barnav-light bg-light border-bottom justify-content-between">*/}
            {/*    <a className="barnav-brand" href="Login">*/}
            {/*        <img*/}
            {/*            className="logo"*/}
            {/*            src={logo}*/}
            {/*            alt="logo"*/}
            {/*        />*/}
            {/*        <img*/}
            {/*            className="logomot"*/}
            {/*            src={logomot}*/}
            {/*            alt="logo mot"*/}
            {/*        />*/}
            {/*    </a>*/}
            {/*    <form className="form-inline">*/}
            {/*        <button*/}
            {/*            className="btn btn-outline-warning my-2 my-sm-0"*/}
            {/*            type="submit">*/}
            {/*            Déconnexion*/}
            {/*        </button>*/}
            {/*    </form>*/}
            {/*</nav>*/}

            <Barnav />

            < div className = "card-deck" >

                < div className = "card" >
                    < div className = "card-body" >
                        < h5 className = "card-title" > Contributions < /h5>
                            <br/>
                            <br/>
                            <p className="card-text">120 contributions</p>
                            <br/>
                            <br/>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title"> Collectés </h5>
                        <br/>
                        <br/>
                        <p className="card-text">480€ collectés</p>
                        <br/>
                        <br/>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title"> Dates de collecte </h5>
                        <p className="card-text">
                            Collecteur A le 25/10/2020 <br/>
                            Collecteur A le 30/11/2020 <br/>
                            Collecteur B le 15/10/2020 <br/>
                            Collecteur C le 05/11/2020 <br/>
                            Collecteur C le 28/11/2020
                        </p>

                    </div>
                </div>

            </div>

            < div className = "card-deck " >

                < div className = "card" >
                    < div className = "card-body" >
                        < h5 className = "card-title" > Répartition par montant du don < /h5>

                            <img
                                className="repartitiondon"
                                src={repartitiondon}
                                alt="Répartition du Don"

                            />

                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Pourcentage de l'Objectif</h5>
                        <img
                            className="objectif"
                            src={objectif}
                            alt="Pourcentage de l'objectif"
                        />
                    </div>
                </div>

            </div>

            < div className = "card-deck " >

                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Répartition du don par mois</h5>
                        <img
                            className="repartitionmois"
                            src={repartitionmois}
                            alt="Répartition du Don par mois"
                        />
                    </div>
                </div>

            </div>

        </div>

        );

    }
}

export default Home
