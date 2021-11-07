import React from "react";
import AddContact from "./Components/AddContact";
import ContactList from "./Components/ContactList";
import Header from "./Components/Header";

import "./App.css";

function App() {
  const contacts = [
    {
      id: 1,
      name: "moin",
      id: "raffainmoin69@gmail.com",
    },
    {
      id: 2,
      name: "spiderman",
      id: "spiderman@gmail.com",
    },
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts = {contacts} />
    </div>
  );
}

export default App;
