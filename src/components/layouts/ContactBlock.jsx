import React, { useState, useEffect, useRef } from 'react';

function ContactBlock() {




    return(

        <div class="ContactFormContainer">
            <div class="container_form1">
                <div>
                    <h1 class="animate__animated animate__fadeIn">Contact me!</h1>
                    <i class="fa-solid fa-envelopes-bulk"></i>
                    <p class="message animate__animated animate__fadeIn">Send a message and I will answer as soon as possible.</p>
                </div>
            </div>
            <div>
                <div class="container_form2">
     
                    <form action="https://formsubmit.co/augusto.occh@gmail.com" method="POST">
                        <div class="form-group">
                            <input type="text" name="name" class="form-control animate__animated animate__fadeIn" id="nombre" placeholder="Name" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="surname" class="form-control animate__animated animate__fadeIn" id="apellido" placeholder="Surname"  />
                        </div>
                        <div class="form-group">
                            <input type="email" name="email" class="form-control animate__animated animate__fadeIn" id="email" placeholder="Email" />
                        </div>
        
                        <div class="form-group">
                            <textarea type="text" name="coment" class="form-control animate__animated animate__fadeIn" id="coment"
                                aria-describedby="emailHelp" placeholder="Send your comment"></textarea>
                        </div>

                        <div class="button-block">
                            <button type="submit" class="btn btn-primary animate__animated animate__fadeIn">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default ContactBlock;