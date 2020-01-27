import React from 'react';

class Barnav extends React.Component {

    render() {

        return (
            <div>
                <div className="row">
                    <div className="col-3">
                        <div className="nav flex-column nav-pills"
                             id="v-pills-tab"
                             role="tablist"
                             aria-orientation="vertical">
                            <a className="nav-link active"
                               id="v-pills-acceuil-tab"
                               data-toggle="pill"
                               href="#v-pills-acceuil"
                               role="tab"
                               aria-controls="v-pills-acceuil"
                               aria-selected="true">
                                ACCEUIL
                            </a>
                            <a className="nav-link"
                               id="v-pills-dons-tab"
                               data-toggle="pill"
                               href="#v-pills-dons"
                               role="tab"
                               aria-controls="v-pills-dons"
                               aria-selected="false">
                                DONS
                            </a>
                            <a className="nav-link"
                               id="v-pills-recus-tab"
                               data-toggle="pill"
                               href="#v-pills-recus"
                               role="tab"
                               aria-controls="v-pills-recus"
                               aria-selected="false">
                                RECUS FISCAUX
                            </a>
                            <a className="nav-link"
                               id="v-pills-virements-tab"
                               data-toggle="pill"
                               href="#v-pills-virements"
                               role="tab"
                               aria-controls="v-pills-virements"
                               aria-selected="false">
                                VIREMENTS
                            </a>
                            <hr/>
                            <a className="nav-link"
                               id="v-pills-compte-tab"
                               data-toggle="pill"
                               href="#v-pills-compte"
                               role="tab"
                               aria-controls="v-pills-compte"
                               aria-selected="false">
                                CONFIGURER MON COMPTE
                            </a>
                            <a className="nav-link"
                               id="v-pills-deconnecter-tab"
                               data-toggle="pill"
                               href="#v-pills-deconnecter"
                               role="tab"
                               aria-controls="v-pills-deconnecter"
                               aria-selected="false">
                                ME DECONNECTER
                            </a>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="tab-content"
                             id="v-pills-tabContent">
                            <div className="tab-pane fade show active"
                                 id="v-pills-acceuil"
                                 role="tabpanel"
                                 aria-labelledby="v-pills-acceuil-tab">
                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae dolorem
                                 esse fugiat illum, nemo perferendis quaerat rerum. Asperiores blanditiis ea nostrum
                                 placeat? Aut, tempora, vero. Aspernatur minus porro temporibus.
                            </div>
                            <div className="tab-pane fade"
                                 id="v-pills-dashboard"
                                 role="tabpanel"
                                 aria-labelledby="v-pills-dashboard-tab">
                                 Culpa cumque dolorem, dolores doloribus eos error facere magni maiores modi,
                                 molestiae, nulla perspiciatis provident quas quod sunt velit vero? Accusamus maxime
                                 natus neque nihil nulla omnis ratione recusandae rerum.
                            </div>
                            <div className="tab-pane fade"
                                 id="v-pills-dons"
                                 role="tabpanel"
                                 aria-labelledby="v-pills-dons-tab">
                                 Accusamus dolor ducimus esse et magnam necessitatibus perferendis, quae quam soluta
                                 voluptatibus. Cum doloribus eaque et facere illo labore magnam mollitia nam nesciunt
                                 nulla, qui quidem, suscipit temporibus? Omnis, praesentium.
                            </div>
                            <div className="tab-pane fade"
                                 id="v-pills-deconnexion"
                                 role="tabpanel"
                                 aria-labelledby="v-pills-deconnexion-tab">
                                 Adipisci consectetur eveniet itaque laborum magnam quibusdam quos saepe unde
                                 veniam, vero! Amet delectus deleniti distinctio dolores illum itaque maiores minus
                                 molestias nihil, officia quasi quia rem repudiandae rerum saepe!
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Barnav