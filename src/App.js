import { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

const useStyles = createUseStyles({
  container: {
    marginLeft: 30,
  },
});

const App = () => {
  const classes = useStyles();
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleChangeContacts = newContact => {
    return contacts.find(contact => contact.name === newContact.name)
      ? alert(`${newContact.name} is already in contacts`)
      : setContacts(prevState => [...prevState, newContact]);
  };

  const handleFilter = e => setFilter(e.target.value);
  const normalizedContact = filter.toLowerCase();
  const contactsForList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedContact),
  );

  const hadleDeleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('contacts'));
    setContacts(data);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={classes.container}>
      <h1>Phonebook</h1>
      <ContactForm onChangeContacts={handleChangeContacts} />
      <h2>Contacts</h2>
      <Filter onFilter={handleFilter} filter={filter} />
      <ContactList
        contacts={contactsForList}
        onDeleteContact={hadleDeleteContact}
      />
    </div>
  );
};

export default App;
