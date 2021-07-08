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
    fontWeight: 'bold'
  },
  text:{
    textAlign: 'left',
    margin: '5%',
    fontSize: 14,
    fontWeight : 'normal',
  },
  connectingText:{
    marginLeft: '5%',
  },
  closingText:{
    textAlign: 'center',
    fontWeight:'bold',
  },
  image:{
    flex: 3,
    width: '100%',
  },
});

export default styles;
