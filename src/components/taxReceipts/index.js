import React, {useState} from 'react';
import Sidebar from "../sidebar";
import {Modal, ModalBody, ModalFooter} from 'react-bootstrap';
import ModalHeader from "react-bootstrap/ModalHeader";

function TaxReceipts() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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

                            {/* ------------------------------------     Liste des donateurs récents      -------------------------------------- */}

                            <div className="container-fluid text-center">

                                <div className="row mb-0 mt-0 justify-content-center text-center">
                                    <div className="col-sm-9 listeDon">
                                        <h3 className="h3-custom">Reçus Fiscaux</h3>
                                    </div>
                                </div>

                                <div className="table-responsive-sm">
                                    <table className="table shadow justify-content-around">
                                        <tbody>
                                        <tr>
                                            <th></th>
                                            <th className="">Dispositif</th>
                                            <th className="">Date</th>
                                            <th className="">Don</th>
                                            <th className="">Statut</th>
                                        </tr>
                                        <tr className="line-custom">
                                            <td>doom.eternal@shell.com</td>
                                            <td>Loka'Borne</td>
                                            <td>02/10/2019</td>
                                            <td>2€</td>
                                            <td>
                                                <button className="btn-custom3 waves-effect z-depth-0"
                                                        type="submit" onClick={handleShow}>
                                                    Remplir
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="line2-custom">
                                            <td>noname@town.fr</td>
                                            <td>Loka'Mobile</td>
                                            <td>01/10/2019</td>
                                            <td>20€</td>
                                            <td>
                                                <a href="/taxReceiptsForm"><button className="btn-custom4 waves-effect z-depth-0"
                                                        type="submit">
                                                    Saisi
                                                </button></a>
                                            </td>
                                        </tr>
                                        <tr className="line-custom">
                                            <td>devil.bellvil@gmail.com</td>
                                            <td>Loka'Borne</td>
                                            <td>20/09/2019</td>
                                            <td>5€</td>
                                            <td>
                                                <button className="btn-custom3 waves-effect z-depth-0"
                                                        type="submit" onClick={handleShow}>
                                                    Remplir
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="line2-custom">
                                            <td>it@gmail.com</td>
                                            <td>Loka'Mobile</td>
                                            <td>03/09/2019</td>
                                            <td>10€</td>
                                            <td>
                                                <button className="btn-custom3 waves-effect z-depth-0"
                                                        type="submit" onClick={handleShow}>
                                                    Remplir
                                                </button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/* ------------------------------------  End - Liste des donateurs récents   -------------------------------------- */}
                        </main>

                        <div>
                            <div className="row mx-auto mb-0 mt-0 justify-content-center text-center">
                                <button className="btn-return waves-effect z-depth-0"
                                        type="submit">
                                    <a href="/dashboard">Retour</a>
                                </button>
                            </div>

                            <>
                                <Modal show={show} onHide={handleClose} className="text-center" size="sm" closeButton>

                                    <ModalHeader className="mb-0" closeButton>
                                        <ModalBody><strong>hedge@gmail.com</strong></ModalBody>
                                    </ModalHeader>
                                    <ModalBody className="modal-custom"><strong>2 €</strong></ModalBody>
                                    <ModalBody>Nom du Donateur <br/>Adresse1 <br/>Adresse2 <br/>Code postal + Ville <br/>France</ModalBody>
                                    <ModalFooter className="text-center justify-content-center mx-auto">
                                        {/*<Button variant="secondary" onClick={handleClose}>*/}
                                        {/*    Fermer*/}
                                        {/*</Button>*/}
                                        <button
                                            className="btn-custom2 waves-effect z-depth-0"
                                            type="submit">                                                  <a href="/taxReceiptsForm">Remplir le formulaire</a>
                                        </button>
                                    </ModalFooter>
                                </Modal>
                            </>

                        </div>

                    </div>

                </div>
                
            </div>
        );
    }
// }

export default TaxReceipts