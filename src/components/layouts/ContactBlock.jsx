import React, { useState, useEffect, useRef } from 'react';

function ContactBlock() {




    return(

        <div className="mt-5 mb-5  ContactFormContainer">
            <div className="container_form1">
                <div>
                    <h1 className="animate__animated animate__fadeIn">Contact me!</h1>
                    <i className="fa-solid fa-envelopes-bulk"></i>
                    <p className="message animate__animated animate__fadeIn">Send a message and I will answer as soon as possible.</p>
                </div>
            </div>
            <div>
                <div className="container_form2">
     
                    <form action="https://formsubmit.co/augusto.occh@gmail.com" method="POST">
                        <div className="form-group">
                            <input type="text" name="name" className="form-control animate__animated animate__fadeIn nombre" id="nombre" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="surname" className="form-control animate__animated animate__fadeIn nombre" id="apellido" placeholder="Surname"  />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" className="form-control animate__animated animate__fadeIn nombre" id="email" placeholder="Email" />
                        </div>
        
                        <div className="form-group">
                            <textarea type="text" name="coment" className="form-control animate__animated animate__fadeIn nombre" id="coment"
                                aria-describedby="emailHelp" placeholder="Send your comment"></textarea>
                        </div>

                        <div className="button-block">
                            <button type="submit" className="btn btn-primary animate__animated animate__fadeIn">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default ContactBlock;