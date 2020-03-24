import React from "react";
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import web from '../../assets/web.png';
import cercle from '../../assets/cercle.png';
import bankingCard from '../../assets/banking-card.png';
// import logohandidanse from "../../assets/Logo_Handidanse.png";

import Sidebar from "../sidebar";

class Profil extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
        };
        this.uploadSingleFile = this.uploadSingleFile.bind(this);
    }

    uploadSingleFile(e) {
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
        })
    }

    // upload(e) {
    //     e.preventDefault()
    //     console.log(this.state.file)
    // }

    render() {

        let imgPreview;

        if (this.state.file) {
            imgPreview = <img src={this.state.file} width="130px" height="130px" alt='' />;
        }

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
                                        <div className="preview">
                                            {imgPreview}
                                        </div>
                                        <p className="p-custom7 mt-3 mx-auto">Ajouter ou changer d'image</p>
                                        <input type="file" onChange={this.uploadSingleFile}/>
                                        <h1 className="h5-custom mx-auto">NATURE 2050</h1>
                                    </div>
                                </div>

                            </div>

                            <div className="container-fluid text-center">
                                <strong><h3 className="h4-custom3">Biographie et contact</h3></strong>
                                <div className="mx-auto">
                                    <h5>Présentez-vous, votre engagement ainsi que<br/>vos moyens de communications</h5>
                                    <p>Vous pouvez partager ces informations sur web-app de don</p>
                                </div>

                                <div className="the-gift15  position-absolute">
                                    {/*Background blue*/}
                                </div>
                                <div className="the-gift16  position-absolute">
                                {/*Background blue*/}
                            </div>
                                <div className="form-group the-gift9 position-relative mx-auto mt-5 mb-5">
                                    <textarea
                                        className="form-control"
                                        id="Textarea15"
                                        rows="5"
                                        placeholder="Veuillez rédiger ici."
                                    >
                                    </textarea>
                                </div>

                                <div className="row div-custom4 mb-1">
                                    <p className="p-custom8 col-5 ml-4 my-auto"><strong>Lien Facebook</strong></p>
                                    <div className="col-1"></div>
                                    <p className="p-custom9 ml-4 my-auto"><strong>Lien instagram</strong></p>
                                </div>
                                <div className="row col-10 mx-auto my-auto">
                                    <div>
                                        <img className="liensociaux"
                                             src={facebook}
                                             alt="lien facebook"/>
                                    </div>
                                    <div className="p-custom6 the-gift14 mx-auto my-auto">
                                                    <textarea className="form-control rounded-0 p-custom6"
                                                              id="Textarea21"
                                                              rows="1"
                                                              placeholder="https://"
                                                    >
                                                    </textarea>
                                    </div>
                                    <div>
                                        <img className="liensociaux ml-5"
                                             src={instagram}
                                             alt="lien instagram"/>
                                    </div>
                                    <div className="p-custom6 the-gift14 mx-auto my-auto">
                                                    <textarea className="form-control rounded-0 p-custom6"
                                                              id="Textarea22"
                                                              rows="1"
                                                              placeholder="https://"
                                                    >
                                                    </textarea>
                                    </div>
                                </div>

                                <div className="row mt-2 mb-1">
                                    <p className="p-custom8 col-5 ml-4 my-auto"><strong>Lien Linkedin</strong></p>
                                    <div className="col-1"></div>
                                    <p className="p-custom9 ml-4 my-auto"><strong>Lien Web</strong></p>
                                </div>
                                <div className="row col-10 mx-auto my-auto">
                                    <div>
                                        <img className="liensociaux"
                                             src={linkedin}
                                             alt="lien linkedin"/>
                                    </div>
                                    <div className="p-custom6 the-gift14 mx-auto my-auto">
                                                    <textarea className="form-control rounded-0 p-custom6"
                                                              id="Textarea16"
                                                              rows="1"
                                                              placeholder="https://"
                                                    >
                                                    </textarea>
                                    </div>
                                    <div>
                                        <img className="liensociaux ml-5"
                                             src={web}
                                             alt="lien web"/>
                                    </div>
                                    <div className="p-custom6 the-gift14 mx-auto my-auto">
                                                    <textarea className="form-control rounded-0 p-custom6"
                                                              id="Textarea17"
                                                              rows="1"
                                                              placeholder="https://"
                                                    >
                                                    </textarea>
                                    </div>
                                </div>

                            </div>

                            <div className="card card2 container-fluid text-center mt-5 border-0 shadow-sm">

                                <div className="row mb-0 mt-0 justify-content-center text-center border-0 shadow-sm">
                                    <div className="col-sm-12 card-body card-custom3">
                                        <strong>
                                            <h4 className="h4-custom3">Adresse</h4>
                                        </strong>
                                        <div className="mx-auto">
                                            <h5>Entrez vos coordonnées<br/>en remplissant les champs disponibles</h5>
                                        </div>
                                        <div className="div-custom5 position-absolute">
                                            <div>
                                                <img className="cercle"
                                                     src={cercle}
                                                     alt="cercle"/>
                                            </div>
                                        </div>
                                        <div className="position-custom position-relative">

                                            <p className="col-6 ml-5 mb-1"><strong>Rue</strong></p>
                                            <div className="p-custom6 the-gift10 mx-auto my-auto">
                                                <textarea className="form-control rounded-0 p-custom6"
                                                          id="Textarea10"
                                                          rows="1"
                                                          placeholder="Veuillez rédiger ici."
                                                >
                                                </textarea>
                                            </div>
                                            <div className="row mt-4 mb-1">
                                                <p className="p-custom8 col-7 ml-2 my-auto"><strong>Ville</strong></p>
                                                <p className="p-custom9 ml-2 my-auto"><strong>Code postal</strong></p>
                                            </div>
                                            <div className="row col-7 mx-auto my-auto">
                                                <div className="p-custom6 the-gift12 mx-auto my-auto">
                                                    <textarea className="form-control rounded-0 p-custom6"
                                                              id="Textarea11"
                                                              rows="1"
                                                              placeholder="Veuillez rédiger ici."
                                                    >
                                                    </textarea>
                                                </div>
                                                <div className="p-custom6 the-gift13 mx-auto my-auto">
                                                    <textarea className="form-control rounded-0 p-custom6"
                                                              id="Textarea12"
                                                              rows="1"
                                                    >
                                                    </textarea>
                                                </div>
                                            </div>
                                            <p className="col-7 ml-4 mt-4 mb-1"><strong>Commune</strong></p>
                                            <div className="p-custom6 the-gift10 mx-auto my-auto">
                                                <textarea className="form-control rounded-0 p-custom6"
                                                          id="Textarea13"
                                                          rows="1"
                                                          placeholder="Veuillez rédiger ici."
                                                >
                                                </textarea>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="container-fluid text-center">
                                <strong><h4 className="h4-custom3">Versement</h4></strong>
                                <div className="div-custom mx-auto">
                                    <h5>Entrez vos coordonnées bancaires<br/>pour recevoir vos dons perçus</h5>
                                </div>
                            </div>


                            < div className="container-fluid text-center position-custom">
                                <div className="div-custom6 position-absolute">
                                    <img className="banking-card"
                                         src={bankingCard}
                                         alt="Illustration Carte bancaire"
                                    />
                                </div>
                                <div className="div-custom7 position-relative">
                                    <p className="col-7 ml-5 mb-1"><strong>IBAN</strong></p>
                                    <div className="the-gift11 mx-auto">
                                        <textarea
                                            className="form-control rounded-0 p-custom6"
                                            id="Textarea12"
                                            rows="1"
                                            placeholder="Veuillez rédiger ici"
                                        >
                                        </textarea>
                                    </div>

                                </div>



                                <div className="row mx-auto mb-0 mt-0 justify-content-center text-center">
                                    <button className="btn-return waves-effect z-depth-0"  type="submit">
                                        <a href="/Project">Annuler</a>
                                    </button>
                                    <form className="col-2"></form>
                                    <button className="btn-custom waves-effect z-depth-0"  type="submit">
                                        <a href="/Project">Sauvegarder</a>
                                    </button>
                                </div>

                            </div>


                        </main>


                    </div>

                    {/* ---------------------------- (End) Displays the Dashboard to the right of the navigation bar ------------------- */}
                </div>
            </div>

        );

    }
}

export default Profil