import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  title: {
    margin: 0,
    padding: 0,
    maginBottom: 10,
    fontSize: 20,
    color: 'lightslategray',
  },
  input: {
    padding: 5,
  },
  btn: {
    width: 150,
    marginTop: 10,
    padding: 5,
    backgroundColor: 'paleturquoise',
  },
});

export default useStyles;
