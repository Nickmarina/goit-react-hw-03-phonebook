import useStyles from './styles';
const Filter = ({ onFilter, filter }) => {
  const classes = useStyles();
  return (
    <div>
      <h4 className={classes.title}>Find contacts by name</h4>
      <input
        className={classes.input}
        type="text"
        value={filter}
        onChange={onFilter}
      ></input>
    </div>
  );
};

export default Filter;
