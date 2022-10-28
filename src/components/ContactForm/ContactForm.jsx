import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css'
import { BsPhoneFill } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // const onChangeInputName = event => {
  //   setName(event.target.value);
  // };
  // const onChangeInputNumber = event => {
  //   setNumber(event.target.value);
  // };

const onChangeInput = event => {
  const { name, value } = event.target;
  switch (name) {
    case 'name':
      setName(value);
      break;
    case 'number':
      setNumber(value);
      break;

      default:
        console.warn(`Field ${name} not found.`);
  }
}

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({name, number});
    setName('');
    setNumber('');
  };

return ( 
<form onSubmit={handleSubmit}>
        <label className={css.label}>Name:
         <input className={css.input}
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      onChange={onChangeInput}
      value={name}
      /> 
        </label>
        <label className={css.label}>Number<BsPhoneFill size={20} className={css.icon}/>:
         <input className={css.input}
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
      onChange={onChangeInput}
      value={number}
    /> 
        </label>
    <button type="submit" className={css.btn}><FaUserPlus size={20} className={css.btn_icon}/>Add contact</button>
    </form>
    );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;