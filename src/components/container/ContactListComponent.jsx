import React from "react";
import PropTypes from "prop-types";
import ContactComponent from "../pure/ContactComponent";
import { Contact } from "../../models/contact.class";

const ContactListComponent = () => {

    const defaultContact = new Contact(
        "Gian",
        "Paucar",
        "gpaucarcortez@gmail.com",
        false,
    );

  return (
    <div>
      <div>
        <h1>Your Contact</h1>
      </div>
      <ContactComponent contact={defaultContact}/>
    </div>
  );
};



export default ContactListComponent;
