import { StyleSheet } from 'react-native';
import { TYPOGRAPHY } from './typography';

const sharedStyles = StyleSheet.create({
  container: {
    flex: 3,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: TYPOGRAPHY.COLOR.Default,
    color: 'black',
  },
  title:{
    textAlign: 'center',
    fontSize: 25,
    marginTop: '2%',
    fontWeight: 'bold',
    color:'black',
  },
  text:{
    textAlign: 'left',
    margin: '5%',
    fontSize: 14,
    fontWeight : 'normal',
    color: 'black',
  },
  connectingText:{
    marginLeft: '5%',
    color: 'black',
  },
  closingText:{
    textAlign: 'center',
    fontWeight:'bold',
    color: 'black',
  },
  image:{
    flex: 3,
    width: '100%',
  },
  code:{
    fontFamily: 'courier',
    margin: '5%',
    textAlign: 'center',
    color: 'black',
  },
});

export default sharedStyles;
