import React, { PureComponent } from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import { MDBProgress } from 'mdbreact';
import NumberFormat from 'react-number-format';
import logohandidanse from '../../assets/Logo_Handidanse.png';

// ----------------------------------------- Data + Dynamic graphics  -------------------------------------------------

import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'Mars 2019', Nombre: 1500, Montant: 500,
    },
    {
        name: 'Avr. 2019', Nombre: 90, Montant: 750,
    },
    {
        name: 'Mai 2019', Nombre: 42, Montant: 350,
    },
    {
        name: 'Juin 2019', Nombre: 60, Montant: 400,
    },
    {
        name: 'Juil. 2019', Nombre: 190, Montant: 1250,
    },
    {
        name: 'Août 2019', Nombre: 3, Montant: 30,
    },
    {
        name: 'Sept. 2019', Nombre: 94, Montant: 948,
    },
    {
        name: 'Oct. 2019', Nombre: 210, Montant: 3460,
    },
    {
        name: 'Nov. 2019', Nombre: 84, Montant: 900,
    },
    {
        name: 'Déc. 2019', Nombre: 120, Montant: 2500,
    },
    {
        name: 'Janv. 2020', Nombre: 948, Montant: 1530,
    },
    {
        name: 'Fev. 2020', Nombre: 98, Montant: 650,
    },
];

class CustomizedAxisTick extends PureComponent {
    render() {
        const {
            x, y, payload,
        } = this.props;

        return (
            <g transform={`translate(${x},${y})`}>
                <text
                    x={0}
                    y={0}
                    dy={16}
                    textAnchor="end"
                    fill="#666"
                    transform="rotate(-35)"
                >
                    {payload.value}
                </text>
            </g>
        );
    }
}

// ---------------------------------------  Data + Dynamic graphics  -------------------------------------------------

class Mobile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            MontantTotal: 15275,
            DonMoyen: 15275/1041,
            TotalDon: 1041,
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

                    <header>

                        {/*  -------------------------- Call up the selected page ------------------------------*/}
                        <ButtonToolbar className="justify-content-center">
                            <Button href="/dashboard" variant="outline-warning" type="submit" size="lg">Ensemble</Button>
                            <Button href="/" variant="outline-warning" type="submit" size="lg" active>LOKA'Mobile</Button>
                            <Button href="/dashboard" variant="outline-warning" type="submit" size="lg">LOKA'Borne</Button>
                        </ButtonToolbar>
                        {/*  -------------------------- Call up the selected page ------------------------------*/}

                        <div className="row mt-4 mb-0 justify-content-center">
                            <div className="col-lg-2">
                                <div className="form-control border-0">
                                    <p>Montant total</p>
                                </div>
                            </div>
                            <div className="col-lg-1">
                                <div className="form-control border-0">
                                    <p>Moyenne</p>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="form-control border-0">
                                    <p>Donateurs</p>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="form-control border-0">
                                    <p>Répartition par dispositif</p>
                                </div>
                            </div>
                        </div>

                        <div className="row mb-0 mt-0 justify-content-center text-center">
                            <div className="col-lg-2">
                                <div className="form-control form-control-lg shadow">
                                    <h4>
                                        <NumberFormat value={this.state.MontantTotal.toFixed(0)}
                                                      displayType={'text'}
                                                      thousandSeparator={' '}
                                                      decimalSeparator={','}
                                                      suffix={' €'}
                                        />
                                    </h4>
                                </div>
                            </div>
                            <div className="col-lg-1">
                                <div className="form-control form-control-lg shadow">
                                    <h4>
                                        <NumberFormat value={this.state.DonMoyen.toFixed(0)}
                                                      displayType={'text'}
                                                      thousandSeparator={' '}
                                                      decimalSeparator={','}
                                                      suffix={' €'}
                                        />
                                    </h4>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="form-control form-control-lg shadow">
                                    <h4>
                                        <NumberFormat value={this.state.TotalDon.toFixed(0)}
                                                      displayType={'text'}
                                                      thousandSeparator={' '}
                                                      decimalSeparator={','}
                                        />
                                    </h4>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="bar-progress shadow text-left">
                                    <p className="ml-3 mr-3 mb-0">
                                        <strong>60%</strong>
                                    </p>
                                    <MDBProgress className="ml-3 mr-3"
                                                 material value={60}
                                                 color="warning"
                                                 height="20px"
                                                 animated
                                    />
                                    <p className="ml-3 mr-3"><strong>Ensemble</strong></p>
                                </div>
                            </div>

                        </div>

                        <div className="row mb-5 mt-4 justify-content-center text-center">
                            <div className="col-lg-2">
                                <div className="form-control form-control-lg custom-gradient justify-content-xl-around shadow">
                                    <h4>Filtre projet</h4>
                                </div>
                            </div>
                        </div>

                    </header>

                    <main className="tab-content"
                         id="v-pills-tabContent">
                        <div className="tab-pane fade show active"
                             id="v-pills-acceuil"
                             role="tabpanel"
                             aria-labelledby="v-pills-acceuil-tab">

{/* ----------------------------------------------------- Dynamic graphics ----------------------------------------- */}
                            < div className = "card-deck " >

                                <div className="card container-fluid">
                                    <div className="col-md-12 card-body card-graphic">
                                        <h6 className="card-title">
                                            Répartition des dons en nombre et montant
                                        </h6>
                                        <ResponsiveContainer>
                                            <AreaChart
                                                data={data}
                                                margin={{
                                                    top: 10, right: 30, left: 0, bottom: 35,
                                                }}
                                            >
                                                <defs>
                                                    <linearGradient id="colorMontant" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="100%" stopColor="#FFEADC" stopOpacity={1}/>
                                                        <stop offset="100%" stopColor="#FFEADC" stopOpacity={1}/>
                                                    </linearGradient>
                                                    <linearGradient id="colorNombre" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="100%" stopColor="#FFC491" stopOpacity={1}/>
                                                        <stop offset="100%" stopColor="#FFC491" stopOpacity={1}/>
                                                    </linearGradient>

                                                </defs>
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="name"
                                                       height={60}
                                                       tick={<CustomizedAxisTick />}
                                                />
                                                <YAxis />
                                                <Tooltip />
                                                <Area type="monotone"
                                                      dataKey="Montant"
                                                      stroke="#FFEADC"
                                                      fillOpacity={1}
                                                      fill="url(#colorMontant)" />
                                                <Area type="monotone"
                                                      dataKey="Nombre"
                                                      stroke="#FFC491"
                                                      fillOpacity={1}
                                                      fill="url(#colorNombre)" />
                                            </AreaChart>
                                        </ResponsiveContainer>

                                    </div>

                                </div>

                            </div>
{/* ----------------------------------------------------- Dynamic graphics ----------------------------------------- */}


                    {/* --------------      Liste des projets à intégrer ici       -------------- */}


{/* ---------------------------- (END) Displays the Dashboard to the right of the navigation bar --------------------- */}

                    </div>
                </main>
            </div>
            </div>
        </div>

        );

    }
}

export default Mobile
