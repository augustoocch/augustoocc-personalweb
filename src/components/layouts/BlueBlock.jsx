function BlueBlock({title, text}) {


    return (

        <div className="inicial animate__animated animate__fadeIn">
            <h3 className="inicial_titulo">{title}</h3>
            <br />
            <p className="parrafoInicial_texto"> 
                {text}
            </p>
        </div>
    )
}

export default BlueBlock;
