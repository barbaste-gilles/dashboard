import React, { PureComponent } from 'react';
import repartitiondon from '../../assets/repartition_don.png';
import logohandidanse from '../../assets/Logo_Handidanse.png';
import amount from '../../assets/amount.png';
import don from '../../assets/don.png';
import donation from '../../assets/donmoyen.png';
import moyenne from '../../assets/moyenne.png';
import recufiscal from '../../assets/recufiscal.png';
import Navigation from "../navpage/index";
import NumberFormat from 'react-number-format';

// ----------------------------------------- Data + Dynamic graphics  -------------------------------------------------

import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'Mars 2019', Nombre: 250, Montant: 1000, Cumul: 1000,
    },
    {
        name: 'Avr. 2019', Nombre: 150, Montant: 1500, Cumul: 2500,
    },
    {
        name: 'Mai 2019', Nombre: 70, Montant: 700, Cumul: 3200,
    },
    {
        name: 'Juin 2019', Nombre: 100, Montant: 800, Cumul: 4000,
    },
    {
        name: 'Juil. 2019', Nombre: 334, Montant: 2338, Cumul: 6338,
    },
    {
        name: 'Août 2019', Nombre: 4, Montant: 60, Cumul: 6368,
    },
    {
        name: 'Sept. 2019', Nombre: 158, Montant: 1896, Cumul: 8264,
    },
    {
        name: 'Oct. 2019', Nombre: 364, Montant: 5816, Cumul: 14088,
    },
    {
        name: 'Nov. 2019', Nombre: 140, Montant: 1960, Cumul: 16048,
    },
    {
        name: 'Déc. 2019', Nombre: 202, Montant: 5050, Cumul:21098,
    },
    {
        name: 'Janv. 2020', Nombre: 180, Montant: 3060, Cumul: 24158,
    },
    {
        name: 'Fev. 2020', Nombre: 130, Montant: 1300, Cumul: 25458,
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

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            MontantTotal: 25458,
            DonMoyen: 25458/2082,
            TotalDon: 2082,
        };
    }

    render() {

        return (
        <div>
            {/* Navigation bars */}

{/* ----------------------------------------- Horizontal navigation bar ---------------------------------------------*/}

            < Navigation />


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
                    <div className="tab-content"
                         id="v-pills-tabContent">
                        <div className="tab-pane fade show active"
                             id="v-pills-acceuil"
                             role="tabpanel"
                             aria-labelledby="v-pills-acceuil-tab">

                            < div className = "card-deck container-fluid text-center" >

                                < div className = "card container-fluid" >
                                    < div className = "card-body text-center" >
                                        <h6 className="card-title">
                                            Montant global
                                        </h6>
                                        <h6 className="card-header text-dark" >
                                            {/* --------------- rounded to the nearest euro --------------------- */}
                                            <NumberFormat value={this.state.MontantTotal.toFixed(0)}
                                                          displayType={'text'}
                                                          thousandSeparator={' '}
                                                          decimalSeparator={','}
                                                          suffix={' €'}
                                            />
                                        </h6>
                                        <img
                                            className="donBis img-fluid center-block"
                                            src={amount}
                                            alt="Montant global"
                                        />
                                    </div>
                                </div>

                                <div className="card container-fluid">
                                    <div className="card-body text-center">
                                        <h6 className="card-title">
                                            Don Moyen
                                        </h6>
                                        <h6 className="card-header text-dark" >
                                            {/* --------------- rounded to the nearest euro --------------------- */}
                                            <NumberFormat value={this.state.DonMoyen.toFixed(0)}
                                                          displayType={'text'}
                                                          thousandSeparator={' '}
                                                          decimalSeparator={','}
                                                          suffix={' €'}
                                            />
                                        </h6>
                                        <img
                                            className="donBis img-fluid center-block"
                                            src={donation}
                                            alt="Don moyen"
                                        />
                                    </div>
                                </div>

                                <div className="card container-fluid">
                                    <div className="card-body text-center">
                                        <h6 className="card-title">
                                            Nombre de dons
                                        </h6>
                                        <h6 className="card-header text-dark" >
                                            {/* --------------- rounded to the nearest euro --------------------- */}
                                            <NumberFormat value={this.state.TotalDon.toFixed(0)}
                                                          displayType={'text'}
                                                          thousandSeparator={' '}
                                                          decimalSeparator={','}
                                            />
                                        </h6>
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
                                                    <linearGradient id="colorNombre" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                                                    </linearGradient>
                                                    <linearGradient id="colorMontant" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8}/>
                                                        <stop offset="95%" stopColor="#ffc658" stopOpacity={0}/>
                                                    </linearGradient>
                                                    <linearGradient id="colorCumul" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
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
                                                      dataKey="Nombre"
                                                      stroke="#82ca9d"
                                                      fillOpacity={1}
                                                      fill="url(#colorNombre)" />
                                                <Area type="monotone"
                                                      dataKey="Montant"
                                                      stroke="#ffc658"
                                                      fillOpacity={1}
                                                      fill="url(#colorMontant)" />
                                                <Area type="monotone"
                                                      dataKey="Cumul"
                                                      stroke="#8884d8"
                                                      fillOpacity={1}
                                                      fill="url(#colorCumul)" />
                                            </AreaChart>
                                        </ResponsiveContainer>

                                    </div>

                                </div>

                            </div>
{/* ----------------------------------------------------- Dynamic graphics ----------------------------------------- */}

{/* ---------------------------- (END) Displays the Dashboard to the right of the navigation bar --------------------- */}

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
