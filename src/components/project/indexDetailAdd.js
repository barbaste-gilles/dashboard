import React from "react";
// import logohandidanse from "../../assets/Logo_Handidanse.png";
// import hedge from "../../assets/haie.png";
// import plantation from "../../assets/Plantation.jpg"
import Sidebar from "../sidebar";
import Gauge from "../gauge";

class DetailProjectAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            file2: null,
            file3: null,
        };
        this.uploadSingleFile = this.uploadSingleFile.bind(this);
        this.uploadSingleFile2 = this.uploadSingleFile2.bind(this);
        this.uploadSingleFile3 = this.uploadSingleFile3.bind(this);
        // this.upload = this.upload.bind(this)
    }

    uploadSingleFile(e) {
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
        })
    }
    uploadSingleFile2(f) {
        this.setState({
            file2: URL.createObjectURL(f.target.files[0])
        })
    }
    uploadSingleFile3(g) {
        this.setState({
            file3: URL.createObjectURL(g.target.files[0])
        })
    }


    // upload(e) {
    //     e.preventDefault()
    //     console.log(this.state.file)
    // }

    render() {

        let imgPreview;
        let imgPreview2;
        let imgPreview3;

        if (this.state.file) {
            imgPreview = <img src={this.state.file} width="180px" height="275px" alt='' />;
        }

        if (this.state.file2) {
            imgPreview2 = <img src={this.state.file2} width="180px" height="130px" alt='' />;
        }

        if (this.state.file3) {
            imgPreview3 = <img src={this.state.file3} width="125px" height="125px" alt='' />;
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
                                        <p className="p-custom7 mx-auto">Ajouter la photo du projet</p>
                                        <input type="file" onChange={this.uploadSingleFile3}/>
                                        <div className="preview">
                                                {imgPreview3}
                                        </div>
                                        <h6 className="h5-custom">Nom du projet</h6>
                                        <div className="form-group the-gift9 mx-auto">
                                            <textarea
                                                className="form-control"
                                                id="Textarea5"
                                                rows="1"
                                                placeholder="Veuillez rédiger ici"
                                            >
                                            </textarea>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className="container-fluid text-center">
                                <strong><h4 className="h4-custom3">Jauge de don</h4></strong>
                                <div className="mx-auto">
                                    <h5>Cliquez sur les valeurs puis changer<br/>le montant du don et le message du
                                        bénéfice</h5>
                                </div>
                                <div className="gauge-custom mx-auto">
                                    < Gauge />
                                </div>
                                <div className="the-gift3 mx-auto">
                                    <p>Doit être suppérieur au palier précédent</p>
                                </div>
                                <h6 className="h5-custom3">Bénéfice du montant</h6>
                                {/*<div className="h5-custom2 mx-auto">*/}
                                {/*    <h5>Une danse de plus</h5>*/}
                                {/*</div>*/}
                                <div className="form-group the-gift9 mx-auto">
                                    <textarea
                                        className="form-control"
                                        id="Textarea5"
                                        rows="1"
                                        placeholder="Veuillez rédiger ici"
                                    >
                                    </textarea>
                                </div>
                            </div>

                            <div className="card card2 container-fluid text-center mt-5 border-0 shadow-sm">

                                <div className="row mb-0 mt-0 justify-content-center text-center border-0 shadow-sm">
                                    <div className="col-sm-12 card-body card-custom3">
                                        <strong>
                                            <h4 className="h4-custom3">Présentation rapide</h4>
                                        </strong>
                                        <div className="mx-auto">
                                            <h5>Décrivez brièvement qui vous êtes<br/>et quel est votre objectif principal</h5>
                                        </div>
                                        <div className="position-custom position-relative">
                                            <div className="p-custom4 mx-auto my-auto position-absolute">
                                            </div>
                                            <div className="card p-custom6 the-gift8 mx-auto my-auto">
                                                <textarea className="form-control rounded-0 p-custom6"
                                                          id="Textarea1"
                                                          rows="12"
                                                          placeholder="Veuillez rédiger ici"
                                                >

                                                </textarea>
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
                                    <h5>Ajoutez une image représentant au mieux votre objectif<br/>et décrivez en trois lignes vos moyens de l'atteindre</h5>
                                </div>

                                <div className="position-relative">
                                    <div className="img-custom position-absolute">
                                    </div>
                                    <div className="position-custom2 position-absolute">
                                        <h5 className="h5-custom4">Loka'Mobile</h5>
                                        <hr className="highlighted"/>
                                    </div>
                                    {/*Gestion de la sélection de l'image*/}
                                    <div className="div-custom2 position-absolute shadow-sm">
                                        <p>Ajouter ou changer photo</p>
                                        <input type="file" onChange={this.uploadSingleFile}/>
                                    </div>
                                    <form className="img-custom3 position-absolute">
                                        <div className="form-group img-custom3 preview">
                                            {imgPreview}
                                        </div>
                                    </form >
                                    {/*Fin de Gestion de la sélection de l'image*/}

                                    <div className="position-custom3 position-absolute">
                                        <h5 className="h5-custom4">Loka'Borne</h5>
                                        <hr className="highlighted2"/>
                                    </div>
                                    {/*Gestion de la sélection de la 2éme image*/}
                                    <div className="div-custom3 position-absolute shadow-sm">
                                        <p>Ajouter ou changer photo</p>
                                        <input type="file" onChange={this.uploadSingleFile2}/>
                                    </div>
                                    <form className="img-custom2 position-absolute">
                                        <div className="form-group img-custom2 preview">
                                            {imgPreview2}
                                        </div>
                                    </form>
                                    {/*Fin de Gestion de la sélection de la 2éme image*/}
                                </div>
                            </div>

                            < div className="container-fluid text-center position-custom4">
                                <div className="row mx-auto mb-0 mt-0 justify-content-center text-center">
                                    <div className="the-gift5">
                                        <strong>1</strong>
                                    </div>
                                    <div className="the-gift6">
                                        <textarea
                                            className="form-control rounded-0 p-custom6"
                                            id="Textarea2"
                                            rows="5"
                                            placeholder="Veuillez rédiger ici"
                                        >
                                        </textarea>
                                    </div>
                                    <div className="the-gift5">
                                        <strong>2</strong>
                                    </div>
                                    <div className="the-gift6">
                                        <textarea
                                            className="form-control rounded-0 p-custom6"
                                            id="Textarea3"
                                            rows="5"
                                            placeholder="Veuillez rédiger ici"
                                        >
                                        </textarea>
                                    </div>
                                    <div className="the-gift5">
                                        <strong>3</strong>
                                    </div>
                                    <div className="the-gift6">
                                        <textarea
                                            className="form-control rounded-0 p-custom6"
                                            id="Textarea4"
                                            rows="5"
                                            placeholder="Veuillez rédiger ici"
                                        >
                                        </textarea>
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
                                <button className="btn-return waves-effect z-depth-0"  type="submit">
                                    <a href="/Project">Annuler</a>
                                </button>
                                <form className="col-2"></form>
                                <button className="btn-custom waves-effect z-depth-0"  type="submit">
                                    <a href="/Project">Sauvegarder</a>
                                </button>
                            </div>


                        </main>


                    </div>

{/* ---------------------------- (End) Displays the Dashboard to the right of the navigation bar ------------------- */}
                </div>
            </div>

        );

    }
}

export default DetailProjectAdd