import PropTypes from 'prop-types';
import css from './ContactListElement.module.css'
import { FiUser } from "react-icons/fi";

const ContactListElement = ({ name, number, onClick } ) => {
  return <li className={css.list_item}>
            <p className={css.list_name}><FiUser size={20} className={css.icon}/> {name}: <span className={css.list_number}>{number}</span></p>
            <button type="button" onClick={onClick} className={css.list_btn}>Delete</button>
        </li>
};

ContactListElement.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ContactListElement;