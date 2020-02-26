import React from 'react';
import {Button} from 'react-bootstrap';
import Parameter from '../../assets/parameter-test.png';
// import Help from '../../assets/Help.png'
import logohandidanse from "../../assets/Logo_Handidanse.png";
import Logout from "../../assets/Logout.png";
import logo from "../../assets/Logo.png";

// ----------------------------------- Data + Export Excel ------------------------------------------------------------
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

// ----------------------------------------- multiDataSet ------------------------------------------------
const multiDataSet = [
    {
        columns: ["Bénéficiaire", "Type de don", "Date", "Montant", "Email"],
        data: [
            [
                {value: "Stripe", style: {fill: {fgColor: {rgb: "FFEADC"}}}},
                {value: "Loka'Borne", style: {fill: {fgColor: {rgb: "FFEADC"}}}},
                {value: "02/10/2019 10:15", style: {fill: {fgColor: {rgb: "FFEADC"}}}},
                {value: "2€", style: {fill: {fgColor: {rgb: "FFEADC"}}}},
            ],
            [
                {value: "Obole digital"},
                {value: "LOKA'Mobile"},
                {value: "01/10/2019 15:45"},
                {value: "20€"},
            ],
            [
                {value: "Stripe", style: {fill: {fgColor: {rgb: "FFEADC"}}}},
                {value: "Loka'Borne", style: {fill: {fgColor: {rgb: "FFEADC"}}}},
                {value: "20/09/2019 10:50", style: {fill: {fgColor: {rgb: "FFEADC"}}}},
                {value: "5€", style: {fill: {fgColor: {rgb: "FFEADC"}}}},
            ],
            [
                {value: "Obole digital"},
                {value: "LOKA'Mobile"},
                {value: "03/09/2019 16:20"},
                {value: "10€"},
            ],
            [
                {value: "Obole digital", style: {fill: {fgColor: {rgb: "FFEADC"}}}},
                {value: "Loka'Borne", style: {fill: {fgColor: {rgb: "FFEADC"}}}},
                {value: "01/09/2019 12:40", style: {fill: {fgColor: {rgb: "FFEADC"}}}},
                {value: "25€", style: {fill: {fgColor: {rgb: "FFEADC"}}}},
            ],
        ],
    }
];

class Don extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        return (
            <div>

                {/* ----------------------------------------- Horizontal navigation bar ---------------------------------------------*/}

                {/*< Navigation />*/}


                {/* ----------------------------------------- Vertical navigation bar -----------------------------------------------*/}

                <div className="row">
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
                                <img className="logo2 center-block"
                                     src={logo}
                                     alt="Logo Lokalero"
                                />
                            </a>
                            <a className="nav-link link-custom"
                               id="v-pills-profil-tab"
                               data-toggle="pill"
                               href="#v-pills-profil"
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
                            >
                                <strong>Projets</strong>
                            </Button>
                            <Button className="link-custom round" href="/don"
                                    variant="outline-warning"
                                    type="submit"
                                    size="lg"
                                    color="#003135"
                                    active
                            >
                                <strong>Dons</strong>
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
                                        className="logout"
                                        src={Logout}
                                        alt="Déconnexion"

                                    />
                                </div>
                                <a className="link-custom text-custom"
                                   id="v-pills-profil-tab"
                                   data-toggle="pill"
                                   href="/"
                                   role="tab"
                                   aria-controls="v-pills-profil"
                                   aria-selected="false"
                                >
                                    <h5><strong>Déconnexion</strong></h5>
                                </a>

                            </div>
                        </div>
                    </div>

                    {/* ---------------------------------------- End Vertical navigation bar ------------------------------------------- */}

                    {/* -------------------------------- Displays the Dashboard to the right of the navigation bar --------------------- */}

                    <div className="col-md-9">

                        <main>

{/* ------------------------------------     Liste des donateurs récents      -------------------------------------- */}

                                <div className="container-fluid text-center">

                                    <div className="row mb-0 mt-0 justify-content-center text-center">
                                        <div className="col-sm-9 listeDon">
                                            <h3 className="h3-custom">Liste des dons</h3>
                                        </div>
                                        <div className="col-lg-3 listeDon">

                                            {/*-------------------------------------  Export Data multiDataSet --------------------------------------------------*/}
                                            <div>
                                                <ExcelFile element={<button className="btn btn-warning">Export</button>}>
                                                    <ExcelSheet dataSet={multiDataSet} name="Dons récents"/>
                                                </ExcelFile>
                                            </div>
                                            {/*------------------------------------- End Export Data multiDataSet -----------------------------------------------*/}

                                        </div>
                                    </div>

                                    <div className="table-responsive-sm">
                                        <table className="table shadow justify-content-around">
                                            <tbody>
                                            <tr>
                                                <th className="Entete-custom">Bénéficiaire</th>
                                                <th className="Entete-custom">Type de don</th>
                                                <th className="Entete-custom">Date</th>
                                                <th className="Entete-custom">Montant</th>
                                            </tr>
                                            <tr className="line-custom">
                                                <td>Stripe</td>
                                                <td>Loka'Borne</td>
                                                <td>02/10/2019 10:15</td>
                                                <td>2€</td>
                                            </tr>
                                            <tr className="line2-custom">
                                                <td>Obole digital</td>
                                                <td>Loka'Mobile</td>
                                                <td>01/10/2019 15:45</td>
                                                <td>20€</td>
                                            </tr>
                                            <tr className="line-custom">
                                                <td>Stripe</td>
                                                <td>Loka'Borne</td>
                                                <td>20/09/2019 10:50</td>
                                                <td>5€</td>
                                            </tr>
                                            <tr className="line2-custom">
                                                <td>Obole digital</td>
                                                <td>Loka'Mobile</td>
                                                <td>03/09/2019 16:20</td>
                                                <td>10€</td>
                                            </tr>
                                            <tr className="line-custom">
                                                <td>Obole digital</td>
                                                <td>Loka'Borne</td>
                                                <td>01/09/2019 12:40</td>
                                                <td>25€</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                {/* ------------------------------------  End - Liste des donateurs récents   -------------------------------------- */}
                        </main>
                    </div>
                    {/* ---------------------------- (END) Displays the Dashboard to the right of the navigation bar --------------------- */}
                </div>
            </div>

        );

    }
}

export default Don
