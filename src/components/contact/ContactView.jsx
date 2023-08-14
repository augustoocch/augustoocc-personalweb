import ContactBlock from "../layouts/ContactBlock";
import { useLayoutEffect } from 'react';

function ContactView() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    })

    return (

        <ContactBlock />
    )

}

export default ContactView;