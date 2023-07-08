import CardWidget from "../CardWidget/CardWidget"
import "./NavBar.css"

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="/"><img className="logo-nav" src="https://i.ibb.co/6mxfdhY/logo2.png" alt="logo" />MHOA</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link " href="">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Tienda</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Informacion</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Contacto</a>
                        </li>
                    </ul>
                </div>
                <CardWidget/>
            </div>
        </nav>
    )
}

export default NavBar