import React, { useState, useEffect, useRef } from 'react';

function ContactBlock() {


    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        comment: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const [formErrors, setFormErrors] = useState({});

    const handleValidations = (e) => {
        e.preventDefault();

        const errors = {};

        // Validate empty fields
        if (isBlank(formData.name) || isBlank(formData.surname) || isBlank(formData.email) || isBlank(formData.comment)) {
            errors.error = "All fields are required";
        }

        // If there are errors, update the state and return
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }
    };

    function isBlank(str) {
        return (!str || /^\s*$/.test(str));
    }

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
                    {formErrors.error && (
                        <div className="error-block text-center">
                            <img src="/images/warning.webp"/>
                            <p>{formErrors.error}</p>
                        </div>
                    )}
                   <form onSubmit={handleValidations} method="POST">
                    <div className="form-group">
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control animate__animated animate__fadeIn nombre" id="nombre" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="surname" value={formData.surname} onChange={handleChange} className="form-control animate__animated animate__fadeIn nombre" id="apellido" placeholder="Surname" />
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control animate__animated animate__fadeIn nombre" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <textarea type="text" name="comment" value={formData.comment} onChange={handleChange} className="form-control animate__animated animate__fadeIn nombre" id="coment" aria-describedby="emailHelp" placeholder="Send your comment"></textarea>
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