import React from 'react';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import { v4 as uuidv4 } from 'uuid';
import Filter from './filter/Filter';


class App extends React.Component {

  state = {
    contacts: [],
    filter: ''
  }

  getContacts = (newContact) => {
    newContact['id'] = uuidv4();
    this.setState((prev)=>prev.contacts.push(newContact))
  }

  deleteContact = (idx) => {
    this.setState((prev) => prev.contacts.splice(idx, 1))
  }

  getNamesByFilter = (value) => {
    this.setState({filter : value});
  }

  render(){
    let filteredItems;
    this.state.filter ? filteredItems = this.state.contacts.filter(el => (
        el.name.toLowerCase().includes(this.state.filter.toLowerCase())))
      : filteredItems = this.state.contacts;
    return (
      <>
        <h1 className="title">Phonebook</h1>
        <ContactForm {...this.state} getContacts={this.getContacts}/>
        <h2 className="title">Contacts</h2>
        <Filter getNamesByFilter = {this.getNamesByFilter}/>
        <ContactList filteredItems={filteredItems} getIndexForDelete={this.deleteContact}/>
      </>
    );
  }
}

export default App;
