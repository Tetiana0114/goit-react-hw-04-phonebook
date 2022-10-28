import PropTypes from 'prop-types';
import ContactListElement from 'components/ContactListElement';
import css from './ContactList.module.css'

const ContactList = ({ contacts, onClick }) => {
    return (
        <ul className={css.list}>{contacts.map(contact => (
            <ContactListElement
            key={contact.id}
            name={contact.name}
            number={contact.number}
            onClick={() => onClick(contact.id)}
            />
            ))}
        </ul>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
    }))
    
  };

export default ContactList;