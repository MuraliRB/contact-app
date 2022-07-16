import React from 'react';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import * as Icon from 'react-bootstrap-icons';
import User from '../images/user.png';
const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="">
      <ListGroup as="ol">
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <img alt="..." src={User} style={{ width: '40px', height: '40px' }} />
          <div className="ms-2 me-auto">
            <div className="fw-bold">{name}</div>
            <div className="fw-bold">{email}</div>
          </div>
          <Icon.Trash style={{ marginTop: '10px', color: 'red' }} />
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default ContactCard;
