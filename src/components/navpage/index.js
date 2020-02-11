import React from 'react';
import logocomplet from '../../assets/Logo_Complet.png';

const NavItem = props => {
    const pageURI = window.location.pathname+window.location.search
    const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
    const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
    return (
        <li className={liClassName}>
            <a href={props.path} className={aClassName}>
                {props.name}
                {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
            </a>
        </li>
    );
}

// class NavDropdown extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isToggleOn: false
//         };
//     }
//     showDropdown(e) {
//         e.preventDefault();
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }));
//     }
//     render() {
//         const classDropdownMenu = 'dropdown-menu' + (this.state.isToggleOn ? ' show' : '')
//         return (
//             <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown"
//                    aria-haspopup="true" aria-expanded="false"
//                    onClick={(e) => {this.showDropdown(e)}}>
//                     {this.props.name}
//                 </a>
//                 <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
//                     {this.props.children}
//                 </div>
//             </li>
//         )
//     }
// }


class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-warning bg-custom shadow">
                <div className="row col-3 justify-content-center">
                    <a href="/dashboard">
                        <img className="navbar-brand logocomplet"
                        src={logocomplet}
                        href="/dashboard"
                        alt="Logo Complet Lokalero"/>
                    </a>
                </div>
                {/*<a className="navbar-brand" href="/dashboard"></a>*/}
                {/*<button className="navbar-toggler navbar-light border-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">*/}
                {/*    <span className="navbar-toggler-icon"></span>*/}
                {/*</button>*/}

                <div className="row col-9 justify-content-center navbar-custom navbar-collapse">

                    <ul className="navbar-nav mr-auto navbar-expand-lg container-fluid" >

                        {/*<NavItem path="/dashboard" name="Page 1" />*/}
                        {/*<NavItem path="/dashboard" name="Page 2" />*/}
                        {/*<NavItem path="/dashboard" name="Disabled" disabled="true" />*/}

                        {/*<form className="form-control col-sm-2 d-inline-flex border-light center-block shadow p-0 justify-content-xl-around container-fluid">*/}
                        {/*    <NavItem path="/dashboard" name="Global" />*/}
                        {/*</form>*/}

                        {/*container-fluid déactive le bouton - la solution pour centrer les boutons n'est pas retenue*/}
                            <button className="col-sm-2 btn btn-md custom-gradient shadow btn-block my-4 border-light p-0 justify-content-xl-around container-fluid" type="button">
                                <NavItem path="/dashboard" name="Global" />
                            </button>

                        {/*<form className="form-control col-sm-2 d-inline-flex border-light center-block shadow p-0 justify-content-xl-around container-fluid">*/}
                        {/*    <NavItem path="/dashboard" name="Bornes" />*/}
                        {/*</form>*/}
                            <button className="col-sm-2 btn btn-md custom-gradient shadow btn-block my-4 border-light p-0 justify-content-xl-around container-fluid" type="button">
                                <NavItem path="/dashboard" name="Bornes" />
                            </button>

                        {/*<form className="form-control col-sm-2 d-inline-flex border-light center-block shadow p-0 justify-content-xl-around container-fluid">*/}
                        {/*    <NavItem path="/dashboard" name="QR Codes" />*/}
                        {/*</form>*/}
                            <button className="col-sm-2 btn btn-md custom-gradient shadow btn-block my-4 border-light p-0 justify-content-xl-around container-fluid" type="button">
                                <NavItem path="/dashboard" name="QR Codes" />
                            </button>


                        {/*<form className="form-control col-3 d-inline-flex border-light center-block shadow p-0 justify-content-xl-around container-fluid">*/}
                        {/*    <NavDropdown name="Filtres">*/}
                        {/*        <a className="dropdown-item" href="/dashboard">Filtre 1</a>*/}
                        {/*        <a className="dropdown-item" href="/dashboard">Filtre 2</a>*/}
                        {/*        <div className="dropdown-divider"></div>*/}
                        {/*        <a className="dropdown-item" href="/dashboard">Autre Filtre</a>*/}
                        {/*    </NavDropdown>*/}
                        {/*</form>*/}
                        {/*<form className="form-control col-3 d-inline-flex p-0 border-light center-block shadow justify-content-xl-around container-fluid">*/}
                        {/*    <NavDropdown name="Périodes">*/}
                        {/*        <a className="dropdown-item" href="dashboard">Mois en cours</a>*/}
                        {/*        <a className="dropdown-item" href="/dashboard">Période 2</a>*/}
                        {/*        <div className="dropdown-divider"></div>*/}
                        {/*        <a className="dropdown-item" href="/dashboard">Autre période</a>*/}
                        {/*    </NavDropdown>*/}
                        {/*</form>*/}

                    </ul>
                    {/*<form className="form-inline my-2 my-lg-0">*/}
                        {/*<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />*/}
                        {/*<button className="btn btn-outline-success my-4 my-sm-0" type="submit">Global</button>*/}
                    {/*</form>*/}
                </div>
            </nav>
        )
    }
}

export default Navigation;