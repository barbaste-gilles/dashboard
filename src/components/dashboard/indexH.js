import React, { PureComponent } from 'react';
import {Button, ButtonGroup, ButtonToolbar, Dropdown} from 'react-bootstrap';
import { MDBProgress } from 'mdbreact';
import NumberFormat from 'react-number-format';
// import Help from '../../assets/Help.png'
import {
    AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
// ----------------------------------- Data + Export Excel ------------------------------------------------------------
import ReactExport from "react-export-excel";
import Sidebar from "../sidebar";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const multiDataSet = [
    {
        columns: ["Projet", "Date", "Montant", "Email"],
        data: [
            [
                {value: "Handidanse"},
                // {value: "LOKA'Mobile"},
                {value: "03/09/2019"},
                {value: "10€"},
                {value: ""},
            ],
        ],
    }
];

// ----------------------------------------- Data + Dynamic graphics  -------------------------------------------------

const data = [
    {
        name: 'Sept. 2019', Nombre: 71, Montant: 853,
    },
    {
        name: 'Oct. 2019', Nombre: 164, Montant: 2617,
    },
    {
        name: 'Nov. 2019', Nombre: 63, Montant: 882,
    },
    {
        name: 'Déc. 2019', Nombre: 91, Montant: 2273,
    },
    {
        name: 'Janv. 2020', Nombre: 81, Montant: 1377,
    },
    {
        name: 'Fev. 2020', Nombre: 59, Montant: 585,
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

class DashboardH extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            MontantTotal: 11456,
            DonMoyen: 11456/937,
            TotalDon: 937,
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

{/* ----------------------------------------- Vertical navigation bar -----------------------------------------------*/}

            <div className="row">

                <Sidebar />
{/* ---------------------------------------- End Vertical navigation bar ------------------------------------------- */}

{/* -------------------------------- Displays the Dashboard to the right of the navigation bar --------------------- */}

                <div className="col-md-9">

                    <header>

                        {/*  -------------------------- Call up the selected page ------------------------------*/}
                        <div className="row">

                            <div className="col-sm-10">
                                <ButtonToolbar className="justify-content-center">

                                    <Dropdown as={ButtonGroup}>
                                        <Button variant="outline-warning"
                                                size="sm"
                                        >
                                            Projets
                                        </Button>
                                        <Dropdown.Toggle split variant="warning"
                                                         id="dropdown-custom-2" />
                                        <Dropdown.Menu className="super-colors">
                                            <Dropdown.Item href="/dashboard"
                                                           eventKey="1"
                                            >
                                                Tous
                                            </Dropdown.Item>
                                            <Dropdown.Item href="/dashboardBS"
                                                           eventKey="2"
                                            >
                                                Biscuits solidaire
                                            </Dropdown.Item>
                                            <Dropdown.Item href="/dashboardH"
                                                           eventKey="3"
                                                           active
                                            >
                                                Handidanse
                                            </Dropdown.Item>
                                            <Dropdown.Item href="/DashboardPA"
                                                           eventKey="4"
                                            >
                                                Plantations arbres
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <div className="col-sm-1 h4-custom2">
                                    </div>
                                    <Button href="/dashboardH"
                                            variant="outline-warning"
                                            size="sm"
                                            active
                                    >
                                        <h5>
                                            Handidanse
                                        </h5>
                                    </Button>

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
                                    <p>Répartition par projet</p>
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
                                        <strong>45%</strong>
                                    </p>
                                    <MDBProgress className="ml-3 mr-3"
                                                 material value={45}
                                                 color="warning"
                                                 height="20px"
                                                 animated
                                    />
                                    <p className="ml-3 mr-3"><strong>Ensemble</strong></p>
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
                            < div className = "card-deck" >

                                <div className="card container-fluid border-0 shadow-none">
                                    <div className="col-sm-12 card-body card-graphic">

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
                                                      stroke="#FFC491"
                                                      fillOpacity={1}
                                                      fill="url(#colorMontant)" />

                                                <Area yAxisId="right"
                                                      type="monotone"
                                                      dataKey="Nombre"
                                                      stroke="#FFA42B"
                                                      fillOpacity={1}
                                                      fill="url(#colorNombre)" />
                                            </AreaChart>
                                        </ResponsiveContainer>

                                    </div>

                                </div>

                            </div>
{/* -----------------------------------------------  End Dynamic graphics ----------------------------------------- */}


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
                                            <td>Handidanse</td>
                                            {/*<td>Loka'Mobile</td>*/}
                                            <td>03/09/2019</td>
                                            <td>10€</td>
                                            <td> </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
{/* ------------------------------------  End - Liste des donateurs récents   -------------------------------------- */}
                    </div>
                </main>
            </div>
{/* ---------------------------- (END) Displays the Dashboard to the right of the navigation bar --------------------- */}
            </div>
        </div>

        );

    }
}

export default DashboardH
