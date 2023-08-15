import ContactList from './ContactList';
import { ContactsForm } from './ContactsForm';
import Filter from './Filter';
import React from 'react';
import { nanoid } from 'nanoid';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // const [contacts, setContacts] = useState('');
  // const[filter, setFilter] = useState('');

  componentDidMount() {
    const stor = JSON.parse(localStorage.getItem('contacts'));
    if (stor) {
      this.setState({ contacts: stor });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  handleAddContact = newContact => {
    const res = this.state.contacts.some(el => el.name === newContact.name);

    res
      ? alert(`Name ${newContact.name} has already in the list`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, { id: nanoid(), ...newContact }],
        }));
  };

  getFilteredData = () => {
    const filter = this.state.filter.toLowerCase();
    const filterdContacts = this.state.contacts.filter(el => {
      const name = el.name.toLowerCase();
      return name.includes(filter);
    });
    return filterdContacts;
  };

  handleFilter = event => {
    this.setState({ filter: event.target.value });
  };

  handleDelete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    const filteredData = this.getFilteredData();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactsForm handleAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter
          onChangeFilterValue={this.handleFilter}
          value={this.state.filter}
        />
        <ContactList onDelete={this.handleDelete} paramList={filteredData} />
      </div>
    );
  }
}
