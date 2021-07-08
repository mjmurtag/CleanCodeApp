import { StyleSheet } from 'react-native';
import { TYPOGRAPHY } from '../../styles/typography';

const styles = StyleSheet.create({
  container: {
    flex: 3,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: TYPOGRAPHY.COLOR.Default,
  },
  title:{
    textAlign: 'center',
    fontSize: 25,
    marginTop: '2%',
    fontWeight: 'bold',
    marginBottom: '2%',
  },
  text:{
    textAlign: 'left',
    margin: '5%',
    fontSize: 14,
    fontWeight : 'normal',
  },
  connectingText:{
    marginHorizontal: '5%',
    textAlign: 'center',
  },
  closingText:{
    textAlign: 'center',
    fontWeight:'bold',
    marginHorizontal:'5%',
  },
  image:{
    flex: 3,
    width: '100%',
  },
  code:{
    fontFamily: 'courier',
    margin: '5%',
    textAlign: 'center',
  },
});

export default styles;
