import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css'
import { BsPhoneFill } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";

const initialState = { name: '', number: '' };

class ContactForm extends Component {

state = { ...initialState };

onChangeInput = event => {
  this.setState({ [event.target.name]: event.target.value });
};
onSubmit = event => {
  event.preventDefault();
  this.props.onSubmit(this.state);
  this.setState(initialState);
};
static propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

render() {
  const { name, number } = this.state;

  return (
  <form onSubmit={this.onSubmit}>
    <label className={css.label}>Name:
     <input className={css.input}
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  onChange={this.onChangeInput}
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
  onChange={this.onChangeInput}
  value={number}
/> 
    </label>
<button type="submit" className={css.btn}><FaUserPlus size={20} className={css.btn_icon}/>Add contact</button>
</form>
);
}
};

export default ContactForm;