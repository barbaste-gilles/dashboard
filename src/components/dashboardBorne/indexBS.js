import React, { PureComponent } from 'react';
import {Button, ButtonGroup, ButtonToolbar, Dropdown} from 'react-bootstrap';
import { MDBProgress } from 'mdbreact';
import NumberFormat from 'react-number-format';
// import Help from "../../assets/Help.png";
import {
    AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
// ----------------------------------- Data + Export Excel ------------------------------------------------------------
import ReactExport from "react-export-excel";
import Sidebar from "../sidebar";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
// const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

// ----------------------------------------- DataSet ------------------------------------------------
// const dataSet = [
//     {
//         project: "Plantations arbres",
//         collect: "Loka'Borne",
//         date: "02/10/2019",
//         amount: "2€",
//         email: "doom.elegant@hell.com",
//     },
//     {
//         project: "Biscuits solidaire",
//         collect: "Loka'Mobile",
//         date: "01/10/2019",
//         amount: "20€",
//         email: "",
//     },
//     {
//         project: "Biscuits solidaire",
//         collect: "Loka'Borne",
//         date: "20/09/2019",
//         amount: "5€",
//         email: "limo.zenit@gmail.com",
//     },
//     {
//         project: "Handidanse",
//         collect: "Loka'Mobile",
//         date: "03/09/2019",
//         amount: "10€",
//         email: "",
//     },
// ];
// ----------------------------------------- End DataSet ------------------------------------------------
const multiDataSet = [
    {
        columns: ["Projet", "Collecteur", "Date", "Montant", "Email"],
        data: [
            [
                {value: "Biscuits solidaire", style: {fill: {fgColor: {rgb: "FFEADC"}}}},
                {value: "Loka'Borne", style: {fill: {fgColor: {rgb: "FFEADC"}}}},
                {value: "20/09/2019", style: {fill: {fgColor: {rgb: "FFEADC"}}}},
                {value: "5€", style: {fill: {fgColor: {rgb: "FFEADC"}}}},
                {value: "limo.zenit@gmail.com", style: {fill: {fgColor: {rgb: "FFEADC"}}}},
            ],
        ],
    }
];

// ----------------------------------------- Data + Dynamic graphics  -------------------------------------------------

const data = [
    // {
    //     name: 'Mars 2019', Nombre: 40, Montant: 150,
    // },
    // {
    //     name: 'Avr. 2019', Nombre: 12, Montant: 150,
    // },
    // {
    //     name: 'Mai 2019', Nombre: 8, Montant: 70,
    // },
    // {
    //     name: 'Juin 2019', Nombre: 8, Montant: 80,
    // },
    // {
    //     name: 'Juil. 2019', Nombre: 29, Montant: 218,
    // },
    // {
    //     name: 'Août 2019', Nombre: 1, Montant: 6,
    // },
    {
        name: 'Sept. 2019', Nombre: 13, Montant: 190,
    },
    {
        name: 'Oct. 2019', Nombre: 31, Montant: 471,
    },
    {
        name: 'Nov. 2019', Nombre: 11, Montant: 192,
    },
    {
        name: 'Déc. 2019', Nombre: 24, Montant: 490,
    },
    {
        name: 'Janv. 2020', Nombre: 18, Montant: 306,
    },
    {
        name: 'Fev. 2020', Nombre: 8, Montant: 130,
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

class BorneBS extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            MontantTotal: 2037,
            DonMoyen: 2037/208,
            TotalDon: 208,
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

        return (
            <div>

{/* ----------------------------------------- Horizontal navigation bar ---------------------------------------------*/}

                {/*< Navigation />*/}


{/* ----------------------------------------- Vertical navigation bar -----------------------------------------------*/}

                <div className="row">

                    <Sidebar />
{/* ---------------------------------------- End Vertical navigation bar ------------------------------------------- */}

{/* -------------------------------- Displays the Dashboard to the right of the navigation bar --------------------- */}

                    <div className="col-md-9">

                        <header>

                            {/*<div className="row mb-5 mt-4 justify-content-center text-center">*/}
                            {/*    <div className="col-lg-2">*/}
                            {/*        <div className="form-control form-control-lg custom-gradient justify-content-xl-around shadow">*/}
                            {/*            <h4>Filtre projet</h4>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            {/*  -------------------------- Call up the selected page ------------------------------*/}
                            <div className="row">
                                <div className="col-sm-10 text-center h4-custom2">
                                    <h4>
                                        Biscuits solidaire
                                    </h4>
                                </div>
                                <div className="col-sm-10">
                                    <ButtonToolbar className="justify-content-center">
                                        <Button href="/dashboard"
                                                variant="outline-warning"
                                                size="sm"
                                        >
                                            Ensemble
                                        </Button>
                                        <Button href="/dashboardMobile"
                                                variant="outline-warning"
                                                size="sm"
                                        >
                                            LOKA'Mobile
                                        </Button>
                                        <Button href="/dashboardBorne"
                                                variant="outline-warning"
                                                size="sm"
                                                active>
                                            LOKA'Borne</Button>

                                        <div className="col-sm-1">
                                        </div>
                                        <Dropdown as={ButtonGroup}>
                                            <Button variant="outline-warning"
                                                    size="sm"
                                            >
                                                Projets
                                            </Button>
                                            <Dropdown.Toggle split variant="warning"
                                                             id="dropdown-custom-2"
                                            />
                                            <Dropdown.Menu className="super-colors">
                                                <Dropdown.Item href="/dashboardBorne"
                                                               eventKey="1"
                                                >
                                                    Tous
                                                </Dropdown.Item>
                                                <Dropdown.Item href="/dashboardBorneBS"
                                                               eventKey="2"
                                                               active
                                                >
                                                    Biscuits solidaire
                                                </Dropdown.Item>
                                                <Dropdown.Item href="/dashboardBorneH"
                                                               eventKey="3"
                                                >
                                                    Handidanse
                                                </Dropdown.Item>
                                                <Dropdown.Item href="/dashboardBornePA"
                                                               eventKey="4"
                                                >
                                                    Plantations arbres
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                    </ButtonToolbar>
                                </div>
                            </div>
                            {/*  -------------------------- End Call up the selected page ------------------------------*/}

                            <div className="row mt-4 mb-0 justify-content-center text-center">
                                <div className="col-sm-1">
                                </div>
                                <div className="col-sm-2">
                                    <div className="form-control border-0">
                                        <p>Montant total</p>
                                    </div>
                                </div>
                                <div className="col-sm-2">
                                    <div className="form-control border-0">
                                        <p className="p-custom2">Don moyen</p>
                                    </div>
                                </div>
                                <div className="col-sm-2">
                                    <div className="form-control border-0">
                                        <p>Donateurs</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="form-control border-0">
                                        <p>Répartition par dispositif</p>
                                    </div>
                                </div>
                                <div className="col-sm-2">
                                </div>
                            </div>

                            <div className="row mb-0 mt-0 justify-content-center text-center">
                                <div className="col-sm-1">
                                </div>
                                <div className="col-sm-2">
                                    <div className="form-control form-control-sm shadow">
                                        <h5>
                                            <NumberFormat value={this.state.MontantTotal.toFixed(0)}
                                                          displayType={'text'}
                                                          thousandSeparator={' '}
                                                          decimalSeparator={','}
                                                          suffix={'€'}
                                            />
                                        </h5>
                                    </div>
                                </div>
                                <div className="col-sm-2">
                                    <div className="form-control form-control-sm shadow">
                                        <h5>
                                            <NumberFormat value={this.state.DonMoyen.toFixed(0)}
                                                          displayType={'text'}
                                                          thousandSeparator={' '}
                                                          decimalSeparator={','}
                                                          suffix={'€'}
                                            />
                                        </h5>
                                    </div>
                                </div>
                                <div className="col-sm-2" >
                                    <div className="form-control form-control-sm shadow">
                                        <h5>
                                            <NumberFormat value={this.state.TotalDon.toFixed(0)}
                                                          displayType={'text'}
                                                          thousandSeparator={' '}
                                                          decimalSeparator={','}
                                            />
                                        </h5>
                                    </div>
                                </div>

                                <div className="col-sm-3">
                                    <div className="bar-progress shadow text-left">
                                        <p className="ml-3 mr-3 mb-0">
                                            <strong>8%</strong>
                                        </p>
                                        <MDBProgress className="ml-3 mr-3"
                                                     material value={8}
                                                     color="warning"
                                                     height="20px"
                                                     animated
                                        />
                                        <p className="ml-3 mr-3"><strong>LOKA'Borne</strong></p>
                                    </div>
                                </div>

                                <div className="col-sm-2">
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

                                    <div className="card container-fluid border-0 shadow-none">
                                        <div className="col-sm-12 card-body card-graphic">
                                            {/*<h6 className="card-title">*/}
                                            {/*    Répartition des dons en nombre et montant*/}
                                            {/*</h6>*/}
                                            <ResponsiveContainer>
                                                <AreaChart
                                                    data={data}
                                                    margin={{
                                                        top: 10, right: 30, left: 0, bottom: 35,
                                                    }}
                                                >
                                                    <defs>
                                                        <linearGradient id="colorMontant"
                                                                        x1="0"
                                                                        y1="0"
                                                                        x2="0"
                                                                        y2="1">
                                                            <stop offset="100%"
                                                                  stopColor="#FFEADC"
                                                                  stopOpacity={1}/>
                                                            <stop offset="100%"
                                                                  stopColor="#FFEADC"
                                                                  stopOpacity={1}/>
                                                        </linearGradient>
                                                        <linearGradient id="colorNombre"
                                                                        x1="0"
                                                                        y1="0"
                                                                        x2="0"
                                                                        y2="1">
                                                            <stop offset="100%"
                                                                  stopColor="#FFC491"
                                                                  stopOpacity={1}/>
                                                            <stop offset="100%"
                                                                  stopColor="#FFC491"
                                                                  stopOpacity={1}/>
                                                        </linearGradient>

                                                    </defs>
                                                    <CartesianGrid strokeDasharray="0 3" />
                                                    <XAxis dataKey="name"
                                                           height={60}
                                                           tick={<CustomizedAxisTick />}
                                                    />
                                                    <YAxis yAxisId="right"
                                                           orientation="right" />
                                                    <Tooltip />
                                                    <Legend onMouseEnter={this.handleMouseEnter}
                                                            onMouseLeave={this.handleMouseLeave} />
                                                    <Line yAxisId="right"
                                                          type="monotone"
                                                          stroke="#003135" />
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

                                    <div className="row mb-0 mt-0 justify-content-center text-center">
                                        <div className="col-sm-9">
                                            <h3 className="h3-custom">Donateurs récents</h3>
                                        </div>
                                        <div className="col-lg-3">

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
                                            <tr className="line2-custom">
                                                <td>Biscuits solidaire</td>
                                                <td>Loka'Borne</td>
                                                <td>20/09/2019</td>
                                                <td>5€</td>
                                                <td>limo.zenit@gmail.com</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </main>
                    </div>
                </div>
            </div>

        );

    }
}

export default BorneBS
