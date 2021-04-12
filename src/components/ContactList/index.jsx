import PropTypes from 'prop-types';
import useStyles from './styles';

const ContactList = ({ contacts, onDeleteContact }) => {
  const classes = useStyles();
  return (
    <ul className={classes.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={classes.item} key={id}>
          {name}: <span className={classes.span}>{number}</span>
          <button
            className={classes.btn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
export default ContactList;
