function BlueLayout(title, message, block1, block2 ) {

    return (

        <div className="container mt-10 mb-5 text-center block-dark">
                <h2 className="pt-5 pb-5">
                        {title}                    
                </h2>

                <p className="mt-5 mb-5">{message}</p>

                <div>
                    <div id="technology" className="col-md-6 mt-5 mb-5 landing-blocks" data-aos="zoom-out-down" data-aos-duration="1500">
                            <button className="pt-5 pb-5">{block1}</button>
                    </div>
                    <div id="projects" className="col-md-6 mt-5 mb-5 landing-blocks" data-aos="zoom-out-down" data-aos-duration="1500">
                            <button className="pt-5 pb-5">{block2}</button>    
                    </div>
                </div>
        </div>
    )
}

export default BlueLayout;

