import React from 'react';
import { Button } from 'react-bootstrap';
// import Help from '../../assets/Help.png';
import projetVierge from "../../assets/projetvierge.png";
import projetAjout from "../../assets/projetAjout.png";
import NumberFormat from "react-number-format";
import hedge from "../../assets/haie.png"
import mushroom from '../../assets/champignons.png'
import Sidebar from "../sidebar";


class Project extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            TotalDon: 200,
            TotalEnCours: 0,
            NombreDonateur: 48,
            DonateurEncours: 0,
            UrlProjetr: 'www.donateur-association-complementaire-de-france.fr',
            UrlProjetr2: 'Votre lien web de payment sera affiché ici',
        };
    }

    render() {

        return (
            <div>

{/* ----------------------------------------- Horizontal navigation bar ---------------------------------------------*/}

                {/*< Navigation />*/}

                <div className="row">

                    <Sidebar />
{/* ---------------------------------------- End Vertical navigation bar ------------------------------------------- */}

{/* -------------------------------- Displays the Dashboard to the right of the navigation bar --------------------- */}

                    <div className="col-md-9 container-fluid">

                        <header>
                            <h2 className="text-center">Mes projets</h2>

                            < div className = "card-deck container-fluid text-center justify-content-center" >

                                < div className = "card container-fluid border-custom" >
                                    < div className = "card-body text-center" >
                                        <p className="card-text">
                                            En ligne
                                        </p>
                                        <img
                                            className="img-fluid center-block rounded"
                                            src={hedge}
                                            alt="Projet en ligne"
                                        />
                                        <p className="card-text">
                                            Plantations de haies
                                        </p>
                                        <h4 className="h4-custom">
                                            <NumberFormat value={this.state.TotalDon.toFixed(0)}
                                                          displayType={'text'}
                                                          thousandSeparator={' '}
                                                          decimalSeparator={','}
                                                          suffix={'€'}
                                            />
                                        </h4>
                                        <p>
                                            <NumberFormat value={this.state.NombreDonateur.toFixed(0)}
                                                          displayType={'text'}
                                                          thousandSeparator={' '}
                                                          suffix={' '}
                                            />
                                            donateurs
                                        </p>
                                        <form className="form-control-xl form-custom rounded">
                                            {this.state.UrlProjetr}
                                        </form>
                                        <a className="a-custom"
                                           href="/detailproject">
                                            <strong>
                                                <p>
                                                    Voir
                                                </p>
                                            </strong>
                                        </a>
                                    </div>
                                </div>

                                <div className="card container-fluid border-custom ml-xl-5 mr-xl-5">
                                    <div className="card-body text-center">
                                        <p className="card-text">
                                            Hors ligne
                                        </p>
                                        <img
                                            className="img-fluid center-block rounded"
                                            src={projetVierge}
                                            alt="Projet en cours"
                                        />
                                        <p className="card-text">
                                            Entretien des champs
                                        </p>
                                        <h4 className="h4-custom">
                                            <NumberFormat value={this.state.TotalEnCours.toFixed(0)}
                                                          displayType={'text'}
                                                          thousandSeparator={' '}
                                                          decimalSeparator={','}
                                                          suffix={'€'}
                                            />
                                        </h4>
                                        <p>
                                            <NumberFormat value={this.state.DonateurEncours.toFixed(0)}
                                                          displayType={'text'}
                                                          thousandSeparator={' '}
                                                          suffix={' '}
                                            />
                                            donateur(s)
                                        </p>
                                        <form className="form-control-xl form2-custom rounded">
                                            {this.state.UrlProjetr2}
                                        </form>
                                        <a className="a-custom"
                                           href="/detailprojectUpdate">
                                            <strong>
                                                <p>
                                                    Modifier
                                                </p>
                                            </strong>
                                        </a>
                                    </div>
                                </div>

                                <div className="card container-fluid border-custom border-0 shadow-none my-auto">
                                    <div className="card-body text-center">
                                        <a href="/detailprojectAdd">
                                            <img
                                                className="projetAjout img-fluid center-block rounded"
                                                src={projetAjout}
                                                alt="Ajout de projet"
                                            />
                                        </a>
                                        <a className="a-custom"
                                           href="/detailprojectAdd">
                                            <strong>
                                                <p>
                                                    Nouveau projet
                                                </p>
                                            </strong>
                                        </a>
                                    </div>
                                </div>

                            </div>

                            < div className = "card-deck container-fluid text-center justify-content-center" >

                                <div className="card container-fluid border-custom border-0 shadow-none my-auto">
                                    <div className="card-body text-center">
                                        <Button className="link-custom round-custom" href="/project"
                                                variant="outline-warning"
                                                type="submit"
                                                size="lg"
                                                color="#003135"
                                                active
                                        >
                                            <strong className="police-custom">Clôturer</strong>
                                        </Button>
                                    </div>
                                </div>
                                <div className="card container-fluid border-custom border-0 shadow-none my-auto ml-xl-5 mr-xl-5">
                                    <div className="card-body text-center">
                                        <Button className="link-custom round-custom" href="/project"
                                                variant="outline-warning"
                                                type="submit"
                                                size="lg"
                                                color="#003135"
                                                active
                                        >
                                            <strong className="police-custom">Soumettre</strong>
                                        </Button>
                                    </div>
                                </div>
                                <div className="card container-fluid border-custom border-0 shadow-none my-auto">
                                    <div className="card-body text-center">
                                    </div>
                                </div>

                            </div>

                        </header>

                        <main className="container-fluid text-center">
                            <h2 className="text-center mt-2 mb-4">Projets clôturés</h2>
                            <div className="table-responsive-sm">
                                <table className="table table-custom shadow justify-content-around">
                                    <thead>
                                    <tr>
                                        <th>Projet</th>
                                        <th>Photo</th>
                                        <th>Début collecte</th>
                                        <th>Fin collecte</th>
                                        <th>Total des dons</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="line-custom">
                                        <td className="align-middle">Plantations des haies</td>
                                        <td className="align-middle">
                                            <img className="hedge"
                                                 src={hedge}
                                                 alt="Haie"/>
                                        </td>
                                        <td className="align-middle">27/01/2020</td>
                                        <td className="align-middle">31/03/2020</td>
                                        <td className="align-middle">10500€</td>
                                    </tr>
                                    <tr className="line2-custom">
                                        <td className="align-middle">Chasse aux champignons</td>
                                        <td className="align-middle">
                                            <img className="mushroom"
                                                 src={mushroom}
                                                 alt="Chasse aux champignons"/>
                                        </td>
                                        <td className="align-middle">15/01/2020</td>
                                        <td className="align-middle">28/02/2020</td>
                                        <td className="align-middle">10500€</td>
                                    </tr>
                                    <tr className="line-custom">
                                        <td className="align-middle">Plantations des haies</td>
                                        <td className="align-middle">
                                            <img className="hedge"
                                                 src={hedge}
                                                 alt="Haie"/>
                                        </td>
                                        <td className="align-middle">27/01/2020</td>
                                        <td className="align-middle">31/03/2020</td>
                                        <td className="align-middle">10500€</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </main>


                    </div>

                </div>

            </div>
           );
    }

}

export default Project