import React from 'react';
import repartitiondon from '../../assets/repartition_don.png';
// import objectif from '../../assets/objectif.png';
// import repartitionmois from '../../assets/repartition_mois.png';
import logohandidanse from '../../assets/Logo_Handidanse.png';
import amount from '../../assets/amount.png';
import don from '../../assets/don.png';
import donation from '../../assets/donmoyen.png';
import moyenne from '../../assets/moyenne.png';
import recufiscal from '../../assets/recufiscal.png';
import Navigation from "../barnav/index";

// ----------------------------------------- Data + Dynamic graphics  -------------------------------------------------

import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'Mars', Nombre: 250, Montant: 1000, Cumul: 1000,
    },
    {
        name: 'Avr.', Nombre: 150, Montant: 1500, Cumul: 2500,
    },
    {
        name: 'Mai', Nombre: 70, Montant: 700, Cumul: 3200,
    },
    {
        name: 'Juin', Nombre: 100, Montant: 800, Cumul: 4000,
    },
    {
        name: 'Juil.', Nombre: 334, Montant: 2338, Cumul: 6338,
    },
    {
        name: 'Août', Nombre: 4, Montant: 60, Cumul: 6368,
    },
    {
        name: 'Sept.', Nombre: 158, Montant: 1896, Cumul: 8264,
    },
    {
        name: 'Oct.', Nombre: 364, Montant: 5816, Cumul: 14088,
    },
    {
        name: 'Nov.', Nombre: 140, Montant: 1960, Cumul: 16048,
    },
    {
        name: 'Déc.', Nombre: 202, Montant: 5050, Cumul:21098,
    },
    {
        name: 'Janv.', Nombre: 180, Montant: 3060, Cumul: 24158,
    },
    {
        name: 'Fev.', Nombre: 130, Montant: 1300, Cumul: 25458,
    },
];
// ---------------------------------------  Data + Dynamic graphics  -------------------------------------------------

class Home extends React.Component {

    render() {

        return (
        <div>
            {/* Navigation bars */}

            {/* ------- Horizontal navigation bar ------------------------------------------------------------------*/}

            < Navigation />

            {/*<Navbar className="bg-custom navbar-expand-lg" variant="primary">*/}
            {/*    <Navbar.Brand href="#home"></Navbar.Brand>*/}
            {/*    <Navbar.Toggle aria-controls="basic-navbar-nav"/>*/}
            {/*    <Navbar.Collapse id="basic-navbar-nav">*/}
            {/*        <Nav className="navbar-brand container-fluid">*/}

            {/*            /!*<Nav.Link href="#link">Link</Nav.Link>*!/*/}

            {/*            { /*initialized link *!/*/}
            {/*            <form className="form-control col-5 d-inline-flex p-0 border-warning justify-content-xl-around">*/}
            {/*                <NavDropdown title="Filtres" id="filtres-nav-dropdown">*/}
            {/*                    <NavDropdown.Item href="#action/1.1">Filtre 1</NavDropdown.Item>*/}
            {/*                    <NavDropdown.Item href="#action/1.2">Filtre 2</NavDropdown.Item>*/}
            {/*                    <NavDropdown.Item href="#action/1.3">Filtre 3</NavDropdown.Item>*/}
            {/*                    <NavDropdown.Divider />*/}
            {/*                    <NavDropdown.Item href="#action/1.4">Autre filtre</NavDropdown.Item>*/}
            {/*                </NavDropdown>*/}
            {/*            </form>*/}
            {/*            <form className="form-control col-5 d-inline-flex p-0 border-warning justify-content-xl-around">*/}
            {/*                <NavDropdown title="Périodes" id="periodes-nav-dropdown">*/}
            {/*                    <NavDropdown.Item href="#action/2.1">Mois en cours</NavDropdown.Item>*/}
            {/*                    <NavDropdown.Item href="#action/2.2">Trimestre en cours</NavDropdown.Item>*/}
            {/*                    <NavDropdown.Item href="#action/2.3">Année en cours</NavDropdown.Item>*/}
            {/*                    <NavDropdown.Divider />*/}
            {/*                    <NavDropdown.Item href="#action/2.4">Autre période</NavDropdown.Item>*/}
            {/*                </NavDropdown>*/}
            {/*            </form>*/}


            {/*            /!* link not initialized *!/*/}
            {/*            /!*<Nav.Link href="#link"></Nav.Link>*!/*/}
            {/*            /!*<Nav.Link href="#link"></Nav.Link>*!/*/}
            {/*        </Nav>*/}
            {/*        /!*<Form inline>*!/*/}
            {/*        /!*    <FormControl type="text" placeholder="Search" className="mr-sm-2" />*!/*/}
            {/*        /!*    <Button variant="outline-success">Rechercher</Button>*!/*/}
            {/*        /!*</Form>*!/*/}
            {/*    </Navbar.Collapse>*/}
            {/*</Navbar>*/}


            {/*<nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">*/}

            {/*    <div class="btn-group">*/}
            {/*        <button type="button" class="btn btn-danger">Filtres</button>*/}
            {/*        <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/}
            {/*            <span class="sr-only">Toggle Dropdown</span>*/}
            {/*        </button>*/}
            {/*        <div class="dropdown-menu">*/}
            {/*            <a class="dropdown-item" href="/dashboard">Filtre 1</a>*/}
            {/*            <a class="dropdown-item" href="/dashboard">Filtre 2</a>*/}
            {/*            <a class="dropdown-item" href="/dashboard">Filtre 3</a>*/}
            {/*            <div class="dropdown-divider"></div>*/}
            {/*            <a class="dropdown-item" href="/dashboard">Autres filtres</a>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <div class="btn-group">*/}
            {/*        <button type="button" class="btn btn-danger">Périodes</button>*/}
            {/*        <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/}
            {/*            <span class="sr-only">Toggle Dropdown</span>*/}
            {/*        </button>*/}
            {/*        <div class="dropdown-menu">*/}
            {/*            <a class="dropdown-item" href="/dashboard">Mois en cours</a>*/}
            {/*            <a class="dropdown-item" href="/dashboard">Trimestre en cours</a>*/}
            {/*            <a class="dropdown-item" href="/dashboard">Année en cours</a>*/}
            {/*            <div class="dropdown-divider"></div>*/}
            {/*            <a class="dropdown-item" href="/dashboard">Autres périodes</a>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*</nav>*/}

            {/*<nav class="navbar navbar-expand-lg navbar-light bg-warning lighten-5">*/}
            {/*    /!* Collapsible content *!/*/}
            {/*    <div class="collapse navbar-collapse" id="basicExampleNav">*/}

            {/*        /!* Links *!/*/}
            {/*        <ul class="navbar-nav mr-auto">*/}

            {/*            /!* Dropdown filters *!/*/}
            {/*            <li class="nav-item dropdown">*/}
            {/*                <a class="nav-link dropdown-toggle" id="navbarFilters" data-toggle="dropdown"*/}
            {/*                   aria-haspopup="true" aria-expanded="false">Filtres</a>*/}
            {/*                <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarFilters">*/}
            {/*                    <a class="dropdown-item" href="#">Filtre 1</a>*/}
            {/*                    <a class="dropdown-item" href="#">Filtre 2</a>*/}
            {/*                    <a class="dropdown-item" href="#">Filtre 3</a>*/}
            {/*                </div>*/}
            {/*            </li>*/}

            {/*            /!* Dropdown périods *!/*/}
            {/*            <li class="nav-item dropdown">*/}
            {/*                <a class="nav-link dropdown-toggle" id="navbarPeriods" data-toggle="dropdown"*/}
            {/*                   aria-haspopup="true" aria-expanded="false">Périodes</a>*/}
            {/*                <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarPeriods">*/}
            {/*                    <a class="dropdown-item" href="#moisencours">Mois en cours</a>*/}
            {/*                    <a class="dropdown-item" href="#trimestreencours">Trimestre en cours</a>*/}
            {/*                    <a class="dropdown-item" href="#anneeencours">Année en cours</a>*/}
            {/*                </div>*/}
            {/*            </li>*/}

            {/*        </ul>*/}
            {/*        /!* Links *!/*/}
            {/*    </div>*/}
            {/*</nav>*/}

{/* ----------------------------------------- Vertical navigation bar -----------------------------------------------*/}
            <div className="row">
                <div className="col-md-3 navbar-expand-xl">
                    <div className="nav flex-column nav-pills bg-custom ml-0 my-1 navbar-collapse navbar-light navbar-height shadow"
                         id="v-pills-tab"
                         role="tablist"
                         aria-orientation="vertical">
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
                        </a>
                        {/*<a className="nav-link active"*/}
                        {/*   id="v-pills-acceuil-tab"*/}
                        {/*   data-toggle="pill"*/}
                        {/*   href="#v-pills-acceuil"*/}
                        {/*   role="tab"*/}
                        {/*   aria-controls="v-pills-acceuil"*/}
                        {/*   aria-selected="true">*/}
                        {/*    ACCEUIL*/}
                        {/*</a>*/}
                        <a className="nav-link link-custom active"
                           id="v-pills-dashboard-tab"
                           data-toggle="pill"
                           href="/dashboard"
                           role="tab"
                           aria-controls="dashboard"
                           aria-selected="false">
                            DONS
                        </a>
                        <a className="nav-link link-custom"
                           id="v-pills-projet-tab"
                           data-toggle="pill"
                           href="#v-pills-projet"
                           role="tab"
                           aria-controls="v-pills-projet"
                           aria-selected="false">
                            PROJETS
                        </a>
                        {/*<a className="nav-link"*/}
                        {/*   id="v-pills-virements-tab"*/}
                        {/*   data-toggle="pill"*/}
                        {/*   href="#v-pills-virements"*/}
                        {/*   role="tab"*/}
                        {/*   aria-controls="v-pills-virements"*/}
                        {/*   aria-selected="false">*/}
                        {/*    VIREMENTS*/}
                        {/*</a>*/}
                        <hr className="separateur"/>
                        <a className="nav-link link-custom"
                           id="v-pills-compte-tab"
                           data-toggle="pill"
                           href="#v-pills-compte"
                           role="tab"
                           aria-controls="v-pills-compte"
                           aria-selected="false">
                            MON COMPTE
                        </a>
                        <a className="nav-link link-custom"
                           id="v-pills-deconnecter-tab"
                           data-toggle="pill"
                           href="/"
                           role="tab"
                           aria-controls="v-pills-deconnecter"
                           aria-selected="false">
                            ME DECONNECTER
                        </a>
                    </div>
                </div>

{/* ---------------------------------------- End Vertical navigation bar ------------------------------------------- */}

{/* -------------------------------- Displays the Dashboard to the right of the navigation bar --------------------- */}

                <div className="col-md-9">
                    <div className="tab-content"
                         id="v-pills-tabContent">
                        <div className="tab-pane fade show active"
                             id="v-pills-acceuil"
                             role="tabpanel"
                             aria-labelledby="v-pills-acceuil-tab">

                            < div className = "card-deck container-fluid text-center" >

                                < div className = "card container-fluid" >
                                    < div className = "card-body text-center" >
                                        <h6 className="card-title">Montant global</h6>
                                        <h6 className="card-header text-dark" >25 458 €</h6>
                                        <img
                                            className="donBis img-fluid center-block"
                                            src={amount}
                                            alt="Montant global"
                                        />
                                    </div>
                                </div>

                                <div className="card container-fluid">
                                    <div className="card-body text-center">
                                        <h6 className="card-title">Don Moyen</h6>
                                        <h6 className="card-header text-dark" >12,23 €</h6>
                                        <img
                                            className="donBis img-fluid center-block"
                                            src={donation}
                                            alt="Don moyen"
                                        />
                                    </div>
                                </div>

                                <div className="card container-fluid">
                                    <div className="card-body text-center">
                                        <h6 className="card-title">Nombre de dons</h6>
                                        <h6 className="card-header text-dark">2 082</h6>
                                        <img
                                            className="donBis img-fluid center-block"
                                            src={don}
                                            alt="Coeur - Nombre de dons"
                                        />
                                    </div>
                                </div>
                            </div>

{/* ----------------------------------------------------- Dynamic graphics ----------------------------------------- */}
                            < div className = "card-deck " >

                                <div className="card container-fluid">
                                    <div className="col-md-12 card-body card-graphic">
                                        <h6 className="card-title">Répartition des dons en nombre et montant</h6>
                                        {/*<img*/}
                                        {/*    className="repartitionmois img-fluid center-block"*/}
                                        {/*    src={repartitionmois}*/}
                                        {/*    alt="Répartition du Don par mois"*/}
                                        {/*/>*/}



                                        <ResponsiveContainer>
                                            <AreaChart
                                                // width={1000}
                                                // height={400}
                                                data={data}
                                                margin={{
                                                    top: 10, right: 30, left: 0, bottom: 35,
                                                }}
                                            >
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="name" />
                                                <YAxis />
                                                <Tooltip />
                                                <Area type="monotone" dataKey="Nombre" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                                                <Area type="monotone" dataKey="Montant" stackId="1" stroke="#ffc658" fill="#ffc658" />
                                                <Area type="monotone" dataKey="Cumul" stackId="1" stroke="#8884d8" fill="#8884d8" />
                                            </AreaChart>
                                        </ResponsiveContainer>

                                    </div>

                                </div>

                            </div>
{/* ----------------------------------------------------- Dynamic graphics ----------------------------------------- */}

{/* ----------------------------- END Displays the Dashboard to the right of the navigation bar --------------------- */}
                            < div className = "card-deck" >

                                < div className = "card container-fluid" >
                                    < div className = "card-body" >
                                        <h6 className="card-title">Montants</h6>
                                        <img
                                            className="amount img-fluid center-block"
                                            src={amount}
                                            alt="Montant de la période"
                                        />
                                        <h6 className="card-header" >25,00 €</h6>
                                        <p className="card-text">Montants sur la période</p>
                                        <hr className="diviseur"/>
                                        <p className="card-text">Montant sur l'année</p>
                                        <h6 className="card-header" >25,00 €</h6>
                                    </div>
                                </div>

                                <div className="card container-fluid">
                                    <div className="card-body">
                                        <h6 className="card-title">Dons</h6>
                                        <img
                                            className="don img-fluid center-block"
                                            src={don}
                                            alt="Dons de la période"
                                        />
                                        <h6 className="card-header" >1</h6>
                                        <p className="card-text">Dons sur la période</p>
                                        <hr className="diviseur"/>
                                        <p className="card-text">Dons sur l'année</p>
                                        <h6 className="card-header" >1</h6>
                                    </div>
                                </div>

                                <div className="card container-fluid">
                                    <div className="card-body text-center">
                                        <h6 className="card-title">Moyenne</h6>
                                        <img
                                            className="moyenne img-fluid center-block"
                                            src={moyenne}
                                            alt="Moyenne de la période"
                                        />
                                        <h6 className="card-header" >25,00 €</h6>
                                        <p className="card-text">Moyenne sur la période</p>
                                        <hr className="diviseur"/>
                                        <p className="card-text">Moyenne sur l'année</p>
                                        <h6 className="card-header" >25,00 €</h6>
                                    </div>
                                </div>

                                <div className="card container-fluid">
                                    <div className="card-body text-center">

                                        <h6 className="card-title">Reçus Fiscaux</h6>
                                        <img
                                            className="moyenne img-fluid center-block"
                                            src={recufiscal}
                                            alt="Reçus fiscaux de la période"
                                        />
                                        <h6 className="card-header" >0</h6>
                                        <p className="card-text">Reçus fiscaux sur la période</p>
                                        <hr className="diviseur"/>
                                        <p className="card-text">Reçus fiscaux sur l'année</p>
                                        <h6 className="card-header" >0</h6>

                                    </div>
                                </div>

                            </div>

                            < div className = "card-deck " >

                                < div className = "col-xl-9 card container-fluid" >
                                    < div className = "card-body " >
                                        < h6 className = "card-title" > 12 derniers mois < /h6>

                                            <img
                                                className="repartitiondon img-fluid center-block"
                                                src={repartitiondon}
                                                alt="Répartition du Don"

                                            />

                                    </div>
                                </div>

                                <div className="col-xl-3 card container-fluid">
                                    <div className="card-body container-fluid">
                                        <h6 className="card-title">Les 10 derniers dons</h6>
                                        {/*<img*/}
                                        {/*    className="objectif img-fluid center-block"*/}
                                        {/*    src={objectif}*/}
                                        {/*    alt="Pourcentage de l'objectif"*/}
                                        {/*/>*/}
                                        <div className="col-sm-7 float-left text-center card-custom2">
                                            <div className="card-custom"><strong>Type</strong></div>
                                            <ul>
                                                <li className="list-custom">Denier</li>
                                                <li className="list-custom">Denier</li>
                                                <li className="list-custom">Don avec un montant libre</li>
                                                <li className="list-custom">Quête</li>
                                                <li className="list-custom">Denier</li>
                                                <li className="list-custom">Denier</li>
                                                <li className="list-custom">Don avec un montant libre</li>
                                                <li className="list-custom">Travaux</li>
                                                <li className="list-custom">Denier</li>
                                                <li className="list-custom">Travaux</li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-5 float-right text-center card-custom2">
                                            <div className="card-custom"><strong>Montant</strong></div>
                                            <ul>
                                                <li className="list-custom">1</li>
                                                <li className="list-custom">1</li>
                                                <li className="list-custom">20</li>
                                                <li className="list-custom">1</li>
                                                <li className="list-custom">5</li>
                                                <li className="list-custom">1</li>
                                                <li className="list-custom">25</li>
                                                <li className="list-custom">10</li>
                                                <li className="list-custom">1</li>
                                                <li className="list-custom">5</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>

                    </div>
                </div>
            </div>
            </div>
        </div>

        );

    }
}

export default Home
