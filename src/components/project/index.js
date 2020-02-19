import React from 'react';
import { Button } from 'react-bootstrap';
// import { MDBProgress } from 'mdbreact';
// import NumberFormat from 'react-number-format';
import Parameter from '../../assets/parameter-test.png';
import Help from '../../assets/Help.png';
import logohandidanse from "../../assets/Logo_Handidanse.png";
import projetTest from "../../assets/projetTest.png";
import projetTest2 from "../../assets/projetTest2.png";
import projetAjout from "../../assets/projetAjout.png";
import NumberFormat from "react-number-format";
// import IconGrey from "../../assets/circle-grey.png";

class Project extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            TotalDon: 200,
            TotalEnCours: 0,
            NombreDonateur: 48,
            DonateurEncours: 0,
            UrlProjetr: 'www.donateur-association-complementaire-de-france.fr',
            UrlProjetr2: 'L\'URL de don sera affiché ici',
        };
    }

    render() {

        // const { opacity } = this.state;

        return (
            <div>

{/* ----------------------------------------- Horizontal navigation bar ---------------------------------------------*/}

                {/*< Navigation />*/}

                <div className="row">
{/* ----------------------------------------- Vertical navigation bar -----------------------------------------------*/}

                    <div className="col-md-3 navbar-expand-xl">
                        <div className="nav flex-column nav-pills bg-custom ml-0 my-1 navbar-collapse navbar-light navbar-height text-center"
                             id="v-pills-tab"
                             role="tablist"
                             aria-orientation="vertical">
                            <a className="nav-link link-custom"
                               id="v-pills-profil-tab"
                               data-toggle="pill"
                               href="/dashboard"
                               role="tab"
                               aria-controls="v-pills-profil"
                               aria-selected="false">
                                <img
                                    className="logohandidanse center-block"
                                    src={logohandidanse}
                                    alt="Logo Handidanse"

                                />
                                <h3 className="SidebarTitre">Domaine des Possibles</h3>
                            </a>
                            <Button className="link-custom round" href="/dashboard"
                                    variant="outline-warning"
                                    type="submit"
                                    size="lg"
                                    color="#003135"
                            >
                                <strong>Général</strong>
                            </Button>
                            <Button className="link-custom round" href="/project"
                                    variant="outline-warning"
                                    type="submit"
                                    size="lg"
                                    color="#003135"
                                    active
                            >
                                <strong>Projets</strong>
                            </Button>
                            <br/><br/><br/>
                            <div className="row container-fluid justify-content-center">
                                <div className="flotte">
                                    <img
                                        className="parameter"
                                        src={Parameter}
                                        alt="Paramétres"

                                    />
                                </div>
                                <a className="link-custom text-custom"
                                   id="v-pills-profil-tab"
                                   data-toggle="pill"
                                   href="#v-pills-profil"
                                   role="tab"
                                   aria-controls="v-pills-profil"
                                   aria-selected="false"
                                >
                                    <h5><strong>Paramétres</strong></h5>
                                    <p className="p-custom">Profil et paiements</p>
                                </a>
                            </div>
                            <div className="row container-fluid justify-content-center">
                                <div className="flotte">
                                    <img
                                        className="help center-block"
                                        src={Help}
                                        alt=" Aide"

                                    />
                                </div>
                                <a className="link-custom text-custom"
                                   id="v-pills-profil-tab"
                                   data-toggle="pill"
                                   href="#v-pills-profil"
                                   role="tab"
                                   aria-controls="v-pills-profil"
                                   aria-selected="false"
                                >

                                    <h5><strong>Aide</strong></h5>
                                    <p className="p-custom">FAQ et assistance</p>
                                </a>
                            </div>
                        </div>
                    </div>

{/* ---------------------------------------- End Vertical navigation bar ------------------------------------------- */}

{/* -------------------------------- Displays the Dashboard to the right of the navigation bar --------------------- */}

                    <div className="col-md-9 container-fluid">

                        <header>
                            <h2 className="text-center">Mes 3 projets</h2>

                            < div className = "card-deck container-fluid text-center justify-content-center" >

                                < div className = "card container-fluid border-custom" >
                                    < div className = "card-body text-center" >
                                        <p className="card-text">
                                            En ligne
                                        </p>
                                        <img
                                            className="projetTest img-fluid center-block rounded"
                                            src={projetTest}
                                            alt="Projet de test"
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
                                    </div>
                                </div>

                                <div className="card container-fluid border-custom ml-xl-5 mr-xl-5">
                                    <div className="card-body text-center">
                                        <p className="card-text">
                                            Hors ligne
                                        </p>
                                        <img
                                            className="projetTest2 img-fluid center-block rounded"
                                            src={projetTest2}
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
                                    </div>
                                </div>

                                <div className="card container-fluid border-custom border-0 shadow-none my-auto">
                                    <div className="card-body text-center">
                                        <a href="/project">
                                            <img
                                                className="projetAjout img-fluid center-block rounded"
                                                src={projetAjout}
                                                alt="Ajout de projet"
                                            />
                                        </a>
                                        <strong>
                                            <p className="NewProject">
                                                Nouveau projet
                                            </p>
                                        </strong>
                                    </div>
                                </div>

                            </div>


                        </header>

                        <main>

                        </main>


                    </div>

                </div>

            </div>
           );
    }

}

export default Project