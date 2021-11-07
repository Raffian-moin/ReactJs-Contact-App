import React, { useState, useEffect } from "react";
import AddContact from "./Components/AddContact";
import ContactList from "./Components/ContactList";
import Header from "./Components/Header";
import { v4 as uuidv4 } from "uuid";


import "./App.css";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts, {id:uuidv4(),...contact}]);
    console.log(contact);
  }
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    console.log(newContactList);
    setContacts(newContactList);
  }
  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) {
      setContacts(retrieveContacts);
    }
  }, []);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);
  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
