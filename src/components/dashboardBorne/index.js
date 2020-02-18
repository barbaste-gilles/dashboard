import React, { PureComponent } from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import { MDBProgress } from 'mdbreact';
import NumberFormat from 'react-number-format';
import logohandidanse from '../../assets/Logo_Handidanse.png';
import IconGrey from "../../assets/circle-grey.png";

// ----------------------------------------- Data + Dynamic graphics  -------------------------------------------------

import {
    AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import Parameter from "../../assets/parameter-test.png";
import Help from "../../assets/Help.png";

const data = [
    {
        name: 'Mars 2019', Nombre: 200, Montant: 750,
    },
    {
        name: 'Avr. 2019', Nombre: 60, Montant: 750,
    },
    {
        name: 'Mai 2019', Nombre: 38, Montant: 350,
    },
    {
        name: 'Juin 2019', Nombre: 40, Montant: 400,
    },
    {
        name: 'Juil. 2019', Nombre: 144, Montant: 1088,
    },
    {
        name: 'Août 2019', Nombre: 1, Montant: 30,
    },
    {
        name: 'Sept. 2019', Nombre: 64, Montant: 948,
    },
    {
        name: 'Oct. 2019', Nombre: 154, Montant: 2356,
    },
    {
        name: 'Nov. 2019', Nombre: 56, Montant: 960,
    },
    {
        name: 'Déc. 2019', Nombre: 120, Montant: 2450,
    },
    {
        name: 'Janv. 2020', Nombre: 90, Montant: 1530,
    },
    {
        name: 'Fev. 2020', Nombre: 42, Montant: 650,
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

class Borne extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            MontantTotal: 10183,
            DonMoyen: 10183/1041,
            TotalDon: 1041,
        };
    }

    state = {
        opacity: {
            uv: 1,
            pv: 1,
        },
    };

    handleMouseEnter = (o) => {
        const { dataKey } = o;
        const { opacity } = this.state;

        this.setState({
            opacity: { ...opacity, [dataKey]: 0.5 },
        });
    }

    handleMouseLeave = (o) => {
        const { dataKey } = o;
        const { opacity } = this.state;

        this.setState({
            opacity: { ...opacity, [dataKey]: 1 },
        });
    }

    render() {

        // const { opacity } = this.state;

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
                                    active
                            >
                                <strong>Général</strong>
                            </Button>
                            <Button className="link-custom round" href="/dashboard"
                                    variant="outline-warning"
                                    type="submit"
                                    size="lg"
                                    color="#003135"
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

                    <div className="col-md-9">

                        <header>

                            {/*  -------------------------- Call up the selected page ------------------------------*/}
                            <ButtonToolbar className="justify-content-center">
                                <Button href="/dashboard" variant="outline-warning" type="submit" size="lg">Ensemble</Button>
                                <Button href="/dashboardMobile" variant="outline-warning" type="submit" size="lg">LOKA'Mobile</Button>
                                <Button href="/dashboardBorne" variant="outline-warning" type="submit" size="lg" active>LOKA'Borne</Button>
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
                                            <strong>40%</strong>
                                        </p>
                                        <MDBProgress className="ml-3 mr-3"
                                                     material value={40}
                                                     color="warning"
                                                     height="20px"
                                                     animated
                                        />
                                        <p className="ml-3 mr-3"><strong>LOKA'Borne</strong></p>
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
                                                    <CartesianGrid strokeDasharray="0 3" />
                                                    <XAxis dataKey="name"
                                                           height={60}
                                                           tick={<CustomizedAxisTick />}
                                                    />
                                                    <YAxis yAxisId="right" orientation="right" />
                                                    <Tooltip />
                                                    <Legend onMouseEnter={this.handleMouseEnter}
                                                            onMouseLeave={this.handleMouseLeave} />
                                                    <Line yAxisId="right" type="monotone" stroke="#003135" />
                                                    <Area yAxisId="right"
                                                          type="monotone"
                                                          dataKey="Montant"
                                                          stroke="#FFEADC"
                                                          fillOpacity={1}
                                                          fill="url(#colorMontant)" />
                                                    <Area yAxisId="right"
                                                          type="monotone"
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

                                {/* ------------------------------------     Liste des donateurs récents      -------------------------------------- */}

                                <div className="container-fluid text-center">
                                    <h3 className="h3-custom">Donateurs récents</h3>
                                    <table className="table table-responsive-lg shadow justify-content-around">
                                        <tbody>
                                        <tr className="line-custom">
                                            <td>Plantations arbres</td>
                                            <td><img className="IconGrey" src={IconGrey} alt="icone gris"/></td>
                                            <td>Loka'Borne</td>
                                            <td>02/10/2019</td>
                                            <td>2€</td>
                                            <td>doom.elegant@hell.com</td>
                                        </tr>
                                        <tr className="line2-custom">
                                            <td>Biscuits solidaire</td>
                                            <td><img className="IconGrey" src={IconGrey} alt="icone gris"/></td>
                                            <td>Loka'Borne</td>
                                            <td>20/09/2019</td>
                                            <td>5€</td>
                                            <td>limo.zenit@gmail.com</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </main>
                    </div>
                </div>
            </div>

        );

    }
}

export default Borne
