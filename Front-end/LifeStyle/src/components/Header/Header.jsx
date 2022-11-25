import './Headerstyle.css';
import Logo from "./../../assets/logo/life-logo.png";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{textAlign: "center"}} id="navega">
                <div id="topo">
                    <a href="#"><img className="logo" src={Logo} alt="Logo Life Style" /></a>
                </div>
                <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <ul className="navbar-nav">
                                <li className="nav-item item">
                                    <Link to={'/'} className="nav-link active" aria-current="page"
                                    >HOME</Link>
                                </li>
                                <li className="nav-item item">
                                    <Link to={'/Sobre'} className="nav-link active" aria-current="page"
                                    >SOBRE</Link>
                                </li>
                                <li className="nav-item item">
                                    <Link to={'/Promocoes'} className="nav-link active" aria-current="page"
                                    >PROMOÇÕES</Link>
                                </li>
                                <li className="nav-item item">
                                    <Link to={'/Destino'} className="nav-link active" aria-current="page"
                                    >DESTINO</Link>
                                </li>
                                <li className="nav-item item">
                                    <Link to={'/Contato'} className="nav-link active" aria-current="page"
                                    >CONTATO</Link>
                                </li>
                                <li className=" nav-item item dropdown">
                                    <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    MENU
                                    </a>
                                    <ul className=" boxNav dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link to="/Login" className="dropdown-item link ">Acesso ADM</Link></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><Link to="/Clientes" className="dropdown-item link ">Lista de Clientes</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}