function Header() {

    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">  
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">Augusto Occhiuzzi</a>
                <button class="navbar-toggler" type="button" 
                data-toggle="collapse" data-target="#botonCollapse" 
                aria-controls="botonCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="botonCollapse">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link mr-4" href="../index.html">Home</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link mr-4" href="proyectos.html">Projects<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-4" href="experiencia.html">Experience</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-4" href="contacto.html">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>    
        </nav>
    )

}

export default Header;