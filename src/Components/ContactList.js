import React from 'react';

function ContactList(props) {
   var contactList = props.contacts.map(function (contact) {
     return <li>{contact.id}</li>;
   });
    return <div className="ui celled list">{contactList}</div>;
}

export default ContactList;