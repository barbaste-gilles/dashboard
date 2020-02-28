import React from 'react';
// import Help from '../../assets/Help.png'

// ----------------------------------- Data + Export Excel ------------------------------------------------------------
import ReactExport from "react-export-excel";
import Sidebar from "../sidebar";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

// ----------------------------------------- multiDataSet ------------------------------------------------
const multiDataSet = [
    {
        columns: ["Bénéficiaire", "Type de payment", "Date", "Montant", "Email"],
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

class Payment extends React.Component {

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

                    <Sidebar />
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

export default Payment
