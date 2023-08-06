function Header() {

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="index.html">Augusto Occhiuzzi</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link mr-4" href="../index.html">Home</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link mr-4" href="proyectos.html">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link mr-4" href="experiencia.html">Experience</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link mr-4" href="contact.html">Contact</a>
                </li>
                </ul>
            </div>
        </nav>        
    )

}

export default Header;