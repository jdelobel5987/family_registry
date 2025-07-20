import '../styles/displayContacts.css';
import ContactCard from './ContactCard';
import React, { useState, useEffect } from 'react';


function DisplayContacts() {
    
    const [contacts, setContacts] = useState([]);
    const dataPath = '/data/registry.json'; // beware: this path is relative to the public folder in a React app

    useEffect(() => {
      fetch(dataPath) 
        .then(response => response.json()) // convert response to JSON
        .then(data => setContacts(data)) // save data to state
        .catch(error => console.error('Error fetching contacts:', error));
    }, []); // [] ensures this runs once after the initial render

  return (
    <div className="display-contacts">
      <h2>Contacts List</h2>

      <ul className="contact-list">
        {contacts.map(contact => (
          <li key={contact.id} className="contact-item">
            <ContactCard contact={contact} />
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default DisplayContacts;