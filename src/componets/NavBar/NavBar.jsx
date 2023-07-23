import CardWidget from "../CardWidget/CardWidget"
import "./NavBar.css"
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" to="/"><img className="logo-nav" src="https://i.ibb.co/6mxfdhY/logo2.png" alt="logo" />MHOA</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link " to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/nike">Nike</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/adidas">Adidas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/puma">Puma</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/newbalance">NewBalance</Link>
                        </li>
                        <li className="nav-item">
                            <CardWidget/>
                        </li>
                    </ul>
                </div>
                
            </div>
        </nav>
    )
}

export default NavBar