import PropTypes from 'prop-types';
import css from './SearchField.module.css'
import { FaSearch } from "react-icons/fa";

const SearchField = ({ onChange }) => {
    return (
    <label className={css.label}><FaSearch size={20} className={css.icon}/> Find contacts by the name:
        <input className={css.input}
        type="text" 
        name="filter" 
        onChange={onChange} />
    </label>
        );
    }

SearchField.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default SearchField;