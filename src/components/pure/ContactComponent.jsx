import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

const ContactComponent = ({contact}) => {
  return (
    <div>
      <h2>Nombre: {contact.name}</h2>
      <h2>Apellido: {contact.lastName}</h2>
      <h3>Email: {contact.email}</h3>
      <h3>Conectado: {contact.connected ? "CONTACTO EN LINEA" : "CONTACTO NO DISPONIBLE"}</h3>
    </div>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact)
};

export default ContactComponent;
