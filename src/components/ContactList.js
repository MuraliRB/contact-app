import React from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import * as Icon from 'react-bootstrap-icons';
import ContactCard from './ContactCard';
const ContactList = (props) => {
  console.log(props);
  const contactList = props.contacts.map((contact) => {
    return (
      <div>
        <ContactCard contact={contact} />
      </div>
    );
  });
  return <div>{contactList}</div>;
};

export default ContactList;
