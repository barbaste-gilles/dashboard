 import logohandidanse from "../../assets/Logo_Handidanse.png";
 import Parameter from "../../assets/parameter-test.png";
 import Logout from "../../assets/Logout.png";
 import React from "react";
 import {Button} from 'react-bootstrap';

 class Sidebar extends React.Component {

     constructor(props) {
         super(props);
         this.state = {
             MontantTotal: 25458,
             DonMoyen: 25458 / 2082,
             TotalDon: 2082,
         };
     }

     render() {

         return (

             <div className="col-md-3 navbar-expand-xl">
                 <div
                     className="nav flex-column nav-pills bg-custom ml-0 my-1 navbar-collapse navbar-light navbar-height text-center"
                     id="v-pills-tab"
                     role="tablist"
                     aria-orientation="vertical">

                     {/*<a className="nav-link link-custom"*/}
                     {/*   id="v-pills-profil-tab"*/}
                     {/*   data-toggle="pill"*/}
                     {/*   href="/dashboard"*/}
                     {/*   role="tab"*/}
                     {/*   aria-controls="v-pills-profil"*/}
                     {/*   aria-selected="false">*/}
                     {/*    <img className="logo2 center-block"*/}
                     {/*         src={logo}*/}
                     {/*         alt="Logo Lokalero"*/}
                     {/*    />*/}
                     {/*</a>*/}
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
                     <Button className="link-custom round"
                             href="/dashboard"
                             variant="outline-warning"
                             type="submit"
                             size="sm"
                             color="#003135"
                             active
                     >
                         <strong>Revenus</strong>
                     </Button>
                     <Button className="link-custom round"
                             href="/project"
                             variant="outline-warning"
                             type="submit"
                             size="sm"
                             color="#003135"
                     >
                         <strong>Projets</strong>
                     </Button>
                     <Button className="link-custom round"
                             href="/payment"
                             variant="outline-warning"
                             type="submit"
                             size="sm"
                             color="#003135"
                     >
                         <strong>Versements</strong>
                     </Button>
                     <Button className="link-custom round"
                             href="/taxReceipts"
                             variant="outline-warning"
                             type="submit"
                             size="sm"
                             color="#003135"
                     >
                         <strong>Reçus fiscaux</strong>
                     </Button>
                     <br/><br/>
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
                            href="/parameters"
                            role="tab"
                            aria-controls="v-pills-profil"
                            aria-selected="false"
                         >
                             <strong>Paramétres</strong>
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
                             <strong>Déconnexion</strong>
                         </a>

                     </div>
                 </div>
             </div>
         );
     }
 }

 export default Sidebar