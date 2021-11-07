import React from 'react';
import ContactCard from './ContactCard';

function ContactList(props) {
   var contactList = props.contacts.map(function (contact) {
     return <ContactCard key={contact.id} contact={contact} />;
   });
    return <div className="ui celled list">{contactList}</div>;
}

export default ContactList;