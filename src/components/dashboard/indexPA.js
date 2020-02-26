import React, { PureComponent } from 'react';
import {Button, ButtonGroup, ButtonToolbar, Dropdown} from 'react-bootstrap';
import { MDBProgress } from 'mdbreact';
import NumberFormat from 'react-number-format';
import Parameter from '../../assets/parameter-test.png';
// import Help from '../../assets/Help.png'
import logohandidanse from "../../assets/Logo_Handidanse.png";
import Logout from "../../assets/Logout.png";
import logo from "../../assets/Logo.png";
import {
    AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
// ----------------------------------- Data + Export Excel ------------------------------------------------------------
import ReactExport from "react-export-excel";

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
                {value: "Plantations arbres", style: {fill: {fgColor: {rgb: "FFEADC"}}}},
                {value: "Loka'Borne", style: {fill: {fgColor: {rgb: "FFEADC"}}}},
                {value: "02/10/2019", style: {fill: {fgColor: {rgb: "FFEADC"}}}},
                {value: "2€", style: {fill: {fgColor: {rgb: "FFEADC"}}}},
                {value: "doom.elegant@hell.com", style: {fill: {fgColor: {rgb: "FFEADC"}}}},
            ],
        ],
    }
];

// ----------------------------------------- Data + Dynamic graphics  -------------------------------------------------

const data = [
    // {
    //     name: 'Mars 2019', Nombre: 87, Montant: 350,
    // },
    // {
    //     name: 'Avr. 2019', Nombre: 52, Montant: 525,
    // },
    // {
    //     name: 'Mai 2019', Nombre: 24, Montant: 245,
    // },
    // {
    //     name: 'Juin 2019', Nombre: 35, Montant: 280,
    // },
    // {
    //     name: 'Juil. 2019', Nombre: 117, Montant: 818,
    // },
    // {
    //     name: 'Août 2019', Nombre: 1, Montant: 21,
    // },
    {
        name: 'Sept. 2019', Nombre: 55, Montant: 664,
    },
    {
        name: 'Oct. 2019', Nombre: 127, Montant: 2036,
    },
    {
        name: 'Nov. 2019', Nombre: 49, Montant: 686,
    },
    {
        name: 'Déc. 2019', Nombre: 71, Montant: 1767,
    },
    {
        name: 'Janv. 2020', Nombre: 63, Montant: 1071,
    },
    {
        name: 'Fev. 2020', Nombre: 45, Montant: 455,
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

class DashboardPA extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            MontantTotal: 8910,
            DonMoyen: 8910/729,
            TotalDon: 729,
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
                                active
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
                            {/*Button help disable*/}

                            {/*<div className="flotte">*/}
                            {/*<img*/}
                            {/*    className="help center-block"*/}
                            {/*    src={Help}*/}
                            {/*    alt=" Aide"*/}

                            {/*/>*/}
                            {/*</div>*/}
                            {/*<a className="link-custom text-custom"*/}
                            {/*   id="v-pills-profil-tab"*/}
                            {/*   data-toggle="pill"*/}
                            {/*   href="#v-pills-profil"*/}
                            {/*   role="tab"*/}
                            {/*   aria-controls="v-pills-profil"*/}
                            {/*   aria-selected="false"*/}
                            {/*>*/}

                            {/*<h5><strong>Aide</strong></h5>*/}
                            {/*    <p className="p-custom">FAQ et assistance</p>*/}
                            {/*</a>*/}

                            {/*End Button help disable*/}
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
                                    Tous les projets
                                </h4>
                            </div>
                            <div className="col-sm-10">
                                <ButtonToolbar className="justify-content-center">
                                    <Button href="/dashboard"
                                            variant="outline-warning"
                                            size="sm"
                                            active
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
                                    >
                                        LOKA'Borne
                                    </Button>

                                    <div className="col-sm-1">
                                    </div>
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
                                            <Dropdown.Item href="/DashboardH"
                                                           eventKey="3"
                                            >
                                                Handidanse
                                            </Dropdown.Item>
                                            <Dropdown.Item href="/DashboardPA"
                                                           eventKey="4"
                                                           active
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
                                        <strong>35%</strong>
                                    </p>
                                    <MDBProgress className="ml-3 mr-3"
                                                 material value={35}
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
                                                {/*<YAxis />*/}
                                                {/*<YAxis yAxisId="left" />*/}
                                                <YAxis yAxisId="right"
                                                       orientation="right" />
                                                <Tooltip />
                                                <Legend onMouseEnter={this.handleMouseEnter}
                                                        onMouseLeave={this.handleMouseLeave} />

                                                {/*<Line yAxisId="left" type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />*/}
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
                                        <tr className="line-custom">
                                            <td>Plantations arbres</td>
                                            <td>Loka'Borne</td>
                                            <td>02/10/2019</td>
                                            <td>2€</td>
                                            <td>doom.elegant@hell.com</td>
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

export default DashboardPA
