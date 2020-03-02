import React from "react";
import logohandidanse from "../../assets/Logo_Handidanse.png";
import hedge from "../../assets/haie.png";
import plantation from "../../assets/Plantation.jpg"
import Sidebar from "../sidebar";
import Gauge from "../gauge";

class DetailProject extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div>

                {/* ----------------------------------------- Horizontal navigation bar ---------------------------------------------*/}

                {/*< Navigation />*/}


                {/* ----------------------------------------- Vertical navigation bar -----------------------------------------------*/}

                <div className="row">

                    <Sidebar/>
                    {/* ---------------------------------------- End Vertical navigation bar ------------------------------------------- */}

                    {/* -------------------------------- Displays the Dashboard to the right of the navigation bar --------------------- */}

                    <div className="col-md-9">

                        <main>

                            <div className="card card1 container-fluid text-center mt-3 border-0 shadow-sm">

                                <div className="row mb-0 mt-0 justify-content-center text-center border-0 shadow-sm">
                                    <div className="col-sm-12 card-body">
                                        <img
                                            className="logohandidanse2 center-block"
                                            src={logohandidanse}
                                            alt="Logo Handidanse"
                                        />
                                        <h6 className="h5-custom">Nom du projet</h6>
                                        <div className="h5-custom2 mx-auto">
                                            <h5>Participer à l'aventure d'Handidanse</h5>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="container-fluid text-center">
                                <strong><h4 className="h4-custom3">Jauge de don</h4></strong>
                                <div className="mx-auto">
                                    <h5>Cliquez sur les points puis changer<br/>la valeur du don et le message du
                                        bénéfice</h5>
                                </div>
                                <div className="gauge-custom mx-auto">
                                    <h5>La JAUGE</h5>
                                    < Gauge />
                                </div>
                                <div className="row mx-auto mb-0 mt-0 justify-content-center text-center">
                                    <div className="the-gift">
                                        <strong><h1>3</h1></strong>
                                    </div>
                                    <div className="the-gift2">
                                        <strong><h1>€</h1></strong>
                                    </div>
                                </div>
                                <div className="the-gift3 mx-auto">
                                    <p>Doit être suppérieur au palier précédent</p>
                                </div>
                                <h6 className="h5-custom3">Bénéfice du montant</h6>
                                <div className="h5-custom2 mx-auto">
                                    <h5>Une danse de plus</h5>
                                </div>
                            </div>

                            <div className="card card2 container-fluid text-center mt-5 border-0 shadow-sm">

                                <div className="row mb-0 mt-0 justify-content-center text-center border-0 shadow-sm">
                                    <div className="col-sm-12 card-body card-custom3">
                                        <strong>
                                            <h4 className="h4-custom3">Présentation rapide</h4>
                                        </strong>
                                        <div className="mx-auto">
                                            <h5>Décrivez brièvement qui vous êtes<br/>et quel est votre objectif
                                                principal</h5>
                                        </div>
                                        <div className="position-custom position-relative">
                                            <div className="p-custom4 mx-auto my-auto position-absolute">
                                            </div>
                                            <div className="p-custom3 mx-auto my-auto position-absolute">
                                                <p className="p-custom5">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi in
                                                    laborum
                                                    nobis sed voluptates. Atque cum fuga nobis quod voluptatibus.
                                                    Deleniti
                                                    dolorem doloribus dolorum, nemo pariatur tempora. Inventore, iure,
                                                    voluptatem.
                                                    Deleniti facilis id libero neque non obcaecati pariatur repellat
                                                    totam,
                                                    ullam vero! Excepturi, harum, odio. At, blanditiis earum esse est id
                                                    illum
                                                    quibusdam quod! Dolorem nihil nulla obcaecati porro ut.
                                                    Consectetur hic labore laudantium maiores rem similique veniam
                                                    veritatis! A
                                                    ad asperiores beatae deleniti doloribus, error ex explicabo
                                                    laudantium
                                                    magnam maiores nisi nulla odit pariatur quo reiciendis, unde vitae
                                                    voluptate.
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.

                                                </p>
                                            </div>
                                        </div>
                                        <div className="the-gift4 mx-auto my-auto position-absolute">
                                            <p>300 caractères maximum</p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="container-fluid text-center">
                                <strong><h4 className="h4-custom3">Présentation projet</h4></strong>
                                <div className="div-custom mx-auto">
                                    <h5>Ajoutez une image représentant au mieux votre objectif<br/>et décrivez en trois
                                        lignes vos moyens de l'atteindre</h5>
                                </div>

                                <div className="position-relative">
                                    <div className="img-custom position-absolute">
                                    </div>
                                    <div className="position-custom2 position-absolute">
                                        <h5 className="h5-custom4">Loka'Mobile</h5>
                                        <hr className="highlighted"/>
                                    </div>
                                    <div className="img-custom2 position-absolute">
                                        <img className="hedge-custom"
                                             src={hedge}
                                             alt="Haie"/>
                                    </div>
                                    <div className="position-custom3 position-absolute">
                                        <h5 className="h5-custom4">Loka'Borne</h5>
                                        <hr className="highlighted2"/>
                                    </div>
                                    <div className="div-custom2 position-absolute shadow-sm">
                                        <p>Ajouter ou changer photo</p>
                                    </div>
                                    <div className="img-custom3 position-absolute">
                                        <img className="plantation"
                                             src={plantation}
                                             alt="Plantation de Haie"/>
                                    </div>
                                    <div className="div-custom3 position-absolute shadow-sm">
                                        <p>Ajouter ou changer photo</p>
                                    </div>
                                </div>
                            </div>

                            < div className="container-fluid text-center position-custm4">
                                <div className="row mx-auto mb-0 mt-0 justify-content-center text-center">
                                    <div className="the-gift5">
                                        <strong>1</strong>
                                    </div>
                                    <div className="the-gift6">
                                        <p className="p-custom5">Protéger les cultures contre les vents séchants grâce à un réseau de haies et des plants.
                                        </p>
                                    </div>
                                    <div className="the-gift5">
                                        <strong>2</strong>
                                    </div>
                                    <div className="the-gift6">
                                        <p className="p-custom5">Préserver la fertilité des sols en construisant une haie à proximité d'une future rizière.
                                        </p>
                                    </div>
                                    <div className="the-gift5">
                                        <strong>3</strong>
                                    </div>
                                    <div className="the-gift6">
                                        <p className="p-custom5">Continuer la plantation de 3000 plantes entamée en 2018.
                                        </p>
                                    </div>
                                </div>

                                <div className="row mx-auto mb-0 mt-0 justify-content-center text-center">
                                    <div className="the-gift5">
                                        <strong> </strong>
                                    </div>
                                    <div className="the-gift7">
                                        <p>100 caractères maximum</p>
                                    </div>
                                    <div className="the-gift5">
                                    <strong> </strong>
                                </div>
                                    <div className="the-gift7">
                                        <p>100 caractères maximum</p>
                                    </div>
                                    <div className="the-gift5">
                                        <strong> </strong>
                                    </div>
                                    <div className="the-gift7">
                                        <p>100 caractères maximum</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mx-auto mb-0 mt-0 justify-content-center text-center">
                                <button className="btn-custom">
                                    <p>Sauvegarder</p>
                                </button>
                            </div>


                        </main>


                    </div>

                    {/* ---------------------------- (End) Displays the Dashboard to the right of the navigation bar --------------------- */}
                </div>
            </div>

        );

    }
}

export default DetailProject