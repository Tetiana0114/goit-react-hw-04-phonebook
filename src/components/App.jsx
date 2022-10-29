import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import SearchField from 'components/SearchField';

export const App = () => {
  const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

useEffect(() => {
  window.localStorage.setItem('contacts', JSON.stringify(contacts))
}, [contacts]);
  
const onFormSubmit = ({ name, number }) => {
    const addedName = { id: nanoid(), name: name, number: number };
    contacts.find(contact => contact.name === name) ? window.alert(`${name} is already in contacts !`) : 
    setContacts(prev => [...prev, addedName]);
};

const handleFilter = event => {
  setFilter(event.target.value.toLowerCase());
};

const onFilteredNames = () => {
  const normalizedFilter = filter.toLowerCase().trim();
  return contacts.filter(contact => {
    return (
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  })
};

const onDelete = id => {
  setContacts(prev => prev.filter(contact => contact.id !== id));
};

return (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      color: '#010101'
    }}
  >
<Section title="Phonebook:">
<ContactForm onSubmit={onFormSubmit}/>
</Section>
<Section title="Contacts:">
<SearchField onChange={handleFilter} />
<ContactList contacts={onFilteredNames()} onClick={onDelete}/>
</Section>
  </div>
);
}