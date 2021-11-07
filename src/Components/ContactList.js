import React from 'react';
import ContactCard from './ContactCard';

function ContactList(props) {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
    console.log(id);
  }
   var contactList = props.contacts.map(function (contact) {
     return <ContactCard key={contact.id} contact={contact} clickHandler={deleteContactHandler} />;
   });
    return <div className="ui celled list">{contactList}</div>;
}

export default ContactList;