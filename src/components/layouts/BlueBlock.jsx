function BlueBlock(title, message) {


    return (

        <div className="inicial animate__animated animate__fadeIn">
            <h3 className="inicial_titulo">{title}</h3>
            <br />
            <p className="parrafoInicial_texto"> 
                {message}
            </p>
        </div>
    )
}

export default BlueBlock;
