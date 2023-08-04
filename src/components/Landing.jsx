function Landing() {

    const tecnology = "Technologic stack";
    const project  = "Projects";

    return(
        <div>
            <div class="perfil animate__animated animate__fadeInDownBig">
                <img class="perfil_imagen"src="src/assets/images/perfil.png" />
            </div>        


            <div class="inicial animate__animated animate__fadeIn">
                <h3 class="inicial_titulo">About me</h3>
                <br />
                <p class="parrafoInicial_texto"> 
                        This is a space dedicated to make a compilation of all the elements
                        that make up my personal training, my work experience
                        and also make a sample of the dedication which I devote myself to this task
                        so exciting... the <strong> development, technology and information</strong>.
                </p>
            </div> 

            <div className="container mt-10 mb-5 text-center block-dark">
                <h2 className="pt-5 pb-5">
                    Wanna know more?                    
                </h2>

                <p className="mt-5 mb-5">Lets start then!</p>

                <div>
                    <div className="col-md-6">
                        <button className="pt-5 pb-5">{tecnology}</button>
                    </div>
                    <div className="col-md-6">
                        <button className="pt-5 pb-5">{project}</button>    
                    </div>
                </div>
                
            </div>
        </div>                
    )
}

export default Landing;