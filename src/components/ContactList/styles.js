import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
  list: {
    margin: 0,
    padding: 0,
    marginTop: 20,
  },
  item: {
    marginBottom: 5,
    fontWeight: 600,
  },
  span: {
    marginRight: 10,
    fontWeight: 400,
  },
  btn: {
    color: 'maroon',
    backgroundColor: 'salmon',
  },
});

export default useStyles;
